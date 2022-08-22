import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

// const routes: Routes = [
//   {path:'', component: LoginComponent}
// ];
const routes: Routes = [
  { path:'', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
