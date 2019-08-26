import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ExperimentsService } from './experiments.service';

describe('ExperimentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [ HttpClientModule, RouterTestingModule ]  	
  }));

  it('should be created', () => {
    const service: ExperimentsService = TestBed.get(ExperimentsService);
    expect(service).toBeTruthy();
  });
});
