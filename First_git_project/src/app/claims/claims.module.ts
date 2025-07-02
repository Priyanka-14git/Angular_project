import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthClaimsComponent } from './health-claims/health-claims.component';
import { MotorClaimsComponent } from './motor-claims/motor-claims.component';
import { ClaimsCompComponent } from './claims-comp/claims-comp.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HealthClaimsComponent,
    MotorClaimsComponent,
    ClaimsCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ClaimsModule { }
