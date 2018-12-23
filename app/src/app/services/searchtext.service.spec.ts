import { TestBed } from '@angular/core/testing';

import { SearchTextService } from './searchtext.service';

describe('SeachtextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchTextService = TestBed.get(SearchTextService);
    expect(service).toBeTruthy();
  });
});
