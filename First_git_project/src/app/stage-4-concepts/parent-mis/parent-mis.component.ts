import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-mis',
  templateUrl: './parent-mis.component.html',
  styleUrls: ['./parent-mis.component.css']
})
export class ParentMisComponent {
  public showList:boolean=true;
  public StateList:any=['Maharashtra','Bihar','Gujrat','Goa'];

}
