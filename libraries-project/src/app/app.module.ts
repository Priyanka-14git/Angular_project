import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartCompComponent } from './chart-comp/chart-comp.component';
import { CookieService } from 'ngx-cookie-service';
import { CookieCompComponent } from './cookie-comp/cookie-comp.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    ChartCompComponent,
    CookieCompComponent,
    PrimeNGComponent,
    AngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    BrowserAnimationsModule,
    AvatarModule,
    AvatarGroupModule,
    ToastModule,
    MatProgressSpinnerModule,
    MatExpansionModule
  ],
 providers: [CookieService,MessageService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
