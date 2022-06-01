import { TestBed } from '@angular/core/testing';

import { FirestoreDatabaseService } from './firestore-database.service';

describe('FirestoreDatabaseService', () => {
  let service: FirestoreDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreDatabaseService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
