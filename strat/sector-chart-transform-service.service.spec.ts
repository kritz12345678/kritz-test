import { TestBed } from '@angular/core/testing';

import { SectorChartTransformServiceService } from './sector-chart-transform-service.service';

describe('SectorChartTransformServiceService', () => {
  let service: SectorChartTransformServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorChartTransformServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
