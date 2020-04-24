import { TestBed } from '@angular/core/testing';

import { MaterialStorageService } from './material-storage.service';

describe('MaterialStorageService', () => {
  let service: MaterialStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
