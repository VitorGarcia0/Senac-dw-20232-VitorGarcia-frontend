import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoSeletor } from '../model/seletor/produtoSeletor';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly API = 'http://localhost:8080/api/produto';

  constructor(private httpClient: HttpClient) {}

  listarTodos(): Observable<Array<Produto>> {   //com retorno EXPLÍCITO(Observable<Array<Produto>>)
    return this.httpClient.get<Array<Produto>>(this.API);
  }

  listarComSeletor(seletor: ProdutoSeletor) {   //com retorno IMPLÍCITO
    //com retorno IMPLÍCITO
    return this.httpClient.post<Array<Produto>>(this.API + '/filtro', seletor);
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.API, produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>(this.API, produto);
  }

  pesquisarPorId(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(this.API + '/' + id);
  }

  excluir(id: number): Observable<Produto> {
    return this.httpClient.delete<Produto>(this.API + '/' + id);
  }
}
