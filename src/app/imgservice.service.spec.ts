import { TestBed } from '@angular/core/testing';

import { ImgserviceService } from './imgservice.service';

describe('ImgserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImgserviceService = TestBed.get(ImgserviceService);
    expect(service).toBeTruthy();
  });
});
