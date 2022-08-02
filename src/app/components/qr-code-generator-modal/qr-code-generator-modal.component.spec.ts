import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrCodeGeneratorModalComponent } from './qr-code-generator-modal.component';

describe('QrCodeGeneratorModalComponent', () => {
  let component: QrCodeGeneratorModalComponent;
  let fixture: ComponentFixture<QrCodeGeneratorModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [QrCodeGeneratorModalComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(QrCodeGeneratorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
