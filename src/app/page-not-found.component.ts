import { Component } from '@angular/core';
@Component({
 selector: 'page-404',
 template: `
 <div class="center">
 <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
 <h1>Hey, cette page n'existe pas !</h1>
 
 Retourner à l' accueil
 
 </div>
 `
})
export class PageNotFoundComponent { }