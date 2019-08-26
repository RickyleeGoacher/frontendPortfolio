import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutTextService } from './about-text.service';

describe('AboutTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [ HttpClientModule, RouterTestingModule ]
  }));

  it('should be created', () => {
    const service: AboutTextService = TestBed.get(AboutTextService);
    expect(service).toBeTruthy();
  });
});
