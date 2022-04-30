import { ThemeSwitcherService } from '../services/theme-switcher.service';
import { LanguageService } from '../services/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  constructor(private themeSwitcher: ThemeSwitcherService, private languageService: LanguageService) {}
}
