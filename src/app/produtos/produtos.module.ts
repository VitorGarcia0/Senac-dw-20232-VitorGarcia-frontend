import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';



@NgModule({
  declarations: [
    ProdutoListagemComponent
  ],
  imports: [
    CommonModule,
    // Importa o módulo de formulários do Angular  (para funcionar o ngModel)
    // https://angular.io/api/forms/NgModel
    FormsModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
