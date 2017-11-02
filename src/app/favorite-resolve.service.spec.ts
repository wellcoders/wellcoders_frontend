import { TestBed, inject } from '@angular/core/testing';

import { FavoriteResolveService } from './favorite-resolve.service';

describe('FavoriteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteResolveService]
    });
  });

  it('should be created', inject([FavoriteResolveService], (service: FavoriteResolveService) => {
    expect(service).toBeTruthy();
  }));
});
