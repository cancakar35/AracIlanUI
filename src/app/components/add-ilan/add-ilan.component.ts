import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CekisTipi } from 'src/app/models/cekis-tipi';
import { KasaTipi } from 'src/app/models/kasa-tipi';
import { Kategori } from 'src/app/models/kategori';
import { Marka } from 'src/app/models/marka';
import { Renk } from 'src/app/models/renk';
import { VitesTipi } from 'src/app/models/vites-tipi';
import { YakitTipi } from 'src/app/models/yakit-tipi';
import { CekisTipiService } from 'src/app/services/cekis-tipi.service';
import { IlanService } from 'src/app/services/ilan.service';
import { KasaTipiService } from 'src/app/services/kasa-tipi.service';
import { KategoriService } from 'src/app/services/kategori.service';
import { MarkaService } from 'src/app/services/marka.service';
import { RenkService } from 'src/app/services/renk.service';
import { VitesTipiService } from 'src/app/services/vites-tipi.service';
import { YakitTipiService } from 'src/app/services/yakit-tipi.service';

@Component({
  selector: 'app-add-ilan',
  templateUrl: './add-ilan.component.html',
  styleUrls: ['./add-ilan.component.css']
})
export class AddIlanComponent implements OnInit {
  ilanForm!: FormGroup;
  kategoriler: Kategori[] = [];
  cekisler: CekisTipi[] = [];
  kasalar: KasaTipi[] = [];
  renkler: Renk[] = [];
  vitesler: VitesTipi[] = [];
  yakitlar: YakitTipi[] = [];
  markalar: Marka[] = [];
  is_kategoriSelected: boolean = false;
  sectionNo: number = 1;
  carImages: FileList | null = null;


  constructor(private ilanService: IlanService,
    private markaService: MarkaService,
    private renkService: RenkService,
    private vitesService: VitesTipiService,
    private yakitService: YakitTipiService,
    private kasaService: KasaTipiService,
    private cekisService: CekisTipiService,
    private kategoriService: KategoriService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getIlanForm();
    this.getKategoriList();
  }

  getIlanForm() {
    this.ilanForm = this.formBuilder.group({
      arac: this.formBuilder.group({
        kategoriId: ["", Validators.required],
        markaId: ["", Validators.required],
        model: ["", Validators.required],
        seri: [""],
        uretimYili: ["", [Validators.required, Validators.pattern(/^\d{4}$/)]],
        renkId: ["", Validators.required],
        motorGucuHP: [""],
        motorHacmiCC: [""],
        kilometre: ["", Validators.required],
        vitesTipiId: [""],
        yakitTipiId: [""],
        cekisTipiId: [""],
        kasaTipiId: [""],
        sifir: [true, Validators.required],
        fiyat: ["", Validators.required]
      }),
      ilan: this.formBuilder.group({
        telefonNo: ["", [Validators.required, Validators.pattern(/^(((\+)?(90)|0)[-|\s]?)?((\d{3})[-|\s]?(\d{3})[-|\s]?(\d{2})[-|\s]?(\d{2}))$/)]],
        aciklama: ["", [Validators.required, Validators.maxLength(512)]],
        il: ["", [Validators.required, Validators.maxLength(255)]],
        ilce: ["", [Validators.required, Validators.maxLength(255)]],
        mahalle: ["", [Validators.required, Validators.maxLength(255)]]
      })
    });
  }

  getKategoriList() {
    this.kategoriService.getAll().subscribe({
      next: data => this.kategoriler = data,
      error: () => this.toastr.error("Kategoriler Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    })
  }

  getCekisTipleri() {
    this.cekisService.getAll().subscribe({
      next: data => this.cekisler = data,
      error: () => this.toastr.error("Cekis Tipleri Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    });
  }

  getKasaTipleri() {
    this.kasaService.getAll().subscribe({
      next: data => this.kasalar = data,
      error: () => this.toastr.error("Kasa Tipleri Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    });
  }

  getRenkler() {
    this.renkService.getAll().subscribe({
      next: data => this.renkler = data,
      error: () => this.toastr.error("Renk listesi Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    });
  }

  getVitesler() {
    this.vitesService.getAll().subscribe({
      next: data => this.vitesler = data,
      error: () => this.toastr.error("Vites listesi Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    });
  }

  getYakitlar() {
    this.yakitService.getAll().subscribe({
      next: data => this.yakitlar = data,
      error: () => this.toastr.error("Yakıt Tipleri Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    });
  }

  getMarkalar() {
    this.markaService.getAll().subscribe({
      next: data => this.markalar = data,
      error: () => this.toastr.error("Markalar Yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyiniz.", "HATA"),
    });
  }

  onKategoriSelect() {
    this.is_kategoriSelected = true;
    this.getMarkalar();
    this.getRenkler();
    this.getVitesler();
    this.getYakitlar();
    this.getCekisTipleri();
    this.getKasaTipleri();
  }

  nextSection() {
    if (this.sectionNo == 1) {
      this.sectionNo = 2;
    }
  }

  prevSection() {
    if (this.sectionNo == 2) {
      this.sectionNo = 1;
    }
  }

  handleFiles(event: Event) {
    this.carImages = (event.target as HTMLInputElement).files;
  }

  submitNewIlan() {
    if (this.ilanForm.valid && this.carImages != null && this.carImages.length > 0) {
      const formData = new FormData();
      formData.append('addIlanDto', JSON.stringify(Object.assign({},this.ilanForm.get("ilan")?.value)));
      formData.append('arac', JSON.stringify(Object.assign({id:0}, this.ilanForm.get("arac")?.value)));
      Array.from(this.carImages).forEach(file => {
        formData.append('files', file, file.name);
      });
      this.ilanService.addIlan(formData).subscribe({
        next: (res)=>{},
        error: (err)=>{
          this.toastr.error("İşlem başarısız. Lütfen bilgileri kontrol edip tekrar deneyiniz.","HATA");
        },
        complete: ()=>{
          this.router.navigate([""]);
        }
      })
    }
    else {
      this.toastr.warning("Lütfen gerekli alanları doldurunuz.", "Uyarı");
    }
  }


}
