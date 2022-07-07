import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ErrorMessages } from 'src/app/util/enums/error-messages.enum';
import { SuccessMessages } from 'src/app/util/enums/success-messages.enum';

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
  constructor(private toastController: ToastController, private translatePipe: TranslatePipe) {}

  showSuccesfullQRCodeScan() {
    this.toastController
      .create({
        header: this.translatePipe.transform('NOTIFICATIONS.SUCCESS.SUCCESS-MESSAGE'),
        message: this.translatePipe.transform('NOTIFICATIONS.SUCCESS.SCANNING-MESSAGE'),
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
        header: this.translatePipe.transform('NOTIFICATIONS.ERROR.ERROR-HEADER'),
        message: this.translatePipe.transform('NOTIFICATIONS.ERROR.NOT-FOUND-ERROR'),
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
        header: this.translatePipe.transform('NOTIFICATIONS.SUCCESS.SUCCESS-HEADER'),
        message: this.translatePipe.transform('NOTIFICATIONS.SUCCESS.CONNECTION-MESSAGE'),
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
        header: this.translatePipe.transform('NOTIFICATIONS.ERROR.ERROR-HEADER'),
        message: this.translatePipe.transform('NOTIFICATIONS.ERROR.WRONG-CHAIN-ERROR'),
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
