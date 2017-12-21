import { TestBed, inject } from '@angular/core/testing';

import { ForumsCompareFeedbackService } from './forums-compare-feedback.service';

describe('ForumsCompareFeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumsCompareFeedbackService]
    });
  });

  it('should be created', inject([ForumsCompareFeedbackService], (service: ForumsCompareFeedbackService) => {
    expect(service).toBeTruthy();
  }));
});
