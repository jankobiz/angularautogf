import { TestBed, inject } from '@angular/core/testing';

import { ExistingForumsService } from './existing-forums.service';

describe('ExistingForumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistingForumsService]
    });
  });

  it('should be created', inject([ExistingForumsService], (service: ExisitngForumsService) => {
    expect(service).toBeTruthy();
  }));
});
