import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StorageService } from '../storage/storage.service';
import { ColorBlindMode } from '../../../assets/config/ThemeSwitcherConfig';
import { countries } from '../../../assets/config/ThemeSwitcherConfig';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  renderer: Renderer2;
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  directionOfText: string;
  colorBlindMode: ColorBlindMode;
  //Getting the values of our ColorBlindEnum as string
  colorBlindModeArray = Object.values(ColorBlindMode).map((item) => String(item));

  fontSize: number;
  font: Array<number> = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];

  // Use matchMedia to check the user preference
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private storageService: StorageService,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  getDarkModePreference(): BehaviorSubject<boolean> {
    return this.isDarkMode;
  }

  getCurrentFontSize() {
    return this.fontSize;
  }

  getColorBlindMode() {
    return this.colorBlindMode;
  }

  initializeThemeSwitcherService() {
    this.storageService.getStoredData('dark-theme').then((value) => {
      if (value === null) {
        //If there is no value in local storage
        this.changeThemeMode(this.prefersDark.matches);
      } else {
        this.changeThemeMode(value);
      }
    });

    this.storageService.getStoredData('font-size').then((value) => {
      if (value === null || isNaN(value)) {
        //Getting the original font-size
        const computedStyle = window.getComputedStyle(this.document.body, null).getPropertyValue('font-size');

        //Converting into decimal number (base 10)
        const computedStyleNumber = parseInt(computedStyle, 10);

        this.setFontBySize(computedStyleNumber);
      } else {
        //Initializing the font size
        this.setFontBySize(value);
      }
    });

    this.storageService.getStoredData('color-blind-mode').then((value) => {
      if (value === null) {
        this.changeColorBlindMode(ColorBlindMode.NORMAL);
      } else {
        this.changeColorBlindMode(value);
      }
    });

    this.prefersDark.addEventListener('change', (mediaQueryListEvent) =>
      this.changeThemeMode(mediaQueryListEvent.matches),
    );
  }

  setFontBySize(fontSize: number) {
    // this.font.forEach((font) => {
    //   this.renderer.removeClass(this.document.body, `font-size-${font}`);
    // });
    // this.renderer.addClass(this.document.body, `font-size-${fontSize}`);
    // this.storageService.storeData('font-size', fontSize);
    // //TODO: Change sizes of buttons icons
    // // if (fontSize >= 18) {
    // //   this.renderer.setAttribute('ion-button', 'size', 'large');
    // // }
    // this.fontSize = fontSize;
  }

  changeThemeMode(event: boolean) {
    this.isDarkMode.next(event);
    if (event) {
      this.storageService.storeData('dark-theme', event);
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.storageService.storeData('dark-theme', event);
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }

  changeDirectionOfText(direction: string) {
    this.renderer.setAttribute(this.document.body, 'dir', direction);
  }

  changeColorBlindMode(newColorBlindMode: ColorBlindMode) {
    this.colorBlindMode = newColorBlindMode;

    // First we remove each EnumType of ColorBlindMode
    this.colorBlindModeArray.forEach((element) => {
      if (element != this.colorBlindMode) {
        this.renderer.removeClass(this.document.body, element);
      }
    });

    this.renderer.addClass(this.document.body, this.colorBlindMode);
    this.storageService.storeData('color-blind-mode', this.colorBlindMode);
  }
}
