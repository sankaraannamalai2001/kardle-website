import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirPurificationComponent } from './air-purification/air-purification.component';
import { HomeComponent } from './home/home.component';
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
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
