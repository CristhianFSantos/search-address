import { Address } from './../models/address';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchAddressService {
  constructor(private http: HttpClient) {}

  /*Após a importação da classe HttpClient, 
  é possível instanciar um objeto e injetá-lo como propriedade da classe
  SearchAddressService direto no construtor dela. Ou seja http agora é um propriedade da classe*/

  searchAddress(zipCode: number): Observable<Address> {
    return this.http.get<Address>(`${environment.apiZipCodeURI}${zipCode}`);
  }

  /*O método searchAddress na verdade está encapsulando o método get da classe HttpClient.
  Que realiza a busca de dados em um servidor. O método assíncrono envia uma solicitação HTTP 
  e retorna um Observable que emite os dados solicitados quando a resposta é recebida.
  Além disso, foi passo ao get uma interface, logo o observable do retorno já será tipado.
  O get() leva dois argumentos; a URL do ponto de extremidade a partir da qual buscar e 
  um objeto de opções que é usado para configurar a solicitação.*/
}
