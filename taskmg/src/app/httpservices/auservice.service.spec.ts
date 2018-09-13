import { TestBed, inject } from '@angular/core/testing';

import { AuserviceService } from './auservice.service';

describe('AuserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuserviceService]
    });
  });

  it('should be created', inject([AuserviceService], (service: AuserviceService) => {
    expect(service).toBeTruthy();
  }));
});
