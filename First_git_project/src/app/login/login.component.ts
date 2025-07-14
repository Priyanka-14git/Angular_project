import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginServiceService } from '../services/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:any;
  public ShowError:any=false;
  constructor(private fb:FormBuilder,private logServ:LoginServiceService,private rout:Router){
     this.loginForm=this.fb.group({
      uname:[''],
      pass:['']
    })
  }



  onSubmit(){
    //console.log(this.loginForm.value);
    // if(this.logServ.login(this.loginForm.value.uname,this.loginForm.value.pass)){
    this.logServ.login(this.loginForm.value.uname,this.loginForm.value.pass);
    if(this.logServ.isLoggedIn==true){
      this.rout.navigateByUrl('home');
      this.ShowError=false
    }else{
      this.loginForm.reset();
      this.ShowError=true;
    }
  }

}
