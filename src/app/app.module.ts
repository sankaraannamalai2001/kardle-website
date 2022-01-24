import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AirPurificationComponent } from './air-purification/air-purification.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AirPurificationComponent,
    CareerComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
