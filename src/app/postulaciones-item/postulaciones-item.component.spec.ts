import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesItemComponent } from './postulaciones-item.component';

describe('PostulacionesItemComponent', () => {
  let component: PostulacionesItemComponent;
  let fixture: ComponentFixture<PostulacionesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulacionesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
