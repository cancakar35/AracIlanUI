import { Component, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/models/user-info';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  userInfo!:UserInformation|null;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.getUserInfo();
  }

  async getUserInfo(){
    this.userInfo = await this.authService.getUserInformation();
  }
  
}
