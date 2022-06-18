import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { TimelineInstance } from '../timeline-viewer/timeline-viewer.component';

@Component({
  selector: 'app-maps-timeline-item',
  templateUrl: './maps-timeline-item.component.html',
  styleUrls: ['./maps-timeline-item.component.scss'],
})
export class MapsTimelineItemComponent implements OnChanges {
  @Input() timelineInstance: TimelineInstance;
  @Input() currentWidth: number;
  @Input() currentHeight: number;

  public openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {
    infoWindow.open(marker);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timelineInstance?.currentValue) {
      this.timelineInstance = changes.timelineInstance?.currentValue;
      console.log(this.timelineInstance);
    }
    if (changes.currentWidth?.currentValue) {
      this.currentWidth = changes.currentWidth?.currentValue;
    }
    if (changes.currentHeight?.currentValue) {
      this.currentHeight = changes.currentHeight?.currentValue;
    }
  }
}
