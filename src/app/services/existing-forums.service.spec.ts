import { TestBed, inject } from '@angular/core/testing';

import { ForumsService } from './forums.service';

describe('ForumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumsService]
    });
  });

  it('should be created', inject([ForumsService], (service: ForumsService) => {
    expect(service).toBeTruthy();
  }));
});
