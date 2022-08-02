import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NotfoundPage implements OnInit {
  options: AnimationOptions = {
    path: '/assets/animations/not-found-animation.json',
  };

  timeLeftTillRedirect: number = 5;
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor(private router: Router) {}

  ngOnInit() {
    let intervalId = setInterval(() => {
      this.timeLeftTillRedirect = this.timeLeftTillRedirect - 1;
      console.log(this.timeLeftTillRedirect);
      if (this.timeLeftTillRedirect === 0) {
        clearInterval(intervalId);
        this.router.navigate(['home']);
      }
    }, 1000);
  }
}
