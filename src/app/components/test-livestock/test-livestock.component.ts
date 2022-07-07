import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livestock } from '../../model/livestock.model';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { QrCodeGeneratorModalComponent } from '../qr-code-generator-modal/qr-code-generator-modal.component';
import { ModalController } from '@ionic/angular';
import { BlockchainInfoComponent } from '../blockchain-info/blockchain-info.component';
import { LanguageService } from 'src/app/services/language/language.service';
@Component({
  selector: 'app-test-livestock',
  templateUrl: './test-livestock.component.html',
  styleUrls: ['./test-livestock.component.scss'],
})
export class TestLivestockComponent implements OnInit {
  selectedSegment: string = 'productInformation';
  latLngLiteral: google.maps.LatLngLiteral;
  copyLinkValue: string;

  @Input() livestock: Livestock | undefined;
  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationsService,
    private modalCtrl: ModalController,
    private languageService: LanguageService,
  ) {}

  async openGenerateQRModal() {
    const modal = await this.modalCtrl.create({
      component: QrCodeGeneratorModalComponent,
    });

    await modal.present();
  }

  async openBlockchainInfoModal() {
    const modal = await this.modalCtrl.create({
      component: BlockchainInfoComponent,
    });

    await modal.present();
  }

  async openProducerCertificationsModal() {
    const modal = await this.modalCtrl.create({
      component: BlockchainInfoComponent,
    });

    await modal.present();
  }

  ngOnInit(): void {
    // console.log;
    if (this.languageService.getSelectedLanguage() != 'en') {
      console.log('Not English');
      // this.livestock = this.fir
    } else {
      console.log('English');
    }

    this.route.data.subscribe((response: any) => {
      this.livestock = response.livestock;
      if (this.livestock)
        this.livestock.timeline.forEach((data) => {
          // Doing some conversion from Geopoint to google.maps.LatLngLiteral
          this.latLngLiteral = { lat: data.production_location.latitude, lng: data.production_location.longitude };
          data.production_location = this.latLngLiteral;
        });
    });
    this.copyLinkValue = window.location.href;
  }

  copyToClipboard() {
    this.notificationService.showCopiedToClipboardNotification();
  }

  segmentedChanged(event: any) {
    this.selectedSegment = event.target.value;
  }
}
