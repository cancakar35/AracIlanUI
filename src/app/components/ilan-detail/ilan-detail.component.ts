import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IlanDetail } from 'src/app/models/ilan-detail';
import { IlanResponseModel } from 'src/app/models/ilan-response-model';
import { IlanService } from 'src/app/services/ilan.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-ilan-detail',
  templateUrl: './ilan-detail.component.html',
  styleUrls: ['./ilan-detail.component.css']
})
export class IlanDetailComponent implements OnInit{
  ilan!:IlanResponseModel;

  constructor(private ilanService:IlanService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      if (params.has("ilanId")){
        this.getIlanById(params.get("ilanId")!);
      }
      else{
        this.router.navigate([""]);
      }
    })
  }

  getIlanById(id:string){
    this.ilanService.getById(id).subscribe({
      next: response=>this.ilan = response,
      error: () => {
        this.toastr.error("İlan Yüklenemedi!", "HATA");
        this.router.navigate([""]);
      }
    });
  }

  getImageURL(imageUrl:string):string {
    return environment.images+imageUrl;
  }


}
