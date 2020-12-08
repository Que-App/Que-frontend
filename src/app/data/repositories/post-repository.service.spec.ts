import { TestBed } from '@angular/core/testing';

import { PostRepositoryService } from './post-repository.service';

describe('PostRepositoryService', () => {
  let service: PostRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
