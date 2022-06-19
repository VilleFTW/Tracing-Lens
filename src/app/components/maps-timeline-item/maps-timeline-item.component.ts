import { HttpClient, HttpParams } from '@angular/common/http';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  MapInfoWindow,
  MapMarker,
  MapDirectionsService,
  MapDirectionsRenderer,
  MapDirectionsResponse,
  GoogleMap,
} from '@angular/google-maps';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TimelineInstance } from '../timeline-viewer/timeline-viewer.component';

@Component({
  selector: 'app-maps-timeline-item',
  templateUrl: './maps-timeline-item.component.html',
  styleUrls: ['./maps-timeline-item.component.scss'],
})
export class MapsTimelineItemComponent implements OnChanges, OnInit {
  @Input() timelineInstance: TimelineInstance;
  @Input() timelineCollection: Array<TimelineInstance>;
  @Input() currentWidth: number;
  @Input() currentHeight: number;
  @Input() shouldCalculateJourney: boolean;

  directionsResults$: Observable<google.maps.DirectionsResult | undefined>;

  options: google.maps.MapOptions;

  public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
  }

  constructor(private mapDirectionsService: MapDirectionsService) {}

  ngOnInit(): void {}

  calculateAndDisplayRoute() {
    const waypoints: google.maps.DirectionsWaypoint[] = [];
    const splicedTimelineCollection = this.timelineCollection.slice(1, -1);

    for (let i = 0; i < splicedTimelineCollection.length; i++) {
      if (splicedTimelineCollection[i].production_location) {
        var newLatLongLiteral = new google.maps.LatLng(
          splicedTimelineCollection[i].production_location.lat,
          splicedTimelineCollection[i].production_location.lng,
        );
        waypoints.push({ location: newLatLongLiteral });
      }
    }

    let request: google.maps.DirectionsRequest = {
      origin: this.timelineCollection[0].production_location,
      destination: this.timelineCollection[this.timelineCollection.length - 1].production_location,
      waypoints: waypoints,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map((response) => response.result));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timelineInstance?.currentValue) {
      this.timelineInstance = changes.timelineInstance?.currentValue;
    }
    if (changes.timelineCollection?.currentValue) {
      this.timelineCollection = changes.timelineCollection?.currentValue;
    }
    if (changes.currentWidth?.currentValue) {
      this.currentWidth = changes.currentWidth?.currentValue;
    }
    if (changes.currentHeight?.currentValue) {
      this.currentHeight = changes.currentHeight?.currentValue;
    }

    if (changes.shouldCalculateJourney?.currentValue) {
      this.shouldCalculateJourney = changes.shouldCalculateJourney?.currentValue;
      this.calculateAndDisplayRoute();
    }
  }
}
