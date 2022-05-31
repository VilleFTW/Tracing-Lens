import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { TranslateModule } from '@ngx-translate/core';
import { SearchPageRoutingModule } from './search-routing.module';
import { ScanQrButtonComponent } from 'src/app/components/scan-qr-button/scan-qr-button.component';
import { QrScannerModalComponent } from 'src/app/components/qr-scanner-modal/qr-scanner-modal.component';
import { TestLivestockComponent } from 'src/app/components/test-livestock/test-livestock.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    ExploreContainerComponentModule,
    SearchPageRoutingModule,
    TranslateModule,
  ],
  declarations: [SearchPage, ScanQrButtonComponent, QrScannerModalComponent, TestLivestockComponent],
})
export class SearchPageModule {}
