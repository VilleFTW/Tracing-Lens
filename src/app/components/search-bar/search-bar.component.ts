import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreDatabaseService } from 'src/app/services/firestore/firestore-database.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  constructor(
    private firestore: FirestoreDatabaseService,
    private router: Router,
    private notificationService: NotificationsService,
  ) {}

  search(event: Event) {
    this.firestore.getLivestockById((event.target as any).value).subscribe((data) => {
      if (data) {
        this.notificationService.showSuccesfullQRCodeScan();
        this.router.navigate(['search', 'livestock', data.id]);
      } else {
        this.notificationService.showNotFoundProductID();
      }
    });
  }
}
