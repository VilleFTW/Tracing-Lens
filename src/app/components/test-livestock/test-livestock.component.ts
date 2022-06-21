import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livestock } from '../../model/livestock.model';
import { NotificationsService } from '../../services/notifications/notifications.service';
import { QrCodeGeneratorModalComponent } from '../qr-code-generator-modal/qr-code-generator-modal.component';
import { ModalController } from '@ionic/angular';
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
  ) {}

  async openGenerateQRModal() {
    const modal = await this.modalCtrl.create({
      component: QrCodeGeneratorModalComponent,
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
