import { Component } from '@angular/core';
import { Fornecedor } from '../models/fornecedor';

import { ActivatedRoute } from '@angular/router';
import { FornecedorService } from '../services/fornecedor.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
})
export class DetalhesComponent {
  fornecedor: Fornecedor = new Fornecedor();
  enderecoMap;

  constructor(private route: ActivatedRoute, private sanitazer: DomSanitizer) {
    this.fornecedor = this.route.snapshot.data['fornecedor'];

    this.enderecoMap = sanitazer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed/v1/place?q=' +
        this.enderecoCompleto() +
        ''
    );
  }

  public enderecoCompleto(): string {
    return `${this.fornecedor.endereco.logradouro}, ${this.fornecedor.endereco.numero} - ${this.fornecedor.endereco.bairro}, ${this.fornecedor.endereco.cidade} - ${this.fornecedor.endereco.estado}`;
  }
}
