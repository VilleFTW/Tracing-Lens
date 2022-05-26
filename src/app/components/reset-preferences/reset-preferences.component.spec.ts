import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage/storage.service';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher/theme-switcher.service';

import { ResetPreferencesComponent } from './reset-preferences.component';

describe('ResetPreferencesComponent', () => {
  let component: ResetPreferencesComponent;
  let fixture: ComponentFixture<ResetPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ResetPreferencesComponent],
      providers: [{ provide: StorageService, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
