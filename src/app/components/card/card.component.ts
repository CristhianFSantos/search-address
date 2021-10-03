import { Component } from '@angular/core';

/*Se atentar ao número de linhas contidos no template e no estilo, 
pois de acordo com a documentação em https://angular.io/guide/styleguide,
Style 05-04 o template e o estilo devem ser extraídos se 
eles tiverem a quantidade de linhas superior a 3

Para o funcionamento do mat-card componente do Angular material é necessário 
realizar a importação a seguir “import {MatCardModule} from '@angular/material/card'”
*/

@Component({
  selector: 'sa-card',
  template: `
    <mat-card class="card">
      <ng-content select="[form]"></ng-content>
      <ng-content select="[result]"></ng-content>
      <ng-content select="[link]"></ng-content>
    </mat-card>
  `,
  styles: [
    `
      .card {
        background-color: var(--card-color);
        display: flex;
        flex-direction: column;
      }
    `,
  ],
})
export class CardComponent {}

/*A “Content projection” ou “Transclusion” é um padrão no qual você insere, ou projeta, 
o conteúdo que deseja usar dentro de outro componente. 
Por exemplo, você pode ter um Card componente que aceita conteúdo fornecido por outro componente.

O elemento <ng-content> é um espaço reservado que não cria um elemento DOM real. 
Os atributos personalizados aplicados a <ng-content> são ignorados.
Além disso é possível adicionar um atributo de seleção aos elementos <ng-content>. 
O angular oferece suporte a seletores para qualquer combinação de nome de tag, atributo, classe CSS...
Com o seletor você também define a ordem dos conteúdos.*/
