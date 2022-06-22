import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.scss'],
})
export class BlockchainInfoComponent implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  async dismiss() {
    this.modalController.dismiss();
  }
}
