import { Component } from '@angular/core';
import { Address } from './models/address';

@Component({
  selector: 'sa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'search-address';

  currentAddress: Address;

  updateAddress(address: Address) {
    this.currentAddress = address;
  }
}
/*
O método updateAddress atualiza a propriedade currentAddress com o address recebido como parâmetro.
Esse address é o retorno da API que está sendo enviado com o output e está sendo passado na propriedade do componente de resultado*/
