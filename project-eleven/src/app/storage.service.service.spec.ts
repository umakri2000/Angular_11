import { TestBed } from '@angular/core/testing';

import { Storage.ServiceService } from './storage.service.service';

describe('Storage.ServiceService', () => {
  let service: Storage.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storage.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
