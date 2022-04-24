import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  // Query for the toggle that is used to change between themes
  toggle = document.querySelector('#themeToggle');

  // Use matchMedia to check the user preference
  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  ngOnInit(): void {
    // Listen for changes to the prefers-color-scheme media query
    this.prefersDark.addEventListener('change', (mediaQueryListEvent) => this.toggleDarkTheme(mediaQueryListEvent));

    this.toggleDarkTheme(this.prefersDark.matches);
    this.enableToggleDarkTheme(this.prefersDark.matches);
  }

  // Called to check/uncheck the toggle
  toggleDarkTheme(event: any) {
    if (event && event.detail) {
      document.body.classList.toggle('dark', event.detail.checked);
    }
  }

  // Called to check/uncheck the toggle
  enableToggleDarkTheme(shouldCheck: any) {
    document.body.classList.toggle('dark', shouldCheck);
  }
}
