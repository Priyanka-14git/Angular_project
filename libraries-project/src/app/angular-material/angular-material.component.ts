import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  readonly panelOpenState = signal(false);

}
