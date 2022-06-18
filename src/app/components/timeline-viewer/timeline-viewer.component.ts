import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Timestamp } from 'firebase/firestore';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-timeline-viewer',
  templateUrl: './timeline-viewer.component.html',
  styleUrls: ['./timeline-viewer.component.scss'],
})
export class TimelineViewerComponent implements OnInit {
  @Input() timelineCollection: Array<TimelineInstance>;
  isMapsApiLoaded$: Observable<boolean>;

  currentWidth: number = window.innerWidth - 50; // Subtracting 50 so that it fits as a whole
  currentHeight: number = window.innerHeight / 2;
  selectedTimeline: TimelineInstance;
  selectedTimelineIndex: number;

  constructor(private httpClient: HttpClient) {
    this.isMapsApiLoaded$ = this.httpClient
      .jsonp('https://maps.googleapis.com/maps/api/js?key=' + environment.googleMapsAPIKey, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }
  ngOnInit(): void {
    //Sorting in order, the array of timeline events
    this.timelineCollection.sort((a, b) => {
      return +a.date - +b.date;
    });
    this.selectedTimelineIndex = 0;
    this.selectedTimeline = this.timelineCollection[this.selectedTimelineIndex];
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.currentWidth = window.innerWidth - 50;
    this.currentHeight = window.innerHeight / 2;
  }

  changeTimeline(event: any) {
    if (event.cancelable) {
      event.preventDefault();
      this.selectedTimelineIndex = event.target.value;
      this.selectedTimeline = this.timelineCollection[this.selectedTimelineIndex];
      // var newLng = this.center.lng;
      // var newLat = this.center.lat;
      // this.center = { lat: newLat, lng: newLng };
    }
  }
}

export interface TimelineInstance {
  name: string;
  type: string;
  production_location: google.maps.LatLngLiteral;
  date: Timestamp;
}
