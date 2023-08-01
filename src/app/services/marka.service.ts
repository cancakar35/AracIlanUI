import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Marka } from '../models/marka';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkaService {
  api_url = environment.apiURL + "Marka/";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Marka[]>{
    return this.httpClient.get<Marka[]>(this.api_url);
  }

  getById(id:number|string) : Observable<Marka>{
    return this.httpClient.get<Marka>(this.api_url+id);
  }
}
