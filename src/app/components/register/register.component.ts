import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!:FormGroup;
  navigateUrl:string = "/";
  nextUrl:string|null = null;
  isFormDisabled:boolean = false;

  constructor(private authService:AuthService,
    private formBuilder:FormBuilder,
    private toastr:ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private localStorageService:LocalStorageService){}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params=>{
      if (params.has("next")){
        let newParam = params.get("next");
        if (newParam != null || newParam != ""){
          this.navigateUrl = newParam!;
          this.nextUrl = newParam;
        }
      }
    })
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName:["",[Validators.required]],
      lastName:["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(8)]]
    });
  }

  register(){
    if (this.registerForm.valid && !this.isFormDisabled){
      this.authService.register(Object.assign({}, this.registerForm.value)).subscribe({
        next: response=>{
          this.isFormDisabled = true;
          this.localStorageService.setToken(response.token);
          this.toastr.success("Başarıyla kayıt oldunuz", "Kayıt Başarılı");
          this.router.navigateByUrl(this.navigateUrl);
        },
        error: ()=>{
          this.isFormDisabled = false;
          this.toastr.error("Hata oluştu", "Kayıt Başarısız");
          this.registerForm.reset();
        }
      })
    }
    else {
      this.toastr.warning("Lütfen tüm alanları doğru bir şekilde doldurunuz", "Uyarı");
    }
  }
}
