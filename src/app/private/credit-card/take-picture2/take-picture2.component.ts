import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { Router } from '@angular/router';
import {DataService} from '../../../data.service';
import '@jwilli0508/wjcq_lib_util/build/wjcq_lib_util';

declare var utilWjcq: any;

@Component({
  selector: 'app-take-picture2',
  templateUrl: './take-picture2.component.html',
  styleUrls: ['./take-picture2.component.css']
})
export class TakePicture2Component implements OnInit {

  @ViewChild("inputCamara")
  inputCamara: ElementRef;

  @ViewChild("imageCamara")
  imageCamara: ElementRef;

  constructor(private renderer: Renderer2, private router: Router,private dClient: DataService) { }

  ngOnInit() {
    this.callCamera();
    //utilWjcq.utilImage('upload', 'image').convertImage95Percent(this.eventoSalida);
  }

  setMiniatura(){
    this.renderer.setAttribute(this.imageCamara.nativeElement, "src",URL.createObjectURL(this.inputCamara.nativeElement.files[0]));
  }

  callCamera(){
    this.inputCamara.nativeElement.click();
  }

  successPicture(){
    this.router.navigate(['credit-card/client-data'])
  }

  eventoSalida(texto: string) {
    console.log(texto);
    this.dClient.setDatos(texto);
  }
}
