import { Component } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First_git_project';
  public showNav:boolean=false;
  constructor(private logServ:LoginServiceService,private rout:Router){
    this.rout.events.subscribe((res:any)=>{
      //console.log(res)
      if(res instanceof NavigationEnd){
         if(this.logServ.isLoggedIn){
            this.showNav=true;
          }else{
              this.showNav=false;
              this.rout.navigateByUrl('');
          }
      }
      
    });
   
   
  }

  onLogout(){
    //this.logServ.login(null,null);
    this.logServ.logOut();
    this.rout.navigateByUrl('');
  }


}
