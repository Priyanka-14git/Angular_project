import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
{path:'sme',loadChildren:()=>import('./sme/sme.module').then((mod:any)=>mod.SMEModule)},
{path:'corporate',loadChildren:()=>import('./corporate/corporate.module').then((mod:any)=>mod.CorporateModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
