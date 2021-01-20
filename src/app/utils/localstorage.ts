export class LocalStorageUtils {
  public obterUsuario() {
    return JSON.parse(localStorage.getItem('devio.user'));
  }

  public salvarDadosLocaisUsuario(response: any) {
    this.salvarUsuario(response.userToken);
    this.salvarTokenUsuario(response.accessToken);
  }

  public limparDadosLocaisUsuario() {
    localStorage.removeItem('devio.token');
    localStorage.removeItem('devio.user');
  }

  public obterTokenUsuario(): string {
    return localStorage.getItem('devio.token');
  }

  public salvarTokenUsuario(token: string) {
    localStorage.setItem('devio.token', token);
  }

  public salvarUsuario(user: string) {
    localStorage.setItem('devio.user', JSON.stringify(user));
  }
}
