import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreDatabaseService } from 'src/app/services/firestore/firestore-database.service';

@Component({
  selector: 'app-search-page',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class SearchPage {
  constructor(private firestore: FirestoreDatabaseService, private router: Router) {}

  search(event: Event) {
    this.firestore.getLivestockById((event.target as any).value).subscribe((data) => {
      if (data) {
        console.log(data);
        this.router.navigate(['search', 'livestock', data.id]);
      } else {
        console.log('Null data');
      }
    });
  }
}
