import { AfterViewInit, Component, ElementRef, Inject, Injectable, Injector, ViewChild } from '@angular/core';
import jsQR from 'jsqr';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SearchPage implements AfterViewInit {
  scanResult = null;
  isScanActive: any;
  videoElement: any;
  canvasElement: any;
  canvasContext: any;

  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
  }

  async startScan() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' },
    });

    this.videoElement.srcObject = stream;
    this.videoElement.setAttribute('playsinline', true);
    this.videoElement.play();

    requestAnimationFrame(this.scan.bind(this));
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
        this.isScanActive = false;
        this.scanResult = code.data;
        console.log(this.scanResult);
      } else {
        if (this.isScanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  stopScan() {
    console.log(this.isScanActive);

    this.isScanActive = false;

    this.reset();
  }

  reset() {
    this.scanResult = null;
  }
}
