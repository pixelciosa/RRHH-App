import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaCvsComponent } from './carga-cvs.component';

describe('CargaCvsComponent', () => {
  let component: CargaCvsComponent;
  let fixture: ComponentFixture<CargaCvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaCvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaCvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
