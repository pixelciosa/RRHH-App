import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-postulaciones-controles',
  templateUrl: './postulaciones-controles.component.html',
  styleUrls: ['./postulaciones-controles.component.css']
})
export class PostulacionesControlesComponent implements OnInit {
	@Output() update = new EventEmitter();
	private order: string = 'fecha';
	private isActive:boolean = false;

  constructor() { }

  ngOnInit() {

  }

  sortBy(arg: string) {
  	this.order = arg
  	this.update.emit(this.order)
  	this.isActive = true
  	console.log(arg)
  }


}
