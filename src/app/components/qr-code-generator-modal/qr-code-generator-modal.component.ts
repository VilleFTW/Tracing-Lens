import { Component, HostListener, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-qr-code-generator-modal',
  templateUrl: './qr-code-generator-modal.component.html',
  styleUrls: ['./qr-code-generator-modal.component.scss'],
})
export class QrCodeGeneratorModalComponent implements OnInit {
  qrCodeData: string;
  width: number;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.qrCodeData = window.location.href;
    // this.width = window.location.
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.width = window.innerWidth;
  }

  async dismiss() {
    this.modalController.dismiss();
  }

  // This function has been taken from https://github.com/cordobo/angularx-qrcode demo section
  saveAsImage(parent: any) {
    let parentElement = parent.qrcElement.nativeElement.querySelector('canvas').toDataURL('image/png');

    if (parentElement) {
      // converts base 64 encoded image to blobData
      let blobData = this.convertBase64ToBlob(parentElement);
      // saves as image
      const blob = new Blob([blobData], { type: 'image/png' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // name of the file
      link.download = 'TracingLens-QRCode';
      link.click();
    }
  }

  // This function has been taken from https://github.com/cordobo/angularx-qrcode demo section
  private convertBase64ToBlob(Base64Image: string) {
    // split into two parts
    const parts = Base64Image.split(';base64,');
    // hold the content type
    const imageType = parts[0].split(':')[1];
    // decode base64 string
    const decodedData = window.atob(parts[1]);
    // create unit8array of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);
    // insert all character code into uint8array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // return blob image after conversion
    return new Blob([uInt8Array], { type: imageType });
  }
}
