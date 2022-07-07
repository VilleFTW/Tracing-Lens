import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GoogleTranslateService {
  url = 'https://translation.googleapis.com/language/translate/v2?key=';

  async translate(content: string[], selectedLanguage: string) {
    const response = await fetch(this.url + environment.translateAPIKEy, {
      method: 'POST',
      body: JSON.stringify({ q: content, target: selectedLanguage }),
    });

    let result = await response.json();
    console.log(result);

    return result.data.translations;
  }
}
