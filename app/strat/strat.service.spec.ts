import { TestBed } from '@angular/core/testing';

import { StratService } from './strat.service';

describe('StratService', () => {
  let service: StratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
