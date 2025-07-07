import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-comp',
  templateUrl: './cookie-comp.component.html',
  styleUrls: ['./cookie-comp.component.css']
})
export class CookieCompComponent {
  constructor(private cookieService: CookieService){
    
  }

  cookieKey:any = '';
  cookieValue :any= '';
  expiryDays:any = 1;

  retrievedValue = '';
  cookieExists = false;
  allCookies: { [key: string]: string } = {};

   setCookie() {
    if (this.cookieKey && this.cookieValue) {
      this.cookieService.set(this.cookieKey, this.cookieValue, this.expiryDays);
      alert(`Cookie "${this.cookieKey}" set!`);
    }
  }

  getCookie() {
    if (this.cookieKey) {
      this.retrievedValue = this.cookieService.get(this.cookieKey);
    }
  }

  checkCookie() {
    if (this.cookieKey) {
      this.cookieExists = this.cookieService.check(this.cookieKey);
    }
  }

  deleteCookie() {
    if (this.cookieKey) {
      this.cookieService.delete(this.cookieKey);
      alert(`Cookie "${this.cookieKey}" deleted!`);
    }
  }

  getAllCookies() {
    this.allCookies = this.cookieService.getAll();
  }

  deleteAllCookies() {
    this.cookieService.deleteAll();
    this.allCookies = {};
    alert('All cookies deleted!');
  }
}
