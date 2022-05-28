import { StorageService } from 'src/app/services/storage/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
  constructor(private storageService: StorageService, private allertController: AlertController) {}

  action() {
    this.allertController
      .create({
        header: 'Warning',
        subHeader: 'Are you sure you want to reset preferences?',
        message: 'This action can not be undone.',
        buttons: [
          {
            text: 'No',
            handler: () => {},
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('done');
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
