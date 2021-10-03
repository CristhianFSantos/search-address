import { SearchAddressService } from './../../services/search-address.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'sa-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
})
export class SearchContainerComponent {
  /*Após a importação da classe SearchAddressService, 
  é possível instanciar um objeto da classe e injetá-lo como propriedade da classe
  SearchContainerComponent direto no construtor dela. 
  Ou seja searchAddressService agora é um propriedade da classe
  Essa classe foi instanciada pois, é ela que possui o método criado anteriormente 
  que encapsula o get() um método assíncrono que envia uma solicitação HTTP 
  e retorna um Observable que emite os dados solicitados quando a resposta é recebida*/

  constructor(private searchAddressService: SearchAddressService) {}

  /*O decorator Output() marca um campo de classe como uma propriedade de saída e fornece metadados de configuração. 
  A propriedade DOM associada à propriedade de saída é atualizada automaticamente durante a detecção de alterações. */
  @Output()
  onSearchCustomEvent = new EventEmitter<Address>();

  /*A classe EventEmitter é usada em componentes com a diretiva para emitir eventos personalizados 
  de forma síncrona ou assíncrona e registrar manipuladores para esses eventos assinando uma instância.
  No exemplo acima ela permite a "criação" do evento onSearchCustomEvent
  A classe possui dois métodos.
    • emit() Emite um evento contendo um determinado valor.
    • subscribe() registra manipuladores para eventos emitidos por esta instância.
      Seu retorno é um Subscription*/

  zipCodeInput: string;

  getAddress(zipCode: number) {
    return this.searchAddressService
      .searchAddress(zipCode)
      .subscribe((address) => {
        this.onSearchCustomEvent.emit(address);
      });
  }
}
