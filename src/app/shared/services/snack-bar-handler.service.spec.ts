import { TestBed } from '@angular/core/testing';

import { SnackBarHandlerService } from './snack-bar-handler.service';

describe('SnackBarHandlerService', () => {
  let service: SnackBarHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
