import { Component, OnInit } from '@angular/core';
import { Util } from '../util';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html'
})
export class DocumentTypeComponent implements OnInit {

  ngOnInit() {
    Util.loadScript("/assets/js/init-select.js");
  }

}
