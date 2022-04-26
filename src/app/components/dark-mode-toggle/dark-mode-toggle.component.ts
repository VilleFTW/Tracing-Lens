import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';
import { Component, OnInit } from '@angular/core';
import { appInjector } from '../../app.module';

@Component({
  selector: 'app-dark-mode-toggle',
  template: ` <ion-toggle [checked]="isDarkMode" (ionChange)="toggleDarkTheme($event.target.checked)">Test</ion-toggle> `,
  styles: [],
})
export class DarkModeToggleComponent implements OnInit{
  //todo make observable
  isDarkMode: boolean;
  myService = appInjector.get(ThemeSwitcherService);

  toggleDarkTheme(event: any) {
    this.myService.changeThemeMode(event);
  }

  ngOnInit(): void {
    this.isDarkMode = this.myService.getDarkModeStatus();
  }
}
