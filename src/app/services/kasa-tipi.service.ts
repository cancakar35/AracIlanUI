import { Injectable } from '@angular/core';
import { OzellikService } from './ozellik.service';
import { KasaTipi } from '../models/kasa-tipi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KasaTipiService extends OzellikService<KasaTipi> {

  constructor(httpClient:HttpClient) { 
    super(httpClient,"KasaTipi");
  }
}
