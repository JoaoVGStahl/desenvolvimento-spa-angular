import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styles: [
  ]
})
export class ListaProdutosComponent{

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(){
    this.produtoService.ObterProdutos()
      .subscribe(
        data => {
          this.produtos = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

}
