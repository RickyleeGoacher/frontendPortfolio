import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [ HttpClientModule, RouterTestingModule ]    	
  }));

  it('should be created', () => {
    const service: ProjectsService = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });
});
