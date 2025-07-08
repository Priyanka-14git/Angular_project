import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.css']
})
export class NgTemplateComponent {
  enteredAge:any;
  constructor(){
    this.enteredAge=prompt("Please enter your age");
  }

}
