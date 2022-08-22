import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarProveedorComponent } from './registar-proveedor.component';

describe('RegistarProveedorComponent', () => {
  let component: RegistarProveedorComponent;
  let fixture: ComponentFixture<RegistarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistarProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
