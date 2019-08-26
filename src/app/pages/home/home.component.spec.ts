import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { ProjectSectionComponent } from '../../components/project-section/project-section.component';
import { ExperimentsSectionComponent } from '../../components/experiments-section/experiments-section.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutIconsComponent } from '../../components/about-icons/about-icons.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule, FormsModule, ReactiveFormsModule ],      
      declarations: [ HomeComponent, AboutSectionComponent, ProjectSectionComponent, ExperimentsSectionComponent, ContactFormComponent, HeroComponent, AboutIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
