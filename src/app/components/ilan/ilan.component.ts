import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IlanResponseModel } from 'src/app/models/ilan-response-model';
import { IlanService } from 'src/app/services/ilan.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-ilan',
  templateUrl: './ilan.component.html',
  styleUrls: ['./ilan.component.css']
})
export class IlanComponent implements OnInit{
  ilanlar:IlanResponseModel[] = [];
  is_completed:boolean = false;

  constructor(private ilanService:IlanService,
    private toastr:ToastrService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(params=>{
      if (params.has("kategori")){
        this.getByKategori(params.get("kategori")!);
      }
      else{
        this.getAll();
      }
    });
  }

  getAll(){
    return this.ilanService.getAll().subscribe({
      next:(data)=>this.ilanlar=data,
      error:()=>this.toastr.error("İlanlar yüklenemedi", "HATA"),
      complete: ()=>this.is_completed=true
    });
  }

  getByKategori(kategoriId:number|string){
    return this.ilanService.getByKategoriId(kategoriId).subscribe({
      next:(data)=>this.ilanlar=data,
      error:()=>this.toastr.error("İlanlar yüklenemedi", "HATA"),
      complete: ()=>this.is_completed=true
    })
  }

  getImageURL(imageUrl:string):string {
    return environment.images+imageUrl;
  }
}