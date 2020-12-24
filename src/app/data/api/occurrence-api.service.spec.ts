import { TestBed } from '@angular/core/testing';

import { OccurrenceApiService } from './occurrence-api.service';

describe('OccurrenceApiService', () => {
  let service: OccurrenceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccurrenceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
