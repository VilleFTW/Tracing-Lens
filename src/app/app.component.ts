/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { LanguageService } from './services/language/language.service';
// import { NotificationsService } from './services/notifications/notifications.service';
import { StorageService } from './services/storage/storage.service';
import { ThemeSwitcherService } from './services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    private storageService: StorageService,
    private languageService: LanguageService, // private notificationService: NotificationsService,
  ) {}

  ngOnInit(): void {
    this.storageService.initialize();
    this.themeSwitcherService.initializeThemeSwitcherService();
    this.languageService.initializeLanguageService();
  }
}
