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

  getToken(){
    return localStorage.getItem("token");
  }

  setToken(token:string){
    localStorage.setItem("token", token);
  }
  
  removeToken(){
    localStorage.removeItem("token");
  }
}
