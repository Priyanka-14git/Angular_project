import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuardServiceService } from '../services/guard-service.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  isChangesSaved:boolean=false;
  tryProperty:any;

  constructor(private actrout:ActivatedRoute,private custServ:GuardServiceService){
   // console.log(this.actrout.data);
    this.actrout.data.subscribe((res:any)=>console.log("data recieved in component",res));
    this.totry();

  }

  saveMethod(){
    
    return this.isChangesSaved==false?confirm("Your changes are not saved, do you resally wanted to leave the component"):true;

  }

  tosave(){
    this.isChangesSaved=true;
  }

  totry(){
   //this.custServ.tryCatchmethod().subscribe((res:any)=>console.log(res));
  console.log("Start of the program");

//let result = JSON.parse("{'name': 'Priyanka'}"); // ❌ Invalid JSON (should use double quotes)
try {
  let result = JSON.parse('{"name": "Priyanka"}');
  console.log(result);
} catch (e) {
  console.error("Invalid JSON:", e);
}

console.log("This line will not run"); // ❌ This will be skipped due to crash


  }

}
