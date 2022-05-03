import { StorageService } from '../storage/storage.service';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LANGUAGE_KEY = 'selected_language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Setting the default language in case its not already set in storage service
  selectedLanguage = 'en';

  constructor(private translate: TranslateService, private storageService: StorageService) {}

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
    this.translate.use(language);
    this.selectedLanguage = language;
    this.storageService.storeData(LANGUAGE_KEY, language);
  }
}
