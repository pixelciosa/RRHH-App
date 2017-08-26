import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CargaCvsComponent } from './../carga-cvs/carga-cvs.component'

export const APPROUTER:Routes= [
	{path:'', component: AppComponent},
	{path: 'postulaciones', component: AppComponent},
	{path: 'carga-CV', component: CargaCvsComponent},

	{path: '**', component: AppComponent}

]