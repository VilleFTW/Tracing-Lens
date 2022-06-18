import { Injectable } from '@angular/core';
import { collection, doc, collectionData, Firestore, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Livestock } from '../../model/livestock.model';
@Injectable({
  providedIn: 'root',
})
export class FirestoreDatabaseService {
  constructor(private firestore: Firestore) {}

  getLivestock(): Observable<Livestock[]> {
    const livestockRef = collection(this.firestore, 'livestock');

    return collectionData(livestockRef, { idField: 'id' }) as Observable<Livestock[]>;
  }

  getLivestockById(id: string): Observable<Livestock> {
    const livestockDocRef = doc(this.firestore, `livestock/${id}`);

    return docData(livestockDocRef, { idField: 'id' }) as Observable<Livestock>;
  }
}
