import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postulaciones-buscar',
  templateUrl: './postulaciones-buscar.component.html',
  styleUrls: ['./postulaciones-buscar.component.css']
})
export class PostulacionesBuscarComponent implements OnInit {
  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  	this.update.emit('')
  }

}
