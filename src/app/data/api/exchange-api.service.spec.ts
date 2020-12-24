import { TestBed } from '@angular/core/testing';

import { ExchangeApiService } from './exchange-api.service';

describe('ExchangeApiService', () => {
  let service: ExchangeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
