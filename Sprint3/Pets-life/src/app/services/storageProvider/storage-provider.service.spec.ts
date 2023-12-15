import { TestBed } from '@angular/core/testing';

import { StorageProviderService } from './storage-provider.service';

describe('StorageProviderService', () => {
  let service: StorageProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
