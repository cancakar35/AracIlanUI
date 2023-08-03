import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CekisTipi } from 'src/app/models/cekis-tipi';
import { KasaTipi } from 'src/app/models/kasa-tipi';
import { Marka } from 'src/app/models/marka';
import { Renk } from 'src/app/models/renk';
import { VitesTipi } from 'src/app/models/vites-tipi';
import { YakitTipi } from 'src/app/models/yakit-tipi';
import { CekisTipiService } from 'src/app/services/cekis-tipi.service';
import { KasaTipiService } from 'src/app/services/kasa-tipi.service';
import { MarkaService } from 'src/app/services/marka.service';
import { RenkService } from 'src/app/services/renk.service';
import { VitesTipiService } from 'src/app/services/vites-tipi.service';
import { YakitTipiService } from 'src/app/services/yakit-tipi.service';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit{
  cekisler:CekisTipi[] = [];
  kasalar:KasaTipi[] = [];
  renkler:Renk[] = [];
  vitesler:VitesTipi[] = [];
  yakitlar:YakitTipi[] = [];
  markalar:Marka[] = [];
  selectedMarka:string[] = [];
  selectedCekis:string[] = [];
  selectedKasa:string[] = [];
  selectedRenk:string[] = [];
  selectedVites:string[] = [];
  selectedYakit:string[] = [];
  constructor(private cekisService:CekisTipiService,
    private kasaService:KasaTipiService,
    private renkService:RenkService,
    private vitesService:VitesTipiService,
    private yakitService:YakitTipiService,
    private markaService:MarkaService,
    private toastr:ToastrService){}

  ngOnInit(): void {
    this.getCekisTipleri();
    this.getKasaTipleri();
    this.getRenkFiltre();
    this.getVitesFiltre();
    this.getYakitFiltre();
    this.getMarkaFiltre();
  }

  getCekisTipleri(){
    this.cekisService.getAll().subscribe({
      next:data=>this.cekisler=data,
      error:()=>this.toastr.error("Filtreler yüklenemedi", "HATA"),
    });
  }

  getKasaTipleri(){
    this.kasaService.getAll().subscribe({
      next:data=>this.kasalar=data,
      error:()=>this.toastr.error("Filtreler yüklenemedi", "HATA"),
    });
  }

  getRenkFiltre(){
    this.renkService.getAll().subscribe({
      next:data=>this.renkler=data,
      error:()=>this.toastr.error("Filtreler yüklenemedi", "HATA"),
    });
  }

  getVitesFiltre(){
    this.vitesService.getAll().subscribe({
      next:data=>this.vitesler=data,
      error:()=>this.toastr.error("Filtreler yüklenemedi", "HATA"),
    });
  }

  getYakitFiltre(){
    this.yakitService.getAll().subscribe({
      next:data=>this.yakitlar=data,
      error:()=>this.toastr.error("Filtreler yüklenemedi", "HATA"),
    });
  }

  getMarkaFiltre(){
    this.markaService.getAll().subscribe({
      next:data=>this.markalar=data,
      error:()=>this.toastr.error("Markalar yüklenemedi", "HATA"),
    });
  }

  changeCollapseVisibility(elementId:string){
    let element = document.getElementById(elementId) as HTMLElement;
    if (element.style.display == "block"){
      element.style.display = "none";
    }
    else{
      element.style.display = "block";
    }
  }
}
