import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { FornecedorService } from 'src/app/fornecedor/services/fornecedor.service';
import { Fornecedor } from '../models/produto';

@Injectable()
export class FornecedoresResolve implements Resolve<Fornecedor[]> {
  constructor(private fornecedorService: FornecedorService) {}

  resolve() {
    let i = this.fornecedorService.obterTodos();
    return i;
  }
}
