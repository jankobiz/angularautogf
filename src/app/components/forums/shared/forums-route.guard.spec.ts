import { TestBed, async, inject } from '@angular/core/testing';

import { ForumsRouteGuard } from './forums-route.guard';

describe('ForumsRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumsRouteGuard]
    });
  });

  it('should ...', inject([ForumsRouteGuard], (guard: ForumsRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
