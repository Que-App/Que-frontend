import { TestBed } from '@angular/core/testing';

import { GetRepositoryService } from './get-repository.service';

describe('GetRepositoryService', () => {
  let service: GetRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
