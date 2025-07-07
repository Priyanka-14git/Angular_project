import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PractiseServiceService {
  currentObsMessage:any=new AsyncSubject();
  modifiedMessage:any=this.currentObsMessage.asObservable();

  constructor() { 

  }

  setData(data:any){
    this.currentObsMessage.next(1);
     this.currentObsMessage.next(2);
      this.currentObsMessage.next(3);
       this.currentObsMessage.next(4);
       this.currentObsMessage.complete();
    
  }
}
