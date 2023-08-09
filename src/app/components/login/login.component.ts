import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  navigateUrl:string = "";
  nextUrl:string|null = null;

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
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email:["",[Validators.required, Validators.email]],
      password:["",[Validators.required, Validators.minLength(8)]]
    });
  }

  login(){
    if (this.loginForm.valid){
      this.authService.login(Object.assign({}, this.loginForm.value)).subscribe({
        next: response=>{
          this.localStorageService.setToken(response.token);
          this.toastr.success("Başarıyla giriş yaptınız.", "Giriş Başarılı");
          this.router.navigate([this.navigateUrl]);
        },
        error: ()=>{
          this.toastr.error("Kullanıcı adı veya parola hatalı", "HATA");
          this.loginForm.reset();
        }
      })
    }
    else {
      this.toastr.warning("Lütfen tüm alanları doğru bir şekilde doldurunuz", "Uyarı");
    }
  }
  
}
