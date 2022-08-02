import { StorageService } from 'src/app/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-preferences',
  template: `
    <ion-item>
      <ion-icon slot="start" name="trash-outline"></ion-icon>
      <ion-label> {{ 'SETTINGS.reset-preferences' | translate }}</ion-label>
      <ion-button slot="end" (click)="action()"> {{ 'SETTINGS.reset-preferences-button' | translate }}</ion-button>
    </ion-item>
  `,
  styles: [],
})
export class ResetPreferencesComponent {
  constructor(
    private storageService: StorageService,
    private allertController: AlertController,
    private translatePipe: TranslatePipe,
  ) {}

  action() {
    this.allertController
      .create({
        header: this.translatePipe.transform('RESET-PREFERENCES-MODAL.HEADER'),
        subHeader: this.translatePipe.transform('RESET-PREFERENCES-MODAL.SUBHEADER'),
        message: this.translatePipe.transform('RESET-PREFERENCES-MODAL.MESSAGE'),
        buttons: [
          {
            text: this.translatePipe.transform('RESET-PREFERENCES-MODAL.CANCEL-BUTTON-MESSAGE'),
            handler: () => {},
          },
          {
            text: this.translatePipe.transform('RESET-PREFERENCES-MODAL.RESET-PREFERENCES-CONFIRM-MESSAGE'),
            handler: () => {
              this.storageService.reset();
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
