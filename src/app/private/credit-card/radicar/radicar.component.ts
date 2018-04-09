import { Component, OnInit } from '@angular/core';
import { Util } from '../../../public/util/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radicar',
  templateUrl: './radicar.component.html',
  styleUrls: ['./radicar.component.css']
})
export class RadicarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    Util.loadScript("/assets/js/init-btn-float.js");
  }

  openCam(){
    this.router.navigate(['credit-card/take-picture'])
  }

}
