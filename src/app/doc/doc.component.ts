import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';

              public ajaxSettings: object = {

                   url: this.hostUrl + 'api/FileManager/FileOperations',

                   getImageUrl: this.hostUrl + 'api/FileManager/GetImage',

                   uploadUrl: this.hostUrl + 'api/FileManager/Upload',

                   downloadUrl: this.hostUrl + 'api/FileManager/Download'

              };
}
