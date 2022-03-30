import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { DocComponent } from './doc/doc.component';
<<<<<<< HEAD
import { AccueilComponent } from './accueil/accueil.component';
import { AssistancePageComponent } from './assistance-page/assistance-page.component';
import { EquipeMaterielPageComponent } from './equipe-materiel-page/equipe-materiel-page.component';
=======
>>>>>>> dbdbd3a1d26393b3361e740394466b2c5a571c92

const routes: Routes = [
  {
    path: 'accueil',
<<<<<<< HEAD
    component: AccueilComponent
=======
    component: GoogleMapComponent
>>>>>>> dbdbd3a1d26393b3361e740394466b2c5a571c92
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
<<<<<<< HEAD
    path: 'assistance',
    component: AssistancePageComponent
  },
  {
    path: 'equipe',
    component: EquipeMaterielPageComponent
  },
  {
    path : '**',
    redirectTo : 'accueil'
  },
=======
    path : '**',
    redirectTo : 'accueil'
  }
>>>>>>> dbdbd3a1d26393b3361e740394466b2c5a571c92
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
