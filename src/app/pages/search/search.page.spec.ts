import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ExploreContainerComponentModule } from 'src/app/components/explore-container/explore-container.module';

import { SearchPage } from './search.page';

describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPage],
      imports: [ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
