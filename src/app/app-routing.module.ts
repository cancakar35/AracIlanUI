import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IlanListComponent } from './components/ilan-list/ilan-list.component';
import { IlanDetailComponent } from './components/ilan-detail/ilan-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", pathMatch: "full", component:HomeComponent},
  {path:"ilanlar", component:IlanListComponent},
  {path:"ilan/:ilanId", component:IlanDetailComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
