import { Component, OnInit } from '@angular/core';
import { Util } from '../../../public/util/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Util.loadScript("/assets/js/init-carousel.js");
  }

  routing(){
    this.router.navigate(['credit-card/radicar'])
  }

}
