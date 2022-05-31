import { Component, OnInit } from '@angular/core';
import { Livestock } from 'src/app/model/livestock.model';
import { FirestoreDatabaseService } from 'src/app/services/firestore/firestore-database.service';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class HomePage implements OnInit {
  livestocks: Livestock[];
  constructor(private firestoreService: FirestoreDatabaseService) {}

  ngOnInit(): void {
    this.getLivestock();

    // this.firestoreService.getLivestockById('vVD9rI946y3XEQ78MG5u').subscribe((data) => console.log(data));
  }

  async getLivestock() {
    this.firestoreService.getLivestock().subscribe((data) => {
      this.livestocks = data;
      console.log(this.livestocks);
    });
  }
}
