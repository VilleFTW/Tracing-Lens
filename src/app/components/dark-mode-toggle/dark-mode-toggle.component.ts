import { ThemeSwitcherService } from '../../services//theme-switcher/theme-switcher.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <ion-item>
      <ion-icon slot="start" name="moon-outline"></ion-icon>
      <ion-label> Dark Mode </ion-label>
      <ion-toggle slot="end" [checked]="isDarkMode | async" (ionChange)="toggleDarkTheme($event)"></ion-toggle>
    </ion-item>
  `,
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
