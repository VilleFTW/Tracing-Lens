import { ThemeSwitcherService } from '../../services//theme-switcher/theme-switcher.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `<ion-toggle [checked]="isDarkMode | async" (ionChange)="toggleDarkTheme($event)"></ion-toggle> `,
  styles: [],
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeSwitcher.getDarkModePreference();
  }

  toggleDarkTheme(event: Event) {
    this.themeSwitcher.changeThemeMode((event.target as any).checked);
  }
}
