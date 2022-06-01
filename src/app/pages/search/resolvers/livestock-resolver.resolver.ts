import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, take, tap } from 'rxjs';
import { Livestock } from '../../../model/livestock.model';
import { FirestoreDatabaseService } from '../../../services/firestore/firestore-database.service';

@Injectable({
  providedIn: 'root',
})
export class LivestockResolver implements Resolve<Livestock> {
  constructor(private fireStoreService: FirestoreDatabaseService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livestock> {
    return this.fireStoreService.getLivestockById(route.params.id).pipe(take(1));
  }
}
