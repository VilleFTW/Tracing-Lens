import { Web3Service } from 'src/app/services/web3/web3.service';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CSSProperties } from 'react';
import { CssClassMap } from '@ionic/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  showCopiedToClipboardNotification() {
    this.toastController
      .create({
        message: 'Copied to clipboard',
        color: 'success',
        position: 'bottom',
        icon: 'checkmark-circle-outline',
        duration: 1000,
      })
      .then((toast) => toast.present());
  }
  // private notification;
  constructor(private toastController: ToastController) {}

  showSuccesfullQRCodeScan() {
    this.toastController
      .create({
        header: 'Success',
        message: 'Successfull scan. Navigating to a new page',
        color: 'success',
        position: 'top',
        duration: 1000,
      })
      .then((toast) => toast.present());
  }

  showNotFoundQRCodeScan() {
    this.toastController
      .create({
        header: 'Error',
        message: 'Not found. Please scan a compatible QR Code',
        color: 'danger',
        position: 'top',
        duration: 3000,
      })
      .then((toast) => toast.present());
  }

  showCorrectChainNotification() {
    this.toastController
      .create({
        header: 'Success',
        message: 'Connected to Rinkeby',
        position: 'top',
        color: 'success',
        cssClass: 'toast-custom-class',
        buttons: [
          {
            side: 'end',
            text: 'Close',
            role: 'cancel',
            handler: () => {},
          },
        ],
      })
      .then((toast) => {
        toast.present();
      });
  }

  showWrongChainNotification() {
    this.toastController
      .create({
        header: 'Error',
        message: 'Wrong Chain. Please connect to Rinkeby',
        position: 'top',
        color: 'danger',
        cssClass: 'toast-custom-class',
        buttons: [
          {
            side: 'end',
            icon: 'person',
            text: 'Change Network',
            handler: () => {
              // this.web3;
              console.log('');
            },
          },
          {
            side: 'end',
            text: 'Close',
            role: 'cancel',
            handler: () => {
              console.log('');
            },
          },
        ],
      })
      .then((toast) => {
        toast.present();
      });
  }

  showToast() {
    this.toastController
      .create({
        header: 'Welcome!',
        message: 'John!',
        position: 'top',
        cssClass: 'toast-custom-class',
        buttons: [
          {
            side: 'end',
            icon: 'person',
            handler: () => {
              console.log('');
            },
          },
          {
            side: 'end',
            text: 'Close',
            role: 'cancel',
            handler: () => {
              console.log('');
            },
          },
        ],
      })
      .then((toast) => {
        toast.present();
      });
  }
}
function translateY(arg0: number, px: any): import('csstype').Property.Transform {
  throw new Error('Function not implemented.');
}
