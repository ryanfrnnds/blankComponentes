import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { MDB,DependenciasService } from 'mdias-componentes';

import { NOME_DA_APLICACAO, SERVIDOR, ROTA_INICIO } from './app.const';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {

  constructor(dependencias: DependenciasService) {
    const tagGULPServidor = SERVIDOR;
    MDB.incializar( dependencias.configurar(NOME_DA_APLICACAO,ROTA_INICIO,tagGULPServidor));
  }

  public iniciado(): Observable<boolean> {
    return MDB.inciado;
  }
}
