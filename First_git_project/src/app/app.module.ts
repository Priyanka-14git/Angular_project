import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { RenewalsComponent } from './renewals/renewals.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { PractiseCompComponent } from './practise-comp/practise-comp.component';
import { PractInterceptorInterceptor } from './services/pract-interceptor.interceptor';
import { PractideTwoComponent } from './practide-two/practide-two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    RenewalsComponent,
    HomeComponent,
    DashboardComponent,
    AdminProfileComponent,
    StudentProfileComponent,
    PractiseCompComponent,
    PractideTwoComponent,
    ParentComponent,
    ChildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:PractInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
