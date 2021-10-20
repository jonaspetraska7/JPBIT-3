import { TestBed } from '@angular/core/testing';

import { InteraktyvumasService } from './interaktyvumas.service';

describe('InteraktyvumasService', () => {
  let service: InteraktyvumasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteraktyvumasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
