import { StorageService } from '../storage/storage.service';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { countries } from '../../../assets/config/ThemeSwitcherConfig';
import { ThemeSwitcherService } from '../theme-switcher/theme-switcher.service';

const LANGUAGE_KEY = 'selected_language';
const DIRECTION_KEY = 'direction-of-text';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Setting the default language in case its not already set in storage service
  selectedLanguage = 'en';

  constructor(
    private translate: TranslateService,
    private storageService: StorageService,
    private themeSwitcherService: ThemeSwitcherService,
  ) {}

  async initializeLanguageService() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);

    this.storageService.getStoredData(LANGUAGE_KEY).then((value) => {
      if (value) {
        this.setLanguage(value);
        this.selectedLanguage = value;
      } else {
        this.setLanguage('en');
        this.selectedLanguage = 'en';
      }
    });
  }

  setLanguage(language: string) {
    console.log(countries);

    const country = countries.find((country) => country.value == language);
    console.log(country);

    this.translate.use(language);
    this.selectedLanguage = language;
    this.storageService.storeData(LANGUAGE_KEY, language);
    this.storageService.storeData(DIRECTION_KEY, country.dir);
    this.themeSwitcherService.changeDirectionOfText(country.dir);
  }

  getSelectedLanguage() {
    return this.selectedLanguage;
  }
}
