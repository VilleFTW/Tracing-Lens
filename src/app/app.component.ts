import { Component } from '@angular/core';
import { Web3Service } from './services/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  data: any;
  constructor(private web3: Web3Service) {}

  connect() {
    this.web3.connectAccount().then((response) => {
      console.log(response);
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
