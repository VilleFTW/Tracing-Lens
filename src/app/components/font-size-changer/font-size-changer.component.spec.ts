import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeChangerComponent } from './font-size-changer.component';

describe('FontSizeChangerComponent', () => {
  let component: FontSizeChangerComponent;
  let fixture: ComponentFixture<FontSizeChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontSizeChangerComponent ]
    })
    .compileComponents();
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
