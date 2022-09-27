import { TestBed } from '@angular/core/testing';

import { AlbumsServicesService } from './albums-services.service';

describe('AlbumsServicesService', () => {
  let service: AlbumsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
