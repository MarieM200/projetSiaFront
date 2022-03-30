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
<<<<<<< HEAD
                icon:'pi pi-fw pi-folder-open',
=======
                icon:'pi pi-fw pi-file',
>>>>>>> dbdbd3a1d26393b3361e740394466b2c5a571c92
                routerLink:   ['doc'],
                routerLinkActiveOptions: { exact: true },
            },
            {
                label:'Assistance',
                icon:'pi pi-fw pi-exclamation-triangle',
                routerLink: ['assistance'],
                routerLinkActiveOptions : {exact: true},
            },
            {
                label:'Equipes et matériel',
                icon:'pi pi-fw pi-map-marker',
                routerLink: ['equipe'],
                routerLinkActiveOptions: {exact: true},
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
