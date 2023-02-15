import { Component, OnInit } from '@angular/core';
import {IProduto, IProdutoCarrinho} from "../../produtos";
import {ProdutosService} from "../../produtos.service";
import {ActivatedRoute} from "@angular/router";
import {NotificacaoService} from "../../notificacao.service";
import {CarrinhoService} from "../../carrinho.service";

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;
  constructor(private service: ProdutosService,
              private route: ActivatedRoute,
              private noticacao: NotificacaoService,
              private carrinho: CarrinhoService
  ) {
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.service.getOne(produtoId);

    console.log(this.produto)
  }

  adicionarAoCarrinho() {
    const newProduto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinho.adicionarAoCarinho(newProduto);

    this.noticacao.notificar("O produto foi adicionado ao carrinho");
  }
}
