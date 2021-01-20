import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
} from '@angular/router';
import { BaseGuard } from 'src/app/produto/services/base.guard';
import { LocalStorageUtils } from 'src/app/utils/localstorage';
import { NovoComponent } from '../novo/novo.component';

@Injectable()
export class FornecedorGuard
  extends BaseGuard
  implements CanActivate, CanDeactivate<NovoComponent> {
  localStorageUtils = new LocalStorageUtils();
  constructor(protected router: Router) {
    super(router);
  }

  canDeactivate(component: NovoComponent) {
    if (component.mudancasNaoSalvas) {
      window.confirm(
        'Tem certeza que deseja abandonar o preenchimento do formulario?'
      );
    }
    return true;
  }

  canActivate(routeAc: ActivatedRouteSnapshot) {
    return super.validaderClaims(routeAc);
  }
}
