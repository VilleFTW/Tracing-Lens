import { LanguageService } from '../../services/language/language.service';
import { Component, OnInit } from '@angular/core';
import { countries } from '../../../assets/config/ThemeSwitcherConfig';
@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css'],
})
export class LanguageSelectorComponent implements OnInit {
  selectedLanguage: string;
  countries = countries;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.selectedLanguage = this.languageService.selectedLanguage;
  }

  changeLanguage(event: Event) {
    this.languageService.setLanguage((event.target as any).value);
  }
}
