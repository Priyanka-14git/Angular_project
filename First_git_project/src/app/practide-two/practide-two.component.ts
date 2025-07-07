import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PractiseServiceService } from '../services/practise-service.service';

@Component({
  selector: 'app-practide-two',
  templateUrl: './practide-two.component.html',
  styleUrls: ['./practide-two.component.css']
})
export class PractideTwoComponent {
  receivedData:any;
  constructor(private act:ActivatedRoute,private custServ:PractiseServiceService){
    //console.log(this.act.paramMap);
    //this.act.queryParamMap.subscribe((res:any)=>console.log("query parameters:",res.params));
    this.custServ.modifiedMessage.subscribe((res:any)=>console.log(res));
  }


}
