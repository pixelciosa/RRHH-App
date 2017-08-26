import { Injectable } from '@angular/core';
import { POSICIONES } from './mocks/posiciones.mock'
// import * as data from './../assets/posiciones.json';


@Injectable()
export class PosicionesService {

  constructor() { }

  getPosiciones() {
  	return POSICIONES;
  }




}
