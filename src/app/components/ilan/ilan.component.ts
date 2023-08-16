import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IlanResponseModel } from 'src/app/models/ilan-response-model';
import { IlanService } from 'src/app/services/ilan.service';
import { environment } from 'src/environments/environment';

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
      if (params.keys.length == 1 && params.keys[0] == "kategori"){
        this.getByKategori(params.get("kategori")!);
      }
      else if(params.keys.length == 1 && params.keys[0] == "q"){
        this.getSearch(params.get("q")!);
      }
      else if(params.keys.some(v=>["kategori","markaId","renkId","yakitTipiId","cekisTipiId","vitesTipiId","kasaTipiId"].includes(v))){
        let httpParams = new HttpParams();
        params.keys.forEach(key => {
          const values = params.getAll(key);
          if (values.length > 1) {
            values.forEach(value => {
              httpParams = httpParams.append(key, value);
            });
          }
          else if(values.length==1){
            httpParams = httpParams.append(key, values[0]);
          }
        });
        this.getByFilters(httpParams);
      }
      else{
        this.getAll();
      }
    });
  }

  getAll(){
    this.ilanService.getAll().subscribe({
      next:(data)=>this.ilanlar=data,
      error:()=>this.toastr.error("İlanlar yüklenemedi", "HATA"),
      complete: ()=>this.is_completed=true
    });
  }

  getSearch(query:string){
    this.ilanService.getSearch(query).subscribe({
      next:(data)=>this.ilanlar=data,
      error:()=>this.toastr.error("İlanlar yüklenemedi", "HATA"),
      complete: ()=>this.is_completed=true
    });
  }

  getByKategori(kategoriId:number|string){
    this.ilanService.getByKategoriId(kategoriId).subscribe({
      next:(data)=>this.ilanlar=data,
      error:()=>this.toastr.error("İlanlar yüklenemedi", "HATA"),
      complete: ()=>this.is_completed=true
    });
  }

  getByFilters(queryString:HttpParams){
    this.ilanService.gettAllByFilter(queryString).subscribe({
      next:(data)=>this.ilanlar=data,
      error:()=>this.toastr.error("İlanlar yüklenemedi", "HATA"),
      complete: ()=>this.is_completed=true
    });
  }

  getImageURL(imageUrl:string):string {
    return environment.images+imageUrl;
  }
}
