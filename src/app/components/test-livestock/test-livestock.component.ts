import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livestock } from '../../model/livestock.model';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { QrCodeGeneratorModalComponent } from '../qr-code-generator-modal/qr-code-generator-modal.component';
import { ModalController } from '@ionic/angular';
import { BlockchainInfoComponent } from '../blockchain-info/blockchain-info.component';
import { LanguageService } from '../../services/language/language.service';
import { GoogleTranslateService } from '../../services/google-translate/google-translate.service';
@Component({
  selector: 'app-test-livestock',
  templateUrl: './test-livestock.component.html',
  styleUrls: ['./test-livestock.component.scss'],
})
export class TestLivestockComponent implements OnInit, AfterContentInit {
  selectedSegment: string = 'productInformation';
  latLngLiteral: google.maps.LatLngLiteral;
  copyLinkValue: string;

  @Input() livestock: Livestock | undefined;
  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationsService,
    private modalCtrl: ModalController,
    private languageService: LanguageService,
    private googleTranslateService: GoogleTranslateService,
  ) {}

  ngAfterContentInit(): void {
    this.translateAttributes();
  }

  //TODO refactor this such that it is more modular/dynamic
  async translateAttributes() {
    console.log(this.livestock);
    const selectedLanguage = this.languageService.getSelectedLanguage();
    if (selectedLanguage != 'en') {
      const translationOutput = await this.googleTranslateService.translate(
        [
          this.livestock.product_name,
          this.livestock.product_description,
          this.livestock.product_provenance,
          this.livestock.producer_name,
          this.livestock.producer_description,
          this.livestock.category_type,
        ],
        selectedLanguage,
      );

      this.livestock.product_name = translationOutput[0].translatedText;
      this.livestock.product_description = translationOutput[1].translatedText;
      this.livestock.product_provenance = translationOutput[2].translatedText;
      this.livestock.producer_name = translationOutput[3].translatedText;
      this.livestock.producer_description = translationOutput[4].translatedText;
      this.livestock.category_type = translationOutput[5].translatedText;
    }
  }

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
