import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenewalsComponent } from './renewals/renewals.component';
import { HomeComponent } from './home/home.component';
import { firstGuardGuard, secondGuardGuard, thirdGuardGuard } from './shared/first-guard.guard';
import { ClaimsCompComponent } from './claims/claims-comp/claims-comp.component';
import { HealthClaimsComponent } from './claims/health-claims/health-claims.component';
import { MotorClaimsComponent } from './claims/motor-claims/motor-claims.component';


const routes: Routes = [
{path:'sme',loadChildren:()=>import('./sme/sme.module').then((mod:any)=>mod.SMEModule)},
{path:'corporate',loadChildren:()=>import('./corporate/corporate.module').then((mod:any)=>mod.CorporateModule)},
{path:'renewals',component:RenewalsComponent,canActivate:[firstGuardGuard]},
{path:'claims',canActivateChild:[secondGuardGuard],children:[
  {path:'',component:ClaimsCompComponent},
  {path:'health-claim',component:HealthClaimsComponent},
  {path:'motor-claim',component:MotorClaimsComponent}
]},
{path:'',component:HomeComponent},
{path:'otherIns',loadChildren:()=>import("./others/others.module").then((mod:any)=>mod.OthersModule),canLoad:[thirdGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
