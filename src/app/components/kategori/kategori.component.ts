import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Kategori } from 'src/app/models/kategori';
import { KategoriService } from 'src/app/services/kategori.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  kategoriler:Kategori[] = [];
  is_completed:boolean = false;
  constructor(private kategoriService:KategoriService, private toastr:ToastrService){}

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    return this.kategoriService.getAll().subscribe({
      next: data=>this.kategoriler = data,
      error: ()=>{
        this.toastr.error("Kategoriler Yüklenemedi","HATA");
      },
      complete: ()=>this.is_completed=true
    });
  }
}
