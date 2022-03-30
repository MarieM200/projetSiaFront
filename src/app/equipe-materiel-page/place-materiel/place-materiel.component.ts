import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-materiel',
  templateUrl: './place-materiel.component.html',
  styleUrls: ['./place-materiel.component.css']
})
export class PlaceMaterielComponent implements OnInit {

  constructor() { }
  options: any;

  overlays: any[] = [];

  ngOnInit(): void {
    this.options = {
      center:  {lat: 54.525961, lng: 15.255119
      },
      zoom: 4
  };

  this.overlays = [
    new google.maps.Marker({position: {lat: 48.50, lng: 2.20}, title:"Paris"}),
  ];
  }

}
