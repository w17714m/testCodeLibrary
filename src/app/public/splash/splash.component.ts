import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  @ViewChild('imgSplash')
  private imgSplash: ElementRef;

  constructor() { }

  ngOnInit() {
    this.imgSplash.nativeElement.add
    setTimeout(function(){
      
    },3000);
  }

  

}
