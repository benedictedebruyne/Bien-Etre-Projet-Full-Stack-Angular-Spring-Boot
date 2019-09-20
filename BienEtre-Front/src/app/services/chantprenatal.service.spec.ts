import { TestBed } from '@angular/core/testing';

import { ChantprenatalService } from './chantprenatal.service';

describe('ChantprenatalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChantprenatalService = TestBed.get(ChantprenatalService);
    expect(service).toBeTruthy();
  });
});
