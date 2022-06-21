import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
        icon: 'checkmark-circle-outline',
        position: 'bottom',
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
        icon: 'close-circle-outline',
        position: 'bottom',
        duration: 3000,
      })
      .then((toast) => toast.present());
  }

  showCorrectChainNotification() {
    this.toastController
      .create({
        header: 'Success',
        message: 'Connected to Rinkeby',
        position: 'bottom',
        color: 'success',
        icon: 'checkmark-circle-outline',

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
        position: 'bottom',
        color: 'danger',
        icon: 'close-circle-outline',
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
