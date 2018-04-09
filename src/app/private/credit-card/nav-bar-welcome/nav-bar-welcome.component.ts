import { Component, OnInit } from '@angular/core';
import { Util } from '../../../public/util/util';

@Component({
  selector: 'app-nav-bar-welcome',
  templateUrl: './nav-bar-welcome.component.html',
  styleUrls: ['./nav-bar-welcome.component.css']
})
export class NavBarWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Util.loadScript("/assets/js/init-side-nav.js");
    Util.loadScript("/assets/js/init-dropdown.js");
  }

}
