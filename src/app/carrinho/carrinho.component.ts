import {Component} from '@angular/core';
import {CarrinhoService} from "../carrinho.service";
import {IProdutoCarrinho, produtos} from "../produtos";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  itensCarinho: IProdutoCarrinho[];
  totalCarrinho = 0;

  constructor(public carrinhoService: CarrinhoService,
              private router: Router
  ) {
    this.itensCarinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotalCarrinho();
  }

  calcularTotalCarrinho() {
    this.totalCarrinho = this.itensCarinho
      .reduce((prev, curr) => (prev + curr.preco * curr.quantidade), 0)
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarinho = this.itensCarinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removeProdutoCarrinho(produtoId);
    this.calcularTotalCarrinho();
  }

  comprar() {
    alert("Parbéns você finalizou sua compra.")
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])
  }
}
