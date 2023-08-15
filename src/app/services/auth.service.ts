import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/auth-response-model';
import { environment } from 'src/environments/environment.development';
import { UserRegister } from '../models/user-register';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserInformation } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api_url = environment.apiURL + "Auth/";
  
  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService,
    private jwtHelper:JwtHelperService) { }

  login(userLoginDto:UserLogin) : Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(this.api_url+"login", userLoginDto);
  }

  register(userRegisterDto:UserRegister) : Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(this.api_url+"register", userRegisterDto);
  }

  refresh(accessToken:string){
    return this.httpClient.post<AuthResponse>(this.api_url+"refresh", {token:accessToken})
  }

  logout(){
    this.localStorageService.removeToken();
  }

  isAuthenticated() : boolean {
    return !this.jwtHelper.isTokenExpired(this.localStorageService.getToken());
  }

  async getUserInformation(){
    return await this.jwtHelper.decodeToken<UserInformation>();
  }
  
}
