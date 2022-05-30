/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { LanguageService } from './services/language/language.service';
// import { NotificationsService } from './services/notifications/notifications.service';
import { StorageService } from './services/storage/storage.service';
import { ThemeSwitcherService } from './services/theme-switcher/theme-switcher.service';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;

  firebaseConfig = {
    apiKey: 'AIzaSyBv7vP_lLlWvo6xowwkcYhBs-xR7jaHpuc',
    authDomain: 'tracing-eye.firebaseapp.com',
    projectId: 'tracing-eye',
    storageBucket: 'tracing-eye.appspot.com',
    messagingSenderId: '416323544088',
    appId: '1:416323544088:web:aa7be16e19fb01535dcf6d',
  };

  constructor(
    private themeSwitcherService: ThemeSwitcherService,
    private storageService: StorageService,
    private languageService: LanguageService, // private notificationService: NotificationsService,
  ) {}

  ngOnInit(): void {
    this.storageService.initialize();
    this.themeSwitcherService.initializeThemeSwitcherService();
    this.languageService.initializeLanguageService();
    const firebase = initializeApp(this.firebaseConfig);
    console.log(firebase);
  }
}
