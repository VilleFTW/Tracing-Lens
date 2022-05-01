import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPreferencesComponent } from './reset-preferences.component';

describe('ResetPreferencesComponent', () => {
  let component: ResetPreferencesComponent;
  let fixture: ComponentFixture<ResetPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPreferencesComponent ]
    })
    .compileComponents();
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
