import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarineComponent } from './marine/marine.component';
import { FireComponent } from './fire/fire.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'marine',component:MarineComponent},
  {path:'fire',component:FireComponent}
]

@NgModule({
  declarations: [
    MarineComponent,
    FireComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class SMEModule { }
