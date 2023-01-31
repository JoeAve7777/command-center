import { TestBed } from '@angular/core/testing';

import { DashboardCardItemService } from './dashboard-card-item.service';

describe('DashboardCardItemService', () => {
  let service: DashboardCardItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardCardItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
