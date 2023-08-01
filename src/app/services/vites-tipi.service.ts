import { Injectable } from '@angular/core';
import { OzellikService } from './ozellik.service';
import { VitesTipi } from '../models/vites-tipi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VitesTipiService extends OzellikService<VitesTipi> {

  constructor(httpClient:HttpClient) { 
    super(httpClient,"VitesTipi");
  }
}
