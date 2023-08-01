import { Injectable } from '@angular/core';
import { OzellikService } from './ozellik.service';
import { CekisTipi } from '../models/cekis-tipi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CekisTipiService extends OzellikService<CekisTipi>{

  constructor(httpClient:HttpClient) { 
    super(httpClient,"CekisTipi");
  }
}
