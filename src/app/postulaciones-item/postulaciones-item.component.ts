import { Component, OnInit, Input } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PosicionesService } from './../services/posiciones.service'

@Component({
  selector: 'app-postulaciones-item',
  templateUrl: './postulaciones-item.component.html',
  styleUrls: ['./postulaciones-item.component.css']
})
export class PostulacionesItemComponent implements OnInit {
	@Input() term: string
	@Input() arg: string
	posiciones: any
	public show = false

  constructor(private posicionesService : PosicionesService) {
  	this.posiciones = posicionesService.getPosiciones();
   }

  ngOnInit() {
  }

  ngOnChanges() {
  	this.sortBy(this.arg)
   }
  sortBy(arg) {
    this.arg = arg
  }

}
