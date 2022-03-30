import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipe-materiel-page',
  templateUrl: './equipe-materiel-page.component.html',
  styleUrls: ['./equipe-materiel-page.component.css']
})
export class EquipeMaterielPageComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  options: any;
  overlays: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 6
  };


  this.overlays = [
    new google.maps.Marker({position: {lat: 43.17, lng: 5.22}, title:"Marseille"}),
  ];
  }

}


