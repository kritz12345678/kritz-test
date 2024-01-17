import { TestBed } from '@angular/core/testing';

import { DepartmentColorServiceService } from './department-color-service.service';

describe('DepartmentColorServiceService', () => {
  let service: DepartmentColorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentColorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
