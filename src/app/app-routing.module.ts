import { ProdutosModule } from './produtos/produtos.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "produtos/lista", pathMatch: "full"},
  {path: "cadastro", redirectTo: "produtos/cadastro", pathMatch: "full"},
  {
    path: 'produtos', //Isso é o que vai estar na URL
    loadChildren:() => import('./produtos/produtos.module').then(m => m.ProdutosModule)
    // import, e o caminho até chegar na rota
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
