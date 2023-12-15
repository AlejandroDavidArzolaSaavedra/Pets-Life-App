import { TestBed } from '@angular/core/testing';

import { ParagraphLoadServiceService } from './paragraph-load-service.service';

describe('ParagraphLoadServiceService', () => {
  let service: ParagraphLoadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParagraphLoadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
