/*#//Arquivo gerado pelo Scaffolding MDB
import { Injectable } from '@angular/core';
import { MDBComponente, MDBHttp, MDB } from 'mdias-componentes';
import { Parametro } from './entidade/parametro';
import { ParametroFormularioComponent } from './parametro-formulario/parametro-formulario.component';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { ParametroValor } from './entidade/parametro-valor';

@Injectable()
export class #MODULO_CAP#Service {


  constructor() {}

  public listarTodosExceto(id: number, mdbComponenteUtil: MDBComponente) {
    return MDB.servicos.http.get< Array<Parametro>>(new MDBHttp('parametro/desconsiderar/'+id)).map( (lista) => {
      return lista;
    });
  }

  public listarTodos(mdbComponenteUtil: MDBComponente) {
    return MDB.servicos.http.get<Array<Parametro>>(new MDBHttp('parametro'))
    .map(lista => lista);
  }

  public buscarPorId(id: number, mdbComponenteUtil: MDBComponente): Observable<Parametro> {
    const url = 'parametro/'+id;
    return MDB.servicos.http.get< Parametro>(new MDBHttp(url)).map( (parametro) => {
       return parametro;
    });
  }

  public listarValoresDo(parametro: Parametro, mdbComponenteUtil: MDBComponente): Observable<Array<ParametroValor>> {
    return MDB.servicos.http.post<Array<ParametroValor>>(new MDBHttp('parametro/valores'),parametro).map( (listaValores) => {
      return listaValores;
    });
  }

  public verificarFluxoTela(componente: ParametroFormularioComponent,mdbComponenteUtil: MDBComponente) {
    return MDB.angular.activatedRoute.queryParams.map( parametros => {
      if(parametros && parametros.id){
        componente.id = parametros.id;
        componente.ehEdicao = true;
        componente.ehVisualizacao = parametros.ehVisualizacao ? parametros.ehVisualizacao : false;
      }
    });
  }

  public pesquisar(filtro:Parametro,mdbComponenteUtil: MDBComponente): Observable<Array<Parametro>> {
    return MDB.servicos.http.post<Array<Parametro>>(new MDBHttp('parametro/pesquisar'),filtro).map( lista => {
      if(lista && lista.length === 0) {
        MDB.servicos.mensagem.addInformacao('',MDB.util.traduzir('mensagem.pesquisaNaoEncontrada'));  
      }
      return lista;
    });
  }
}
*/