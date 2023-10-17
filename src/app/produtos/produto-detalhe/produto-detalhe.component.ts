import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoService } from 'src/app/shared/service/produto.service';
import { Fabricante } from './../../shared/model/fabricante';
import { FabricanteService } from './../../shared/service/fabricante.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {

  public produto: Produto = new Produto();
  public fabricantes: Fabricante[] = [];

  constructor(private produtoService: ProdutoService,
              private fabricanteService: FabricanteService,
              private router: Router) { }

  ngOnInit(): void {
    this.fabricanteService.listarTodos().subscribe(
      resultado => {
        this.fabricantes = resultado;
      },
      erro => {
        Swal.fire("Erro", "Erro ao buscar os fabricantes: " + erro, 'error');
      }
    )
  }

  salvar(){
    this.produtoService.salvar(this.produto).subscribe(
      sucesso => {
        //usar um componente de alertas (importar no app.module.ts)
        //https://github.com/sweetalert2/ngx-sweetalert2
        //Swal.fire(titulo, texto, 'warning');
        Swal.fire("Sucesso", "Produto cadastrado!", 'success');
        this.produto = new Produto();
      },
      erro => {
        Swal.fire("Erro", "Erro ao cadastrar o produto: " + erro, 'error');
      }
    );
  }

  voltar(){
    this.router.navigate(['app/produtos/listagem/']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
