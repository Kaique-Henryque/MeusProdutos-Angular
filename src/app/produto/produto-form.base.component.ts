import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { FormBaseComponent } from '../base-components/form-base.component';
import { Fornecedor, Produto } from './models/produto';

export abstract class ProdutoBaseComponent extends FormBaseComponent {
  produto: Produto;
  fornecedores: Fornecedor[];
  errors: any[] = [];
  produtoForm: FormGroup;

  MASKS = utilsBr.MASKS;

  mudancasNaoSalvas: boolean;
  constructor() {
    super();
    this.validationMessages = {
      fornecedorId: {
        required: 'Escolha um Fonecedor',
      },
      nome: {
        required: 'Informe o Nome',
        minLength: 'Minimo de 2 Caracteres',
        maxLength: 'Máximo de 200 Caracteres',
      },
      descricao: {
        required: 'Informe a Descrição',
        minLength: 'Minimo de 2 Caracteres',
        maxLength: 'Máximo de 200 Caracteres',
      },
      imagem: {
        required: 'Informe uma Imagem',
      },
      valor: {
        required: 'Informe um Valor',
      },
    };
    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  protected configurarValidacaoForms(formInputElements: ElementRef[]) {
    super.configurarValidacaoFormularioBase(
      formInputElements,
      this.produtoForm
    );
  }
}
