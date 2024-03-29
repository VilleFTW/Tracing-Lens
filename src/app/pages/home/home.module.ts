import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    IonicModule,
    NgxChartsModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    TranslateModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
