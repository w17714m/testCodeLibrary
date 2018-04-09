import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import * as store from 'store';

@Injectable()
export class DataService {

  private datosCliente: string;

  constructor() { }

  getDatos(){
    if ( !store.get('rec')) {
      this.datosCliente = '';
    }else {
      this.datosCliente = store.get('rec');
    }
    return this.datosCliente;
  }

  setDatos(valor: string){
    store.set('rec', valor);
  }

}
