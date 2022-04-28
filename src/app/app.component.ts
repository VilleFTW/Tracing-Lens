import { Storage } from '@ionic/storage-angular';
import { ThemeSwitcherService } from './services/theme-switcher.service';
import { StorageService } from './services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3.service';

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
  ) {}

  ngOnInit(): void {
    if (this.web3.getInjected()) {
      this.web3.connectToCachedProvider().then((response) => {
        this.data = response;
      });
    }
    this.storageService.initialize();
    this.themeSwitcherService.initializeThemeSwitcherService();
  }

  connect() {
    this.web3.connectAccount().then((response) => {
      this.data = response;
    });
  }

  disconnect() {
    this.web3.disconnectAccount().then((response) => {
      console.log(response);
      this.data = null;
    });
  }
}
