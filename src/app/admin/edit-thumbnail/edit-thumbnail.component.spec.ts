import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThumbnailComponent } from './edit-thumbnail.component';

describe('EditThumbnailComponent', () => {
  let component: EditThumbnailComponent;
  let fixture: ComponentFixture<EditThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
