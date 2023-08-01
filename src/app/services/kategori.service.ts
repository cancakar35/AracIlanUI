import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Kategori } from '../models/kategori';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KategoriService {
  api_url = environment.apiURL + "Kategori/";
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Kategori[]>{
    return this.httpClient.get<Kategori[]>(this.api_url);
  }

  getById(id:number|string) : Observable<Kategori>{
    return this.httpClient.get<Kategori>(this.api_url+id);
  }
}
