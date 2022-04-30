import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  renderer: Renderer2;
  isDarkMode: Subject<boolean> = new Subject<boolean>();

  // Use matchMedia to check the user preference
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  isDarkModeObservable = this.isDarkMode.asObservable();

  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document,
    private storageService: StorageService,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  initializeThemeSwitcherService() {
    this.storageService.getStoredData('dark-theme').then((val) => {
      if (val == null) {
        //If there is no value in local storage
        this.changeThemeMode(this.prefersDark.matches);
      } else {
        console.log('From local storage', val);
        this.changeThemeMode(val);
      }
    });

    this.prefersDark.addEventListener('change', (mediaQueryListEvent) =>
      this.changeThemeMode(mediaQueryListEvent.matches),
    );
  }

  changeThemeMode(event: boolean) {
    this.isDarkMode.next(event);
    if (event) {
      this.storageService.storeData('dark-theme', true);
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.storageService.storeData('dark-theme', false);
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }
}
