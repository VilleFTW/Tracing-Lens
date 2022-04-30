import { Observable } from 'rxjs/internal/Observable';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <!-- todo fix checked toggle initialized incorectly -->
    <ion-toggle [checked]="isDarkMode | async" (ionChange)="toggleDarkTheme($event.target.checked)">Test</ion-toggle>
  `,
  styles: [],
})
export class DarkModeToggleComponent implements OnInit {
  isDarkMode = new Observable<boolean>();

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.isDarkMode = this.themeSwitcher.isDarkModeObservable;
    console.log('Initialized with', this.isDarkMode);
    console.log(this.themeSwitcher.isDarkModeObservable);
  }

  toggleDarkTheme(event: any) {
    this.themeSwitcher.changeThemeMode(event);
    console.log(this.isDarkMode);
  }
}
