import { Injectable } from '@angular/core';
import { POSTULANTES } from './mocks/postulantes.mock'

@Injectable()
export class PostulantesService {

  constructor() { }

  getPostulantes() {
  	// let postulantesActivos = POSTULANTES.filter(x => x.deleted != true)

  	// return postulantesActivos;
  	return POSTULANTES
  }

}
