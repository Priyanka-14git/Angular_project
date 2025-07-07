import { Component, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild(ChildComponent)childRef:any;
  @ViewChildren(ChildComponent)childrenref:any;
  dataToChild:any="hi I am data from parent";

  receiveData(data:any){
    console.log(data);
  }

  ngAfterViewInit(){
    this.childRef.childMethod();
   this.childrenref._results.forEach((ele:any)=>ele.childMethod());

  }



}
