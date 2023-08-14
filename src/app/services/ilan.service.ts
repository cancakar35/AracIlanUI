import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { IlanResponseModel } from '../models/ilan-response-model';
import { AddIlanDTO } from '../models/add-ilan-dto';
import { Arac } from '../models/arac';

@Injectable({
  providedIn: 'root'
})
export class IlanService {
  private api_url = environment.apiURL + "Ilan/";
  constructor(private httpClient:HttpClient) { }

  getAll() : Observable<IlanResponseModel[]>{
    return this.httpClient.get<IlanResponseModel[]>(this.api_url+"all");
  }

  gettAllByFilter(queryParam:HttpParams) : Observable<IlanResponseModel[]>{
      return this.httpClient.get<IlanResponseModel[]>(this.api_url+"filtre", {params:queryParam});
    }

  getById(id:number|string) : Observable<IlanResponseModel>{
    return this.httpClient.get<IlanResponseModel>(this.api_url+id);
  }

  getByKategoriId(kategoriId:number|string) : Observable<IlanResponseModel[]>{
    return this.httpClient.get<IlanResponseModel[]>(this.api_url+"getbykategori/"+kategoriId);
  }

  getUserIlanList() : Observable<IlanResponseModel[]>{
    return this.httpClient.get<IlanResponseModel[]>(this.api_url+"getuserilanlist");
  }

  getSearch(query:string) : Observable<IlanResponseModel[]>{
    return this.httpClient.get<IlanResponseModel[]>(this.api_url+"search", {params:{search:query}});
  }

  addIlan(formData:FormData){
    return this.httpClient.post(this.api_url+"add",formData);
  }

  updateIlan(id:number|string, addIlanDto:AddIlanDTO){
    const formData = new FormData();
    formData.append("id", id.toString());
    formData.append("addIlanDto", JSON.stringify(addIlanDto));
    return this.httpClient.post(this.api_url+"update",formData);
  }

  removeIlan(id:number|string){
    return this.httpClient.post(this.api_url+"remove",id);
  }

}
