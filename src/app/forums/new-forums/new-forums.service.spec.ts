import { TestBed, inject } from '@angular/core/testing';

import { NewforumsService } from './newforums.service';

describe('NewforumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewforumsService]
    });
  });

  it('should be created', inject([NewforumsService], (service: NewforumsService) => {
    expect(service).toBeTruthy();
  }));
});
