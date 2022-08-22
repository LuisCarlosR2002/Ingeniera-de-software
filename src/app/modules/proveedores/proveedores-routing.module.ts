import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { RegistarProveedorComponent } from './registar-proveedor/registar-proveedor.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'', component:ProveedoresComponent
      },
      {
        path:'registrar',component:RegistarProveedorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
