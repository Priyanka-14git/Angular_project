import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()DataFromParent:any;
  @Output()DatatoChild:any=new EventEmitter();

  constructor(){

  }
  ngOnInit(){
    console.log(this.DataFromParent);
    this.DatatoChild.emit("Hi I am  a data from child");
  }

  childMethod(){
    console.log("Hi I am a method of child");
  }


}
