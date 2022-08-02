import { AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { Color } from '@ionic/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { Livestock } from 'src/app/model/livestock.model';
import { FirestoreDatabaseService } from 'src/app/services/firestore/firestore-database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class HomePage implements AfterContentInit {
  livestocks: Livestock[];

  label;
  numberOfAlimentationEvents: number = 502;
  numberOfPharmaceuticalEvents: number = 426;
  numberOfShippingEvents: number = 402;
  numberOfTextileEvents: number = 105;
  numberOfAllTimeEvents: number =
    this.numberOfAlimentationEvents +
    this.numberOfPharmaceuticalEvents +
    this.numberOfShippingEvents +
    this.numberOfTextileEvents;
  numberOfEventsLast24Hrs: number = 105;
  data = [
    { name: this.translatePipe.transform('HOME.alimentation-events'), value: this.numberOfAlimentationEvents },
    { name: this.translatePipe.transform('HOME.pharmaceutical-events'), value: this.numberOfPharmaceuticalEvents },
    { name: this.translatePipe.transform('HOME.shipping-events'), value: this.numberOfShippingEvents },
    { name: this.translatePipe.transform('HOME.textile-events'), value: this.numberOfTextileEvents },
  ];

  customColors;
  view: any;

  showLegend: boolean = true;
  legendTitle: string;
  showLabels: boolean = false;
  legendPosition: LegendPosition.Below;

  constructor(private firestoreService: FirestoreDatabaseService, private translatePipe: TranslatePipe) {
    this.view = [innerWidth, 400];
    this.legendTitle = this.translatePipe.transform('HOME.legend-title');
  }

  ngAfterContentInit(): void {
    const tertiaryColor = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-tertiary');
    const warningColor = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-warning');
    const successColor = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-success');
    const dangerColor = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-danger');

    this.customColors = [
      { name: this.translatePipe.transform('HOME.alimentation-events'), value: tertiaryColor },
      { name: this.translatePipe.transform('HOME.pharmaceutical-events'), value: warningColor },
      { name: this.translatePipe.transform('HOME.shipping-events'), value: successColor },
      { name: this.translatePipe.transform('HOME.textile-events'), value: dangerColor },
    ];

    this.getLivestock();
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

  async getLivestock() {
    this.firestoreService.getLivestock().subscribe((data) => {
      this.livestocks = data;
      console.log(this.livestocks);
    });
  }
}
