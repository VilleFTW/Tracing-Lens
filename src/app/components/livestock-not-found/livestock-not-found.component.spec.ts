import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivestockNotFoundComponent } from './livestock-not-found.component';

describe('LivestockNotFoundComponent', () => {
  let component: LivestockNotFoundComponent;
  let fixture: ComponentFixture<LivestockNotFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LivestockNotFoundComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LivestockNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
