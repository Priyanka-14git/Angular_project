import { Component } from '@angular/core';
import { GuardServiceService } from '../services/guard-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showLogin:any=true;
  constructor(private custServ:GuardServiceService){

  }

  guardMethod(){
    this.showLogin=false;
    this.custServ.isLoggedIn=true;
    this.custServ.loginMethod();

  }
}
