import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { appInjector } from '../app.module';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  renderer: Renderer2;
  isDarkMode: boolean;
  
  // Use matchMedia to check the user preference
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  myService = appInjector.get(StorageService);

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  initializeThemeSwitcherService() {
    this.myService.getStoredData('dark-theme').then((val) => {
      if (val == null) {
        //If there is no value in local storage
        console.log('No value in local storage');
        this.changeThemeMode(this.prefersDark.matches);
      } else {
        console.log('From local storage', val);
        this.changeThemeMode(val);
      }
    });

    this.prefersDark.addEventListener('change', (mediaQueryListEvent) => this.changeThemeMode(mediaQueryListEvent));
  }

  getDarkModeStatus(): boolean {
    return this.isDarkMode;
  }

  changeThemeMode(event: any) {
    console.log('First', event);

    event ? this.toggleDarkTheme() : this.toggleLightTheme();
  }

  toggleDarkTheme() {
    if (!this.isDarkMode) {
      console.log('Dark theme toggled');
      this.myService.storeData('dark-theme', true);
      this.renderer.addClass(this.document.body, 'dark');
      this.isDarkMode = true;
    }
  }

  toggleLightTheme() {
    if (this.isDarkMode) {
      console.log('Light theme toggled');
      this.myService.storeData('dark-theme', false);
      this.renderer.removeClass(this.document.body, 'dark');
      this.isDarkMode = false;
    }
  }
}
