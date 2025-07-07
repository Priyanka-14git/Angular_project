import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {
  isLoggedIn:any=false;
  isAdmin:boolean=false;
  isSubscribed:boolean=false;
  currentUserRole:any='admin';

  constructor(private http:HttpClient) {

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

   canMatchMethod(requiredRole:any){
    return requiredRole==this.currentUserRole;
   }

   resolveMethod(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
   }

   tryCatchmethod(){
   
      return this.http.get("https://jsonplaceholdmndkwmer.typicode.com/posts");
   
   }
}
