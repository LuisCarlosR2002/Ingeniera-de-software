import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistarProveedorComponent } from './registar-proveedor/registar-proveedor.component';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores/proveedores.component';


@NgModule({
  declarations: [
    RegistarProveedorComponent,
    ProveedoresComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule
  ],

})
export class ProveedoresModule { }
