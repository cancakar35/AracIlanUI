import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformation } from 'src/app/models/user-info';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  userInfo!:UserInformation|null;
  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(): void {
    this.getUserInfo();
  }

  isUserAuthenticated() : boolean{
    return this.authService.isAuthenticated();
  }

  logout(){
    this.authService.logout();
    this.router.navigate([""]);
  }

  async getUserInfo(){
    this.userInfo = await this.authService.getUserInformation();
  }

}
