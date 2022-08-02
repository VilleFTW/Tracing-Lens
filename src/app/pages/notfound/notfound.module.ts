import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotfoundPageRoutingModule } from './notfound-routing.module';

import { NotfoundPage } from './notfound.page';
import { LottieCacheModule, LottieModule } from 'ngx-lottie';
import { playerFactory } from '../../app.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot(),
    TranslateModule,

    FormsModule,
    IonicModule,
    NotfoundPageRoutingModule,
  ],
  declarations: [NotfoundPage],
})
export class NotfoundPageModule {}
