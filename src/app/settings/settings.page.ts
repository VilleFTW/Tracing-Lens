import { Component, OnInit } from '@angular/core';
import { DarkModeToggleComponent } from '../components/dark-mode-toggle/dark-mode-toggle.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {
  ngOnInit(): void {}
}
