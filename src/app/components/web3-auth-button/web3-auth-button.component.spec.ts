import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Web3AuthButtonComponent } from './web3-auth-button.component';

describe('Web3AuthButtonComponent', () => {
  let component: Web3AuthButtonComponent;
  let fixture: ComponentFixture<Web3AuthButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Web3AuthButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Web3AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
