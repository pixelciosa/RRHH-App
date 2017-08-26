import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2OrderModule } from 'ng2-order-pipe';

/* Services */

import { PosicionesService } from './services/posiciones.service'
import { PostulantesService } from './services/postulantes.service'

/* Router */

import { RouterModule, Routes } from '@angular/router'
import { APPROUTER } from './commons/router';

/* Components */

import { InitComponent } from './init.component/init.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostulacionesComponent } from './postulaciones/postulaciones.component';
import { FooterComponent } from './footer/footer.component';
import { PostulacionesControlesComponent } from './postulaciones-controles/postulaciones-controles.component';
import { PostulacionesBuscarComponent } from './postulaciones-buscar/postulaciones-buscar.component';
import { PostulacionesItemComponent } from './postulaciones-item/postulaciones-item.component';
import { PostulantesComponent } from './postulantes/postulantes.component';
import { CargaCvsComponent } from './carga-cvs/carga-cvs.component';

/* Pipes */

import { PostulantesPorPosicionPipe } from './pipes/postulantes-por-posicion.pipe';
import { SearchBoxPipe } from './pipes/search-box.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostulacionesComponent,
    FooterComponent,
    PostulacionesControlesComponent,
    PostulacionesBuscarComponent,
    PostulacionesItemComponent,
    PostulantesComponent,
    PostulantesPorPosicionPipe,
    InitComponent,
    CargaCvsComponent,
    SearchBoxPipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APPROUTER),
    Ng2OrderModule
  ],
  providers: [PosicionesService, PostulantesService],
  bootstrap: [InitComponent]
})



export class AppModule { }
