/* eslint-disable @typescript-eslint/member-ordering */
import { getLocaleNumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { IFilm } from '../model/IFilm';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilm[] = [
    {
      nome: 'mortal kombat (2021)',
      lancamento: '15/08/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      genero: ['Ação','Fantasia','Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
  {
    nome: 'vingadores: Ultimato (2021)',
    lancamento: '25/04/2019',
    duracao: '3h01m',
    classificacao: 6,
    cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
    genero: ['aventura', 'ficcao', 'acao'],
    pagina: '/avengers',
    favorito: false
  }
];

}
