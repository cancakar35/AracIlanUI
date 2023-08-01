import { Injectable } from '@angular/core';
import { OzellikService } from './ozellik.service';
import { YakitTipi } from '../models/yakit-tipi';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YakitTipiService extends OzellikService<YakitTipi> {

  constructor(httpClient:HttpClient) { 
    super(httpClient,"YakitTipi");
  }
}
