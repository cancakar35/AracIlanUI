import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IlanListComponent } from './components/ilan-list/ilan-list.component';
import { IlanDetailComponent } from './components/ilan-detail/ilan-detail.component';

const routes: Routes = [
  {path:"", pathMatch: "full", component:HomeComponent},
  {path:"ilanlar", component:IlanListComponent},
  {path:"ilan/:ilanId", component:IlanDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
