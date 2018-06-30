import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormBuilder } from '@angular/forms';
import { MDB, MdbHttpServico, MdbMensagemServico } from 'mdias-componentes';

import { NOME_DA_APLICACAO, SERVIDOR, ROTA_INICIO } from './app.const';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  
  constructor(httpClient: HttpClient, mdbHttpServico: MdbHttpServico, mensageria: MdbMensagemServico , router: Router, activatedRoute: ActivatedRoute, formBuild:FormBuilder, location: Location) {
    MDB.incializar(
      {
         contexto:{
          rotaInicio: ROTA_INICIO,
          urlServidor: SERVIDOR,
          nomeSistema: NOME_DA_APLICACAO
        },angular:{
          router:router,
          activatedRoute:activatedRoute,
          formBuilder:formBuild,
          location: location
        },servicos:{
          mensagem:mensageria,
          http:mdbHttpServico
        }
      }, httpClient);
  }

  public iniciado(): Observable<boolean> {
    return MDB.inciado;
  }
}
