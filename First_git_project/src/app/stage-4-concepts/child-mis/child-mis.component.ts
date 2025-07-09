import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-mis',
  templateUrl: './child-mis.component.html',
  styleUrls: ['./child-mis.component.css']
})
export class ChildMisComponent {
  @ContentChild('ParentContent') ParentContent!:ElementRef;

  ngAfterContentInit(){
    this.ParentContent.nativeElement.style.color='red';
    this.ParentContent.nativeElement.style.fontSize='20px';
  }

}
