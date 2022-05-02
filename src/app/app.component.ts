/* eslint-disable no-underscore-dangle */
import { Component, HostBinding, OnInit } from '@angular/core';
import { LanguageService } from './services/language/language.service';
import { StorageService } from './services/storage/storage.service';
import { ThemeSwitcherService } from './services/theme-switcher/theme-switcher.service';
import { Web3Service } from './services/web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;

  constructor(
    private web3: Web3Service,
    private themeSwitcherService: ThemeSwitcherService,
    private storageService: StorageService,
    private languageService: LanguageService,
  ) {}


  ngOnInit(): void {

    this.storageService.initialize();
    this.themeSwitcherService.initializeThemeSwitcherService();
    this.languageService.initializeLanguageService();
  }
}
