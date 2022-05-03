import Web3Modal from 'web3modal';
import { Inject, Injectable } from '@angular/core';
import { WEB3 } from './web3';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { provider } from 'web3-core';
import { ethers } from 'ethers';
// import { NotificationsService } from '../notifications/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuth: boolean;
  library: any;
  web3Modal: Web3Modal;
  web3js: Web3;
  provider: provider;
  accounts: string[];
  balance: string;

  constructor(@Inject(WEB3) private web3: Web3,
  // private notificationService: NotificationsService
  ) {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: 'env', // required change this with your own infura id
          description: 'Scan the qr code and sign in',
          qrcodeModalOptions: {
            mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar'],
          },
        },
      },
      injected: {
        display: {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
          name: 'metamask',
          description: 'Connect with the provider in your Browser',
        },
        package: null,
      },
    };

    this.web3Modal = new Web3Modal({
      network: 'rinkeby', // optional change this with the net you want to use like rinkeby etc
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: 'rgb(39, 49, 56)',
        main: 'rgb(199, 199, 199)',
        secondary: 'rgb(136, 136, 136)',
        border: 'rgba(195, 195, 195, 0.14)',
        hover: 'rgb(16, 26, 32)',
      },
    });

    if (this.web3Modal.cachedProvider) {
      console.log('Provider starting from cache');
      this.connectAccount();
    }
  }

  async changeChain() {
    // try {
    //   await this.library.provider.request({
    //     method: 'wallet_switchEthereumChain',
    //     params: [{ chainId: toHex(137) }],
    //   });
    // } catch (switchError) {
    //   // This error code indicates that the chain has not been added to MetaMask.
    //   if (switchError.code === 4902) {
    //     try {
    //       await library.provider.request({
    //         method: 'wallet_addEthereumChain',
    //         params: [
    //           {
    //             chainId: toHex(137),
    //             chainName: 'Polygon',
    //             rpcUrls: ['https://polygon-rpc.com/'],
    //             blockExplorerUrls: ['https://polygonscan.com/'],
    //           },
    //         ],
    //       });
    //     } catch (addError) {
    //       throw addError;
    //     }
    //   }
    // }
  }

  async connectAccount() {
    try {
      this.provider = await this.web3Modal.connect(); // set provider
      if (this.provider) {
        this.web3js = new Web3(this.provider);
        // this.library = new ethers.providers.Web3Provider(this.provider);
      } // create web3 instance
      await this.fetchAccountData();
      await this.addProviderListeners();
      this.isAuthenticated$.next(true);

      if ((await this.web3js.eth.getChainId()) === 4) {
        console.log('On Rinkeby');
      } else {
        // this.notificationService.showWrongChainNotification();
      }
      console.log(await this.web3js.eth.getChainId());
      return this.accounts;
    } catch (e) {
      console.log('Could not get a wallet connection', e);
      return;
    }
  }

  getIsAuthenticatedObs(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }

  async connectToCachedProvider() {
    await this.web3Modal.connect();
    await this.fetchAccountData();
  }

  async addProviderListeners() {
    // Subscribe to accounts change
    this.web3Modal.on('accountsChanged', (accounts) => {
      console.log('Account changed');
      this.fetchAccountData();
    });

    // Subscribe to chainId change
    this.web3Modal.on('chainChanged', (chainId) => {
      console.log('Chain changed');
      this.fetchAccountData();
    });

    // Subscribe to networkId change
    this.web3Modal.on('networkChanged', (networkId) => {
      console.log('Network changed');
      this.fetchAccountData();
    });
  }

  async fetchAccountData() {
    this.accounts = await this.web3js.eth.getAccounts();
    return this.accounts;
  }

  async accountInfo(account: any) {
    const initialvalue = await this.web3js.eth.getBalance(account);
    this.balance = this.web3js.utils.fromWei(initialvalue, 'ether');
    return this.balance;
  }

  async disconnectAccount() {
    if (this.provider) {
      this.web3Modal.clearCachedProvider();
      this.web3js.setProvider(null);
      this.provider = null;
      this.isAuth = false;
      this.isAuthenticated$.next(this.isAuth);
      console.log(this.isAuthenticated$);
      console.log('Cleared account');
    } else {
      console.log('NOT cleared account');
    }
  }
}
// function toHex(arg0: number) {
//   throw new Error('Function not implemented.');
// }
