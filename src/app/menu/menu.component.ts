import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label:'Airblio Gestion',
                routerLink:   ['accueil'],
                routerLinkActiveOptions: { exact: true },
            },
            {
                label:'Documents',
                icon:'pi pi-fw pi-folder-open',
                routerLink:   ['doc'],
                routerLinkActiveOptions: { exact: true },
            },
            {
                label:'Assistance',
                icon:'pi pi-fw pi-exclamation-triangle'
            },
            {
                label:'Equipes et matériel',
                icon:'pi pi-fw pi-map-marker'
            },
            {
                label:'Connexion',
                icon:'pi pi-fw pi-calendar',
                routerLink:   ['login'],
                routerLinkActiveOptions: { exact: true },
            }
        ];
    }

    handleClick() {
        //execute action
    }
}
