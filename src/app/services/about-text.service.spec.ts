import { TestBed } from '@angular/core/testing';

import { AboutTextService } from './about-text.service';

describe('AboutTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutTextService = TestBed.get(AboutTextService);
    expect(service).toBeTruthy();
  });
});
