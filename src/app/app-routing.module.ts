import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import {CanActivateGuardService} from './Services/can-activate-guard.service';

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch: "full" },
  {path:'dashboard', loadChildren: ()=> import('./Pages/dashboard/dashboard.module').then((m)=>m.DashboardModule), canActivate:[CanActivateGuardService]},
  {path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
