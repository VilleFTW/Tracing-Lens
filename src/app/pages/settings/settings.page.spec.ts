import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ExploreContainerComponentModule } from 'src/app/components/explore-container/explore-container.module';
import { StorageService } from 'src/app/services/storage/storage.service';

import { SettingsPage } from './settings.page';

describe('settingsPage', () => {
  let component: SettingsPage;
  let fixture: ComponentFixture<SettingsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExploreContainerComponentModule, TranslateModule.forRoot()],
      declarations: [SettingsPage],
      providers: [{ provide: StorageService, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
