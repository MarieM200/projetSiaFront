import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-equipe',
  templateUrl: './place-equipe.component.html',
  styleUrls: ['./place-equipe.component.css']
})
export class PlaceEquipeComponent implements OnInit {

  constructor() { }

  options: any;

  overlays: any[] = [];

  ngOnInit(): void {
    this.options = {
      center: {lat: 54.525961, lng: 15.255119
      },
      zoom: 4
  };

  this.overlays = [
    new google.maps.Marker({position: {lat: 43.17, lng: 5.22}, title:"Marseille"}),
  ];
/*
  handleMapClick(event) {
    //event: MouseEvent of Google Maps api
}

handleOverlayClick(event) {
    //event.originalEvent: MouseEvent of Google Maps api
    //event.overlay: Clicked overlay
    //event.map: Map instance
}
*/
  }

}
function handleMapClick(event: Event | undefined) {
  throw new Error('Function not implemented.');
}

function handleOverlayClick(event: Event | undefined) {
  throw new Error('Function not implemented.');
}

