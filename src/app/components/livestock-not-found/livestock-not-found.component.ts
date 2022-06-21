import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-livestock-not-found',
  templateUrl: './livestock-not-found.component.html',
  styleUrls: ['./livestock-not-found.component.scss'],
})
export class LivestockNotFoundComponent {
  options: AnimationOptions = {
    path: '/assets/animations/cow.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  constructor() {}
}
