import { Component, OnInit } from '@angular/core';
import { ColorBlindMode } from '../../../assets/config/ThemeSwitcherConfig';
import { ThemeSwitcherService } from '../../services/theme-switcher/theme-switcher.service';
@Component({
  selector: 'app-color-blind-mode-changer',
  template: `
    <ion-item>
      <ion-icon slot="start" name="eye-outline"></ion-icon>
      <ion-label> {{ 'SETTINGS.color-blind-mode' | translate }} </ion-label>

      <ion-select
        slot="end"
        [okText]="'COLOR-BLIND-MODE-CHANGER.CHANGE' | translate"
        [cancelText]="'COLOR-BLIND-MODE-CHANGER.DISMISS' | translate"
        (ionChange)="changeColorBlindMode($event)"
        [value]="selectedColorBlindMode"
      >
        <!-- (ionChange)="changeLanguage($event)" -->
        <ion-select-option *ngFor="let colorBlindModeType of colorBlindModeArray" [value]="colorBlindModeType">
          {{ colorBlindModeType | titlecase }}</ion-select-option
        >
      </ion-select>
    </ion-item>
  `,
  styles: [],
})
export class ColorBlindModeChangerComponent implements OnInit {
  //Getting the values of our ColorBlindEnum as string
  colorBlindModeArray = Object.values(ColorBlindMode).map((item) => String(item));
  selectedColorBlindMode: string;
  constructor(private themeSwitcherService: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.selectedColorBlindMode = this.themeSwitcherService.getColorBlindMode();
  }

  changeColorBlindMode(event: Event) {
    this.themeSwitcherService.changeColorBlindMode((event.target as any).value);
  }
}
