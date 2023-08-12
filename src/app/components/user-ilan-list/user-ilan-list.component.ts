import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IlanResponseModel } from 'src/app/models/ilan-response-model';
import { IlanService } from 'src/app/services/ilan.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user-ilan-list',
  templateUrl: './user-ilan-list.component.html',
  styleUrls: ['./user-ilan-list.component.css']
})
export class UserIlanListComponent implements OnInit{
  ilanlar:IlanResponseModel[] = [];
  ilanToRemove:number|null = null;

  constructor(private ilanService:IlanService, private toastr:ToastrService,
    private router:Router){}

  ngOnInit(): void {
    this.getUserIlanList();
  }

  getUserIlanList(){
    this.ilanService.getUserIlanList().subscribe({
      next:(response)=>this.ilanlar = response,
      error: ()=>this.toastr.error("İlanlar yüklenemedi", "HATA")
    });
  }

  getImageURL(imageUrl:string):string {
    return environment.images+imageUrl;
  }

  handleRemoveIlanButton(ilanId:number){
    this.ilanToRemove = ilanId;
  }

  removeSelectedIlan(){
    if (this.ilanToRemove != null){
      this.ilanService.removeIlan(this.ilanToRemove).subscribe({
        error: ()=>this.toastr.error("İlan silinemedi", "HATA"),
        complete: ()=>{
          this.ilanlar.splice(this.ilanlar.map(x=>x.ilan.id).indexOf(this.ilanToRemove!),1);
          this.ilanToRemove = null;
        }
      })
    }
  }
}
