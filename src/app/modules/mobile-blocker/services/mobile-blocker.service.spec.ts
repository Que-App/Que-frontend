import { TestBed } from '@angular/core/testing';

import { MobileBlockerService } from './mobile-blocker.service';

describe('MobileBlockerService', () => {
  let service: MobileBlockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobileBlockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
