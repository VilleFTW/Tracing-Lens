import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage/storage.service';

import { FontSizeChangerComponent } from './font-size-changer.component';

describe('FontSizeChangerComponent', () => {
  let component: FontSizeChangerComponent;
  let fixture: ComponentFixture<FontSizeChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [FontSizeChangerComponent],
      providers: [{ provide: StorageService, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
