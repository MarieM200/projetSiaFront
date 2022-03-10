import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { DocComponent } from './doc/doc.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: GoogleMapComponent
  },
  {
    path: 'doc',
    component: DocComponent
  },
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : '**',
    redirectTo : 'accueil'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
