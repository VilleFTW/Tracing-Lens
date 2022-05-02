import { TranslateModule } from '@ngx-translate/core';
import { Web3AuthButtonComponent } from './../../components/web3-auth-button/web3-auth-button.component';
import { ResetPreferencesComponent } from './../../components/reset-preferences/reset-preferences.component';
import { FontSizeChangerComponent } from './../../components/font-size-changer/font-size-changer.component';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPage } from './settings.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';
import { DarkModeToggleComponent } from '../../components/dark-mode-toggle/dark-mode-toggle.component';
import { SettingsPageRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TranslateModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: SettingsPage }]),
    SettingsPageRoutingModule,
  ],
  declarations: [
    SettingsPage,
    DarkModeToggleComponent,
    LanguageSelectorComponent,
    FontSizeChangerComponent,
    ResetPreferencesComponent,
    Web3AuthButtonComponent,
  ],
})
export class SettingsPageModule {}
