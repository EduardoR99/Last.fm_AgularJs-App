import { TestBed } from '@angular/core/testing';

import { FavoriteAlbumsServicesService } from './favorite-albums-services.service';

describe('FavoriteAlbumsServicesService', () => {
  let service: FavoriteAlbumsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteAlbumsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
