import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearchPageRoutingModule } from './search-routing.module';
import { ScanQrButtonComponent } from '../../components/scan-qr-button/scan-qr-button.component';
import { QrScannerModalComponent } from '../../components/qr-scanner-modal/qr-scanner-modal.component';
import { TestLivestockComponent } from '../../components/test-livestock/test-livestock.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { GoogleMap, GoogleMapsModule, MapDirectionsRenderer, MapDirectionsService } from '@angular/google-maps';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TimelineViewerComponent } from 'src/app/components/timeline-viewer/timeline-viewer.component';
import { MapsTimelineItemComponent } from 'src/app/components/maps-timeline-item/maps-timeline-item.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodeGeneratorModalComponent } from 'src/app/components/qr-code-generator-modal/qr-code-generator-modal.component';

@NgModule({
  imports: [
    IonicModule,
    ClipboardModule,
    ShareButtonsModule,
    ShareIconsModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchPageRoutingModule,
    TranslateModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    QRCodeModule,
  ],
  declarations: [
    SearchPage,
    SearchBarComponent,
    ScanQrButtonComponent,
    QrScannerModalComponent,
    QrCodeGeneratorModalComponent,
    TestLivestockComponent,
    TimelineViewerComponent,
    MapsTimelineItemComponent,
  ],
  providers: [MapDirectionsRenderer, MapDirectionsService, GoogleMap],
})
export class SearchPageModule {}
