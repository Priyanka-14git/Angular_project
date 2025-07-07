import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenewalsComponent } from './renewals/renewals.component';
import { HomeComponent } from './home/home.component';
import { fifthGuard, firstGuardGuard, fourthGuard, secondGuardGuard, seventhGuard, sixthGuard, thirdGuardGuard } from './shared/first-guard.guard';
import { ClaimsCompComponent } from './claims/claims-comp/claims-comp.component';
import { HealthClaimsComponent } from './claims/health-claims/health-claims.component';
import { MotorClaimsComponent } from './claims/motor-claims/motor-claims.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { PractiseCompComponent } from './practise-comp/practise-comp.component';
import { PractideTwoComponent } from './practide-two/practide-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


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

{path:'otherIns',loadChildren:()=>import("./others/others.module").then((mod:any)=>mod.OthersModule),canLoad:[thirdGuardGuard]},

{path:'dashboard',component:DashboardComponent,canMatch:[fourthGuard]},

{path:'profile',component:AdminProfileComponent,canMatch:[fourthGuard]},

{path:'profile',component:StudentProfileComponent,canMatch:[fifthGuard]},

{path:'firstComp',component:FirstCompComponent,canDeactivate:[sixthGuard],resolve:[seventhGuard]},

{path:'practise',component:PractiseCompComponent},
{path:'practiseTwo',component:PractideTwoComponent},
{path:'parent',component:ParentComponent},
{path:'child',component:ChildComponent},
{path:'featModule',loadChildren:()=>import("./pract-module/pract-module.module").then((mod:any)=>mod.PractModuleModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
