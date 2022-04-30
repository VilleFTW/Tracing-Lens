import { LanguageService } from './../../services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  public selectedLanguage: string;

  //todo add this somewhere else
  countries = [
    { name: 'English', flag: '🇬🇧', value: 'en' },
    { name: 'Spanish', flag: '🇪🇸', value: 'es' },
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
  }

  changeLanguage(languageEvent: any) {
    this.languageService.setLanguage(languageEvent.target.value);
  }
}
