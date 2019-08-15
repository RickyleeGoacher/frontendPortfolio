import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIconsComponent } from './about-icons.component';

describe('AboutIconsComponent', () => {
  let component: AboutIconsComponent;
  let fixture: ComponentFixture<AboutIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
