import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IlanDetail } from '../models/ilan-detail';
import { Observable } from 'rxjs';
import { IlanResponseModel } from '../models/ilan-response-model';
import { AddIlanDTO } from '../models/add-ilan-dto';
import { Arac } from '../models/arac';

@Injectable({
  providedIn: 'root'
})
export class IlanService {
  api_url = environment.apiURL + "Ilan/";
  constructor(private httpClient:HttpClient) { }

  getAll() : Observable<IlanResponseModel[]>{
    return this.httpClient.get<IlanResponseModel[]>(this.api_url+"all");
  }

  getById(id:number|string) : Observable<IlanResponseModel>{
    return this.httpClient.get<IlanResponseModel>(this.api_url+id);
  }

  addIlan(addIlanDto:AddIlanDTO, arac:Arac, files:File[]){
    const formData = new FormData();
    formData.append('addIlanDto', JSON.stringify(addIlanDto));
    formData.append('arac', JSON.stringify(arac));
    files.forEach(file => {
      formData.append('files', file, file.name);
    });
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
