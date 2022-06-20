import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Livestock } from '../../model/livestock.model';
import { environment } from '../../../environments/environment';
import { NotificationsService } from '../../services/notifications/notifications.service';
@Component({
  selector: 'app-test-livestock',
  templateUrl: './test-livestock.component.html',
  styleUrls: ['./test-livestock.component.scss'],
})
export class TestLivestockComponent implements OnInit {
  selectedSegment: string = 'productInformation';
  latLngLiteral: google.maps.LatLngLiteral;
  copyLinkValue: string;

  @Input() livestock: Livestock | undefined;
  constructor(private route: ActivatedRoute, private notificationService: NotificationsService) {}

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      this.livestock = response.livestock;
      this.livestock.timeline.forEach((data) => {
        // Doing some conversion from Geopoint to google.maps.LatLngLiteral
        this.latLngLiteral = { lat: data.production_location.latitude, lng: data.production_location.longitude };
        data.production_location = this.latLngLiteral;
      });
    });
    this.copyLinkValue = window.location.href;
  }

  copyToClipboard() {
    this.notificationService.showCopiedToClipboardNotification();
    console.log('Called');
  }

  segmentedChanged(event: any) {
    this.selectedSegment = event.target.value;
  }
}
