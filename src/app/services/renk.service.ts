import { Injectable } from '@angular/core';
import { OzellikService } from './ozellik.service';
import { Renk } from '../models/renk';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RenkService extends OzellikService<Renk> {

  constructor(httpClient:HttpClient) { 
    super(httpClient,"Renk");
  }
}
