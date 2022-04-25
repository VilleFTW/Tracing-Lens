import { Component, OnInit } from '@angular/core';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private web3: Web3Service) {}
  ngOnInit(): void {
    if (this.web3.getInjected()) {
      this.web3.connectToCachedProvider().then((response) => {
        this.data = response;
      });
    }
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
