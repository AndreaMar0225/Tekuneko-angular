import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarServicios } from './gestionar-servicios';

describe('GestionarServicios', () => {
  let component: GestionarServicios;
  let fixture: ComponentFixture<GestionarServicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarServicios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionarServicios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
