import { TestBed } from '@angular/core/testing';
import { StorageService } from '../storage/storage.service';

import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', () => {
  let service: ThemeSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService, { provide: StorageService, useValue: {} }],
    });
    service = TestBed.inject(ThemeSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
