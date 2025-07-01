import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RiskMangaementComponent } from './risk-mangaement/risk-mangaement.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'products',component:ProductsComponent},
  {path:'riskMan',component:RiskMangaementComponent}
]
@NgModule({
  declarations: [
    ProductsComponent,
    RiskMangaementComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class CorporateModule { }
