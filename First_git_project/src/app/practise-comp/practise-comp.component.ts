import { Component } from '@angular/core';
import { DataSerciceService } from '../services/data-sercice.service';
import { Router } from '@angular/router';
import { PractiseServiceService } from '../services/practise-service.service';

@Component({
  selector: 'app-practise-comp',
  templateUrl: './practise-comp.component.html',
  styleUrls: ['./practise-comp.component.css']
})
export class PractiseCompComponent {
  dataToPractise:any="Mango";
  constructor(private custServ:DataSerciceService,private route:Router,private pract:PractiseServiceService){
    //this.getServData();
    this.pract.setData("value1");
  }

  getServData(){
    this.custServ.getData().subscribe((res:any)=>console.log(res));
  }

  moveTo(){
    //this.route.navigateByUrl('practiseTwo/'+this.dataToPractise+'/'+this.dataToPractise+'?name=priyanka');

  }

 

  

}
