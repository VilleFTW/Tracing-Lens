import { Utils } from './../../../node_modules/web3-utils/types/index.d';
import Web3Modal from 'web3modal';
import { Inject, Injectable } from '@angular/core';
import { WEB3 } from './web3';
import { Subject } from 'rxjs';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { provider } from 'web3-core';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  public accountsObservable = new Subject<string[]>();
  web3Modal: Web3Modal;
  web3js: any;
  provider: provider | undefined;
  accounts: string[] | undefined;
  balance: string | undefined;

  constructor(@Inject(WEB3) private web3: Web3) {
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
      network: 'mainnet', // optional change this with the net you want to use like rinkeby etc
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
      this.connectAccount();
    }
  }

  async connectAccount() {
    try {
      this.provider = await this.web3Modal.connect(); // set provider
      if (this.provider) {
        this.web3js = new Web3(this.provider);
      } // create web3 instance
      await this.fetchAccountData();
      await this.addProviderListeners();
      return this.accounts;
    } catch (e) {
      console.log('Could not get a wallet connection', e);
      return;
    }
  }

  async connectToCachedProvider() {
    await this.web3Modal.connect();
    await this.fetchAccountData();
    return this.accounts;
  }

  getInjected() {
    return this.web3Modal.cachedProvider;
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
  }

  async accountInfo(account: any[]) {
    const initialvalue = await this.web3js.eth.getBalance(account);
    this.balance = this.web3js.utils.fromWei(initialvalue, 'ether');
    return this.balance;
  }

  async disconnectAccount() {
    if (this.provider) {
      this.web3Modal.clearCachedProvider();
      await this.web3js.setProvider(null);
      this.provider = null;
      console.log('Cleared account');
    } else {
      console.log('NOT cleared account');
    }
  }
}
