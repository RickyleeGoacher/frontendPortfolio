import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsSectionComponent } from './experiments-section.component';

describe('ExperimentsSectionComponent', () => {
  let component: ExperimentsSectionComponent;
  let fixture: ComponentFixture<ExperimentsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
