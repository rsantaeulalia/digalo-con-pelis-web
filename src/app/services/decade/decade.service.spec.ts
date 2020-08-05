import { TestBed } from '@angular/core/testing';

import { DecadeService } from './decade.service';

describe('DecadesService', () => {
  let service: DecadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
