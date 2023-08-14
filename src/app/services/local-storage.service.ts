import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItemByKey(key:string){
    return localStorage.getItem(key);
  }

  setItem(key:string, value:string){
    localStorage.setItem(key, value);
  }

  removeItemByKey(key:string){
    return localStorage.removeItem(key);
  }

  getAccessToken(){
    return localStorage.getItem("token");
  }

  setToken(accessToken:string, refreshToken:string){
    localStorage.setItem("token", accessToken);
    localStorage.setItem("refresh", refreshToken);
  }
  
  removeTokens(){
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
  }
}
