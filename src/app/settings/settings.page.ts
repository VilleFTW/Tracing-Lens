import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
  constructor(private themeSwitcher: ThemeSwitcherService) {}
}
