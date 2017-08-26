import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
selector: 'app-carga-cvs',
templateUrl: './carga-cvs.component.html',
styleUrls: ['./carga-cvs.component.css']
})
export class CargaCvsComponent {



  public postulante;
  public uploadedFile: String;
  submitted = false;
  mensajeExito = false;
  public cvForm;


constructor() {
	this.postulante = {
		"nombre": "",
		"apellido": "",
		"telefono": "",
		"fecha_nacimiento": "",
		"puesto": "",
		"fecha_postulacion": "",
	};
}

fileChangeEvent(fileInput: any){
    this.uploadedFile = fileInput.target.files[0];
    console.log(this.uploadedFile);
  }

  cancel() {
    this.uploadedFile = null;
  }

  ocultarMensaje() {
		setTimeout(() => {
	  		this.mensajeExito = false;
		}, 2000);
	}

  onSubmit(cvForm: NgForm) {
  	this.submitted = true;

    console.log("El formulario contiene", cvForm.value);

    this.uploadedFile = null;
	this.mensajeExito = true;
    this.ocultarMensaje();

}

  }



