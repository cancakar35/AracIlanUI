import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AracDetail } from '../models/arac-detail';

@Injectable({
  providedIn: 'root'
})
export class AracService {
  api_url = environment.apiURL + "Arac/";
  constructor(private httpClient:HttpClient) { }
  
  getAll():Observable<AracDetail[]>{
    return this.httpClient.get<AracDetail[]>(this.api_url+"all")
  }

  getById(id:number|string):Observable<AracDetail>{
    return this.httpClient.get<AracDetail>(this.api_url+id)
  }
}
