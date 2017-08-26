import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postulaciones',
  templateUrl: './postulaciones.component.html',
  styleUrls: ['./postulaciones.component.css']
})
export class PostulacionesComponent implements OnInit {
	order: string

  constructor() { }

  ngOnInit() {
  	// this.order = 'fecha'
  }
  ngOnChanges() {
  	console.log("on changes " + this.order)
  }


}
