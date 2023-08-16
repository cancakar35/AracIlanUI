import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IlanResponseModel } from 'src/app/models/ilan-response-model';
import { IlanService } from 'src/app/services/ilan.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ilan-detail',
  templateUrl: './ilan-detail.component.html',
  styleUrls: ['./ilan-detail.component.css']
})
export class IlanDetailComponent implements OnInit {
  ilan!: IlanResponseModel;
  is_completed: boolean = false;
  current_image_index : number = 0;

  constructor(private ilanService: IlanService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.has("ilanId")) {
        this.getIlanById(params.get("ilanId")!);
      }
      else {
        this.router.navigate([""]);
      }
    })
  }

  getIlanById(id: string) {
    this.ilanService.getById(id).subscribe({
      next: response => this.ilan = response,
      error: () => {
        this.toastr.error("İlan Yüklenemedi!", "HATA");
        this.router.navigate([""]);
      },
      complete: () => this.is_completed = true
    });
  }

  getImageURL(imageUrl: string): string {
    const resimler = this.ilan.resimler;
    return environment.images + imageUrl;
  }

  nextImage() {
    const resimler = this.ilan.resimler;
    if (this.current_image_index+1 <= resimler.length-1){
      this.current_image_index += 1;
    }
  }

  previousImage() {
    const resimler = this.ilan.resimler;
    if (this.current_image_index != 0){
      this.current_image_index -= 1;
    }
  }

  changeImageByIndex(index:number){
    const resimler = this.ilan.resimler;
    if (index >= 0 && index <= resimler.length-1){
      this.current_image_index = index;
    }
  }
}
