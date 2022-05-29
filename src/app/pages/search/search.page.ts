import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})

// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SearchPage {
  hello(event) {
    console.log(event);
  }
}
