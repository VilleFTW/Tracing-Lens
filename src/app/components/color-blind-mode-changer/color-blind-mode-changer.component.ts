import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-blind-mode-changer',
  template: `
    <ion-item>
      <ion-icon slot="start" name="eye-outline"></ion-icon>
      <ion-label> Color Blind Mode </ion-label>


      <ion-select slot="end"        ok-text="Okay" cancel-text="Dismiss">
       <!-- (ionChange)="changeLanguage($event)" -->
    <!-- <ion-select-option *ngFor="let c of countries" value="{{ c.value }}" > {{c.flag + ' ' + c.name}}</ion-select-option> -->
  </ion-select>
    </ion-item>
  `,
  styles: [
  ]
})
export class ColorBlindModeChangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
