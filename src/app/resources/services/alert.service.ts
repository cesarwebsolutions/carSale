import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  //metodo alerta de sucesso
  public sucesso(mensagem: string, title?: string):void {
    this.showAlert(title!, mensagem, 'success');// icone success
  }

  public info(mensagem: string, title?: string):void {
    this.showAlert(title!, mensagem, 'info');
  }

  public error(mensagem: string, title?: string):void {
    this.showAlert(title!, mensagem, 'error');
  }

  private showAlert(title: string, mensagem: string, icone: SweetAlertIcon):void {
    Swal.fire(title, mensagem, icone)
  }
}
