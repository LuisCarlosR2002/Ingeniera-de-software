import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'proveedores',
    loadChildren: () => import('../proveedores/proveedores.module').then(m => m.ProveedoresModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
