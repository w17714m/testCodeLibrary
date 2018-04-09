import { Component, OnInit } from '@angular/core';
import { Util } from '../../../public/util/util';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-client-data',
  templateUrl: './client-data.component.html',
  styleUrls: ['./client-data.component.css']
})
export class ClientDataComponent implements OnInit {

  data: any;


  constructor(private pClient: DataService) { }

  ngOnInit() {
    console.log(this.pClient.getDatos());
    this.data = this.pClient.getDatos();
    Util.loadScript("/assets/js/init-datepicker.js");
  }

}
