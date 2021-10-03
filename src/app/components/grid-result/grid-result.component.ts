import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'sa-grid-result',
  templateUrl: './grid-result.component.html',
  styleUrls: ['./grid-result.component.css'],
})

/*A interface OnInit é um lifecycle Hook que é chamado depois que angular 
inicializou todas as propriedades vinculadas a dados de uma diretiva. 
Definimos o ngOnInit() para lidar com quaisquer tarefas de inicialização adicionais.
Nesse caso o ngOnInit() é responsável por atribuir a propriedade "address" o MockUp criado, 
pois quando a aplicação é inicializada, nenhum CEP foi buscado ainda.*/
export class GridResultComponent implements OnInit {
  ngOnInit(): void {
    this.address = this.addressMockUp;
  }

  /*O decorator @Input() marca um campo de classe como uma propriedade de entrada e fornece metadados de configuração. 
  A propriedade de entrada está vinculada a uma propriedade DOM no modelo. 
  Durante a detecção de alterações, o Angular atualiza automaticamente a propriedade de dados 
  com o valor da propriedade DOM.*/
  @Input()
  address: Address;

  addressMockUp: Address = {
    cep: '05424020',
    address_type: 'Rua',
    address_name: 'Professor Carlos Reis',
    address: 'Rua Professor Carlos Reis',
    district: 'Pinheiros',
    state: 'SP',
    city: 'São Paulo',
    lat: '-23.5703026',
    lng: '-46.6967364',
    ddd: '11',
    city_ibge: '3550308',
  };
}
