import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { LocalStorageService } from "./services/local-storage.service";


import { ToastrModule } from 'ngx-toastr';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { AddIlanComponent } from './components/add-ilan/add-ilan.component';


export function jwtOptionsFactory(localStorageService:LocalStorageService) {
  return {
    tokenGetter: () => {
      return localStorageService.getToken();
    },
    allowedDomains: ["localhost:44392"]
  }
}

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
      jwtOptionsProvider:{
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
