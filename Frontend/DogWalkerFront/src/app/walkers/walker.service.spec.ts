import { TestBed } from '@angular/core/testing';

import { WalkerService } from './walker.service';

describe('WalkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalkerService = TestBed.get(WalkerService);
    expect(service).toBeTruthy();
  });
});
