import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GMapModule } from 'primeng/gmap';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import {MenubarModule} from 'primeng/menubar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MessageService } from 'primeng/api';
import { MenuComponent } from './menu/menu.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { DocComponent } from './doc/doc.component';
import { EquipeMaterielPageComponent } from './equipe-materiel-page/equipe-materiel-page.component';
import {PlaceEquipeComponent} from './equipe-materiel-page/place-equipe/place-equipe.component';
import {PlaceMaterielComponent} from './equipe-materiel-page/place-materiel/place-materiel.component';
import {QuestionsComponent} from './assistance-page/questions/questions.component';
import { AssistancePageComponent } from './assistance-page/assistance-page.component';
import { HistoriqueComponent } from './assistance-page/historique/historique.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MenuComponent,
    IllustrationComponent,
    FooterComponent,
    AccueilComponent,
    LoginComponent,
    DocComponent,
    EquipeMaterielPageComponent,
    AssistancePageComponent,
    HistoriqueComponent,
    QuestionsComponent,
    PlaceEquipeComponent,
    PlaceMaterielComponent,
    DocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GMapModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    CheckboxModule,
    MenubarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GoogleMapsModule,
    MatTabsModule,
    MatRadioModule,
    FileManagerAllModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
