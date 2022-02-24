import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
declare var google: any

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})

export class GoogleMapComponent implements OnInit {

  options: any;
  overlays: any[] = [];
  dialogVisible: boolean = false;
  markerTitle?: string | null;
  selectedPosition: any;
  infoWindow: any;
  draggable: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.options = {
      center: { lat: 48.651470, lng: 4.952734 },
      zoom: 11
    };

    this.initOverlays();

    this.infoWindow = new google.maps.InfoWindow();
  }

  handleMapClick(event: any) {
    this.dialogVisible = true;
    this.selectedPosition = event.latLng;
  }

  handleOverlayClick(event: any) {
    let isMarker = event.overlay.getTitle != undefined;

    if (isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
      event.map.setCenter(event.overlay.getPosition());

      this.messageService.add({ severity: 'info', summary: 'Marker Selected', detail: title });
    }
    else {
      this.messageService.add({ severity: 'info', summary: 'Shape Selected', detail: '' });
    }
  }

  addMarker() {
    this.overlays.push(new google.maps.Marker({ position: { lat: this.selectedPosition.lat(), lng: this.selectedPosition.lng() }, title: this.markerTitle, draggable: this.draggable }));
    this.markerTitle = null;
    this.dialogVisible = false;
  }

  handleDragEnd(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
  }

  initOverlays() {
    if (!this.overlays || !this.overlays.length) {
      this.overlays = [
        new google.maps.Marker({ position: { lat: 48.654447, lng: 4.889166 }, title: "Equipe 1" }),
        new google.maps.Marker({ position: { lat: 48.654784, lng: 4.984610 }, title: "Equipe 2" }),
        new google.maps.Marker({ position: { lat: 48.632947, lng: 4.942725 }, title: "Siège social" })
      ];
    }
  }

  clear() {
    this.overlays = [];
  }
}
