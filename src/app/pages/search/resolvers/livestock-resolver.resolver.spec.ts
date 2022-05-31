import { TestBed } from '@angular/core/testing';

import { LivestockResolver } from './livestock-resolver.resolver';

describe('LivestockResolverResolver', () => {
  let resolver: LivestockResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LivestockResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
