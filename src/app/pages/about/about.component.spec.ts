import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AboutComponent } from './about.component';
import { AboutImageComponent } from '../../components/about-image/about-image.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { AboutIconsComponent } from '../../components/about-icons/about-icons.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],      
      declarations: [ AboutComponent, AboutImageComponent, AboutSectionComponent, AboutIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
