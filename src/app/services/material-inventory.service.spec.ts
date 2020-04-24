import { TestBed } from '@angular/core/testing';

import { MaterialInventoryService } from './material-inventory.service';

describe('MaterialInventoryService', () => {
  let service: MaterialInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
