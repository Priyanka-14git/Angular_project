import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropInsComponent } from './crop-ins/crop-ins.component';
import { NRIInsComponent } from './nriins/nriins.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'crop-ins',component:CropInsComponent},
  {path:'nri-ins',component:NRIInsComponent}
]

@NgModule({
  declarations: [
    CropInsComponent,
    NRIInsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class OthersModule { }
