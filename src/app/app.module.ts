import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

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
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    MenuComponent,
    AccueilComponent
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
    MenubarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
