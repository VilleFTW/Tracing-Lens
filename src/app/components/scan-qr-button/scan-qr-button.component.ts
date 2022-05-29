import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { QrScannerModalComponent } from '../qr-scanner-modal/qr-scanner-modal.component';
@Component({
  selector: 'app-scan-qr-button',
  templateUrl: './scan-qr-button.component.html',
  styleUrls: ['./scan-qr-button.component.scss'],
})
export class ScanQrButtonComponent {
  async openScanQRModal() {
    const modal = await this.modalCtrl.create({
      component: QrScannerModalComponent,
    });

    await modal.present();
  }

  constructor(private modalCtrl: ModalController) {}
}
