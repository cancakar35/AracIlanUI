import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { HomeComponent } from './components/home/home.component';
import { IlanComponent } from './components/ilan/ilan.component';
import { IlanListComponent } from './components/ilan-list/ilan-list.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { IlanDetailComponent } from './components/ilan-detail/ilan-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AddIlanComponent } from './components/add-ilan/add-ilan.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserIlanListComponent } from './components/user-ilan-list/user-ilan-list.component';
import { environment } from 'src/environments/environment';


import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './interceptors/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    KategoriComponent,
    HomeComponent,
    IlanComponent,
    IlanListComponent,
    FiltreComponent,
    IlanDetailComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    AddIlanComponent,
    UserProfileComponent,
    UserIlanListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter: () => {
          return localStorage.getItem("token")
        },
        allowedDomains: [environment.apiURL],
        disallowedRoutes: [environment.apiURL+"auth/login", environment.apiURL+"auth/register"]
      }
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
