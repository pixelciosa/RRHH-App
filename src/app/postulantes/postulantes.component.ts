import { Component, OnInit, Input } from '@angular/core';
import { PostulantesService } from './../services/postulantes.service';
import { PostulantesPorPosicionPipe } from './../pipes/postulantes-por-posicion.pipe'

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent implements OnInit {
	@Input() estaPosicion:string

	filterargs:string

	postulantes:any[] = []

  order: string = 'nombre';

  constructor(private postulantesService : PostulantesService) {
  	this.postulantes = postulantesService.getPostulantes();
  }

  ngOnInit() {
  	this.filterargs = this.estaPosicion
  }
  remove(item) {
  	this.postulantes.splice(this.postulantes.indexOf(item),1);
  	//item.deleted = true;
  }
  sortBy(arg) {
    this.order = arg
  }


}

