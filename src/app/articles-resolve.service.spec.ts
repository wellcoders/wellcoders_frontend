import { TestBed, inject } from '@angular/core/testing';

import { ArticlesResolveService } from './articles-resolve.service';

describe('ArticlesResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticlesResolveService]
    });
  });

  it('should be created', inject([ArticlesResolveService], (service: ArticlesResolveService) => {
    expect(service).toBeTruthy();
  }));
});
