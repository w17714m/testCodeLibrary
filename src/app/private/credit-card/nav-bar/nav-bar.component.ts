import { Component, OnInit } from '@angular/core';
import { Util } from '../../../public/util/util';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Util.loadScript("/assets/js/init-side-nav.js");
    Util.loadScript("/assets/js/init-dropdown.js");
  }

}
