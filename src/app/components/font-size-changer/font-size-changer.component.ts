import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher/theme-switcher.service';

@Component({
  selector: 'app-font-size-changer',
  templateUrl: './font-size-changer.component.html',
  styleUrls: ['./font-size-changer.component.css'],
})
export class FontSizeChangerComponent implements OnInit {
  fontSize: number;

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.fontSize = this.themeSwitcher.getCurrentFontSize();
    // this.themeSwitcher.setFontBySize(this.fontSize);
  }

  increment() {
    this.resize(+2);
  }

  decrement() {
    this.resize(-2);
  }

  resize(delta: number) {
    this.fontSize = this.fontSize + delta;
    this.themeSwitcher.setFontBySize(this.fontSize);
  }
}
