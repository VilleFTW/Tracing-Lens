import { TestBed } from '@angular/core/testing';
import { provideFirebaseApp } from '@angular/fire/app';
import { Firestore, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../../environments/environment';
import { FirestoreDatabaseService } from '../../../services/firestore/firestore-database.service';

import { LivestockResolver } from './livestock-resolver.resolver';

describe('LivestockResolverResolver', () => {
  let resolver: LivestockResolver;
  let service: any;
  let firestore: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, provideFirebaseApp(() => initializeApp(environment.firebaseConfig))],
      providers: [FirestoreDatabaseService, Firestore],
    });
    service = TestBed.inject(FirestoreDatabaseService);
    firestore = TestBed.inject(Firestore);
    resolver = TestBed.inject(LivestockResolver);
  });

  xit('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
