import { Directive,ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostDir]'
})
export class HostDirDirective {
  @HostBinding('style.color')textColor:string="";
  @HostBinding('style.font-size')fontSize:string="";

  constructor(private ele:ElementRef) {
   
   }

   @HostListener('dblclick',['$event'])
   onDoubleClick(){
    this.textColor='red';
   }

   @HostListener('click',['$event'])
   onClick(){
    this.textColor=""
   }

   @HostListener('mouseover',['$event'])
   onHover(event:MouseEvent){
    this.fontSize="25px";
    console.log(event);
   }



}
