import { TestBed, inject } from '@angular/core/testing';

import { ExisitngForumsService } from './existing-forums.service';

describe('ExisitngForumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExisitngForumsService]
    });
  });

  it('should be created', inject([ExisitngForumsService], (service: ExisitngForumsService) => {
    expect(service).toBeTruthy();
  }));
});
