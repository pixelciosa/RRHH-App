import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulacionesBuscarComponent } from './postulaciones-buscar.component';

describe('PostulacionesBuscarComponent', () => {
  let component: PostulacionesBuscarComponent;
  let fixture: ComponentFixture<PostulacionesBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulacionesBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulacionesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
