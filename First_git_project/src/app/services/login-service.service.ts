import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public isLoggedIn:boolean=false;
  public userDetails:any={
    userName:'admin',
    password:'admin@123'

  }

  constructor() { 

  }

  login(uname:any,password:any){
    //return uname==this.userDetails.userName && password==this.userDetails.password?true:false;

    if(uname==this.userDetails.userName && password==this.userDetails.password){
      this.isLoggedIn=true;
      //console.log(this.isLoggedIn);
    }else{
      this.isLoggedIn=false;
      //console.log(this.isLoggedIn);
    }

}

logOut(){
  this.isLoggedIn=false;
}
}