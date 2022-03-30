import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { LoginComponent } from './login/login.component';
import { DocComponent } from './doc/doc.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AssistancePageComponent } from './assistance-page/assistance-page.component';
import { EquipeMaterielPageComponent } from './equipe-materiel-page/equipe-materiel-page.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent
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
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
