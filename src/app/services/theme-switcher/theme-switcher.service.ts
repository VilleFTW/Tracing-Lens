import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  renderer: Renderer2;
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
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

  initializeThemeSwitcherService() {
    this.storageService.getStoredData('dark-theme').then((val) => {
      if (val === null) {
        //If there is no value in local storage
        this.changeThemeMode(this.prefersDark.matches);
      } else {
        this.changeThemeMode(val);
      }
    });

    this.storageService.getStoredData('font-size').then((val) => {
      if (val === null) {
        console.log('In local storage false', val);

        //Getting the original font-size
        this.setFontBySize(
          parseInt(window.getComputedStyle(this.document.body, null).getPropertyValue('font-size'), 10),
        );
      } else {
        console.log('In local storage true', val);
        //Initializing the font size
        this.setFontBySize(val);
      }
    });

    this.prefersDark.addEventListener('change', (mediaQueryListEvent) =>
      this.changeThemeMode(mediaQueryListEvent.matches),
    );
  }

  setFontBySize(fontSize: number) {
    this.font.forEach((font) => {
      this.renderer.removeClass(this.document.body, `font-size-${font}`);
    });
    this.renderer.addClass(this.document.body, `font-size-${fontSize}`);
    this.storageService.storeData('font-size', fontSize);

    this.fontSize = fontSize;
    console.log(this.fontSize);
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
}
