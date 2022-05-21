import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Web3Service } from 'src/app/services/web3/web3.service';

@Component({
  selector: 'app-web3-auth-button',
  templateUrl: './web3-auth-button.component.html',
  styleUrls: ['./web3-auth-button.component.css'],
})
export class Web3AuthButtonComponent implements OnInit {
  isAuthenticated$ = new Observable<boolean>();
  isAuth: boolean;

  constructor(private web3: Web3Service) {}

  ngOnInit(): void {
    this.web3.getIsAuthenticatedObs().subscribe((isAuth) => {
      this.isAuth = isAuth;
      console.log(this.isAuth);
    });
  }

  connect() {
    this.web3.connectAccount();
  }

  disconnect() {
    this.web3.disconnectAccount();
  }
}
