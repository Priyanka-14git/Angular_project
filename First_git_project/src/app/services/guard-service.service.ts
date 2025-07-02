import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {
  isLoggedIn:any=false;
  isAdmin:boolean=false;
  isSubscribed:boolean=false;

  constructor() {

   }

   loginMethod(){
    //console.log(this.isLoggedIn);
      return this.isLoggedIn;
   }

   childGuardMethod(){
    return this.isAdmin;
   }

   loadGuardMethod(){
    return this.isSubscribed;
   }
}
