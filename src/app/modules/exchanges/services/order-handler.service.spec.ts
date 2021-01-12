import { TestBed } from '@angular/core/testing';

import { OrderHandlerService } from './order-handler.service';

describe('OrderHandlerService', () => {
  let service: OrderHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
