import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { logincomponent } from './login/login.component';
const routes: Routes = [{path: '', component: logincomponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
