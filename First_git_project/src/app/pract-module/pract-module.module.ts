import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnercompComponent } from './innercomp/innercomp.component';
import { Router, RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {path:'innerComp',component:InnercompComponent}
]

@NgModule({
  declarations: [
    InnercompComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class PractModuleModule { }
