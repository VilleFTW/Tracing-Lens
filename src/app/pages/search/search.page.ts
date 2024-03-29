import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SearchPage {
  constructor() {}

  options: AnimationOptions = {
    path: '/assets/animations/search.json',
  };
}
