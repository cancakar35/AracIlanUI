import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KategoriComponent } from './components/kategori/kategori.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { IlanComponent } from './components/ilan/ilan.component';
import { IlanListComponent } from './components/ilan-list/ilan-list.component';
import { FiltreComponent } from './components/filtre/filtre.component';

@NgModule({
  declarations: [
    AppComponent,
    KategoriComponent,
    HomeComponent,
    IlanComponent,
    IlanListComponent,
    FiltreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
