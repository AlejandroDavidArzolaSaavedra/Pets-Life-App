import { TestBed } from '@angular/core/testing';

import { DataHomePageService } from './data-home-page.service';

describe('DataHomePageService', () => {
  let service: DataHomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataHomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
