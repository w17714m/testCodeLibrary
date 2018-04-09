import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { Router } from '@angular/router';
import { Util } from '../../../public/util/util';
import '@jwilli0508/wjcq_lib_util/build/wjcq_lib_util';
import { DataService } from '../../../data.service';
declare var OCRAD: any;
declare var Caman: any;
declare var utilWjcq: any;


@Component({
  selector: 'app-take-pricture',
  templateUrl: './take-pricture.component.html',
  styleUrls: ['./take-pricture.component.css']
})
export class TakePrictureComponent implements OnInit {

  @ViewChild('inputCamara')
  inputCamara: ElementRef;

  @ViewChild('imageCamara')
  imageCamara: ElementRef;

  constructor(private renderer: Renderer2, private router: Router,private pClient: DataService) { }

  ngOnInit() {
    this.callCamera();
    utilWjcq.utilImage('upload', 'image').convertImage95Percent(this.eventoSalida);
  }

  setMiniatura() {
   // this.renderer.setAttribute(this.imageCamara.nativeElement, 'src' , URL.createObjectURL(this.inputCamara.nativeElement.files[0]));
  }

  callCamera(){
    this.inputCamara.nativeElement.click();
  }

  successPicture(){
    let selftest = this;
    // Caman('#image', function () {
    //   this.greyscale();
    //   this.render(function () {
    //     OCRAD(selftest.imageCamara.nativeElement,function(text){
    //           localStorage.clear();
    //           localStorage.lecturaimagen = text;
    //           console.log(localStorage.lecturaimagen);
    //           alert(localStorage.lecturaimagen);
    //this.router.navigate(['credit-card/radicar-posterior']);
    //     }.bind(selftest));
    //   });
    // });
    this.router.navigate(['credit-card/radicar-posterior']);

  }

  eventoSalida(texto: string) {
    console.log(texto);
    this.pClient.setDatos(texto);
  }

}
