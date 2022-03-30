import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { IllustrationComponent } from './illustration/illustration.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { DocComponent } from './doc/doc.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MenuComponent,
    IllustrationComponent,
    FooterComponent,
    AccueilComponent,
    LoginComponent,
    DocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    FileManagerAllModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
