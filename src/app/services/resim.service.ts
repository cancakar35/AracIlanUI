import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AracResim } from '../models/arac-resim';

@Injectable({
  providedIn: 'root'
})
export class ResimService {
  api_url = environment.apiURL + "resimler/";
  constructor(private httpClient:HttpClient) { }

  getAll() : Observable<AracResim[]>{
    return this.httpClient.get<AracResim[]>(this.api_url+"all");
  }

  getResimById(id:number|string) : Observable<AracResim>{
    return this.httpClient.get<AracResim>(this.api_url+id);
  }

  getByAracId(aracId:number|string) : Observable<AracResim[]>{
    return this.httpClient.get<AracResim[]>(this.api_url+"?aracId="+aracId);
  }
}
