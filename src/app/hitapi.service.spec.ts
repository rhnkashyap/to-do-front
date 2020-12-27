import { TestBed } from '@angular/core/testing';

import { HitapiService } from './hitapi.service';

describe('HitapiService', () => {
  let service: HitapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
