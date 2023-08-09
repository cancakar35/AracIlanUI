import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response-model';
import { environment } from 'src/environments/environment.development';
import { UserRegister } from '../models/user-register';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = environment.apiURL + "Auth/";
  
  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService) { }

  login(userLoginDto:UserLogin) : Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(this.api_url+"login", userLoginDto);
  }

  register(userRegisterDto:UserRegister) : Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(this.api_url+"register", userRegisterDto);
  }

  isAuthenticated() : boolean {
    return this.localStorageService.getToken() == null ? false : true;
  }
}
