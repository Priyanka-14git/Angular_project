import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartCompComponent } from './chart-comp/chart-comp.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieCompComponent } from './cookie-comp/cookie-comp.component';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';

const routes: Routes = [
  {path:'charts',component:ChartCompComponent},
  {path:'cookie',component:CookieCompComponent},
  {path:'primeNG',component:PrimeNGComponent},
  {path:'angMaterial',component:AngularMaterialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
