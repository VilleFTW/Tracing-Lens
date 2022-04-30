import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';
import { ThemeSwitcherService } from 'src/app/services/theme-switcher.service';
import { StorageService } from 'src/app/services/storage.service';

describe('DarkModeToggleComponent', () => {
  let component: DarkModeToggleComponent;
  let fixture: ComponentFixture<DarkModeToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DarkModeToggleComponent],
      providers: [ThemeSwitcherService, { provide: StorageService, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkModeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
