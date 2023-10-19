import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/shared/model/produto';
import { ProdutoSeletor } from './../../shared/model/seletor/produtoSeletor';
import { ProdutoService } from './../../shared/service/produto.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.scss'],
})
export class ProdutoListagemComponent implements OnInit {
  //Lista de produtos que fará o binding com a tabela na view (html)
  public produtos: Array<Produto> = new Array();
  public seletor: ProdutoSeletor = new ProdutoSeletor();

  constructor(private produtoService: ProdutoService,
              private router: Router) {}

  ngOnInit(): void {

    //Similar ao método main() do Java
      this.buscarProdutos();

  }

  editar(id: number) {
    this.router.navigate(['/produtos/detalhe', id]);
  }

  excluir(id: number) {
    Swal.fire({
      title: 'Você está certo disso?',
      text: 'Deseja excluir o produto #' + id + '?',
      icon: 'warning',
      showCancelButton: true,
    }).then((retorno) => {
      if (retorno.isConfirmed) {
        this.produtoService.excluir(id).subscribe(
          (sucesso) => {
            Swal.fire('Sucesso', 'Produto excluído com sucesso!', 'success');
            this.buscarProdutos(); //Atualiza a listagem
          },
          (erro) => {
            Swal.fire('Erro', 'Erro ao excluir o produto: ' + erro, 'error');
          }
        );
      }
    });
  }


  buscarProdutos() {
    this.produtoService.listarTodos().subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  pesquisar() {
    this.produtoService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.produtos = resultado;
      },
      (erro) => {
        console.log('Erro ao buscar produtos', erro);
      }
    );
  }

  limpar() {
    this.seletor = new ProdutoSeletor();
  }
}
