import { TestBed } from '@angular/core/testing';

import { PvzService } from './pvz.service';

describe('PvzService', () => {
  let service: PvzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
