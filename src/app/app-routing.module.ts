import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirPurificationComponent } from './air-purification/air-purification.component';
import { CareerComponent } from './career/career.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'airpurificaton',
    component: AirPurificationComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'ourteam',
    component: OurteamComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
