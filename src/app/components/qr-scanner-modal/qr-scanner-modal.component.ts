import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import jsQR from 'jsqr';
import { FirestoreDatabaseService } from 'src/app/services/firestore/firestore-database.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Stream } from 'stream';

@Component({
  selector: 'app-qr-scanner-modal',
  templateUrl: './qr-scanner-modal.component.html',
  styleUrls: ['./qr-scanner-modal.component.scss'],
})
export class QrScannerModalComponent implements AfterViewInit {
  modal: HTMLElement;
  scanResult = null;
  isScanActive: any;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  constructor(
    public modalController: ModalController,
    private firestore: FirestoreDatabaseService,
    private router: Router,
    private notificationService: NotificationsService,
  ) {}

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan() {
    await navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: 'environment' },
      })
      .then((videostream: MediaStream) => {
        this.videoElement.srcObject = videostream;
        this.videoElement.setAttribute('playsinline', true);
        this.videoElement.play();
        this.scan();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.isScanActive = true;

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      if (code) {
        this.firestore.getLivestockById(code.data).subscribe((data) => {
          if (data) {
            this.dismiss();
            this.notificationService.showSuccesfullQRCodeScan();
            this.router.navigate(['search', 'livestock', data.id]);
          } else {
            this.notificationService.showNotFoundQRCodeScan();
          }
        });

        //TODO Refactor this so it first checks whether the value is contained
        // within Firebase
        this.isScanActive = false;
        this.scanResult = code.data;
        console.log(this.scanResult);
      } else {
        if (this.isScanActive) {
          setTimeout(() => {
            this.scan();
          }, 100);
        }
      }
    } else {
      setTimeout(() => {
        this.scan();
      }, 100);
    }
  }

  async stopScan() {
    this.isScanActive = false;

    const stream = this.videoElement.srcObject;

    if (stream) {
      const tracks = await stream.getVideoTracks();
      console.table(tracks);

      tracks.forEach((track: MediaStreamTrack) => {
        track.enabled = false;
        track.stop();
      });

      this.videoElement.srcObject = null;
    }
  }

  async reset() {
    this.scanResult = null;
    this.stopScan();
  }

  async dismiss() {
    this.reset();
    this.modalController.dismiss();
  }
}
