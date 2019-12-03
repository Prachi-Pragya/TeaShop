import { TestBed } from '@angular/core/testing';

import { CustomoerserviceService } from './customoerservice.service';

describe('CustomoerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomoerserviceService = TestBed.get(CustomoerserviceService);
    expect(service).toBeTruthy();
  });
});
