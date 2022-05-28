import { Component, Inject, Injectable, Injector } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SearchPage {
  constructor(private barcodeScanner: BarcodeScanner) {}

  async startScan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
