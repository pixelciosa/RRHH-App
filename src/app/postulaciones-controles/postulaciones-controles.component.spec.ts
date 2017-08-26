import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesControlesComponent } from './postulaciones-controles.component';

describe('PostulacionesControlesComponent', () => {
  let component: PostulacionesControlesComponent;
  let fixture: ComponentFixture<PostulacionesControlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulacionesControlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
