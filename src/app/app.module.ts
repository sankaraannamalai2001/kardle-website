import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AirPurificationComponent } from './air-purification/air-purification.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormServiceService } from './form-service.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AirPurificationComponent,
    CareerComponent,
    ContactUsComponent,
    AboutComponent
    
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [FormServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
