import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'sa-toolbar-header',
  templateUrl: './toolbar-header.component.html',
  styleUrls: ['./toolbar-header.component.css'],
})
export class ToolbarHeaderComponent {
  mode = ['DARK', 'LIGHT'];
  darkMode = false;
  classMode = ['fa-sun', 'fa-moon'];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  /*O decorator @Inject é um decorator de parâmetro em um parâmetro de dependência de um construtor
    de classe que especifica um provedor personalizado da dependência.
    No caso acima, é feito a injeção de dependência do DOCUMENT.
    Boa prática para acessar elementos do DOM.
    Dentro método changeMode() é adicionado um classe no DOCUMENT através da 
    propriedade document com o classList.toggle()*/

  changeMode() {
    this.darkMode = !this.darkMode;
    this.document.documentElement.classList.toggle('dark-mode');
  }
}
