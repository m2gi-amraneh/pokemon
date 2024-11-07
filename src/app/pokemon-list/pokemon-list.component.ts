import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { POKEMONS } from '../model/mock-pokemons';
import { PokemonsServiceService } from '../services/pokemons-service.service';
import { Router } from '@angular/router';
import { RechercheComponent } from '../recherche/recherche.component';
@Component({

  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {

gotodetail(id:number) {
  console.log(id)
  this.router.navigate([`/pokemons/${id}`]);
}
  title = 'pokemon';
 pokemons: Pokemon[] = [];
  constructor(private router: Router,
    private pokemonsService:PokemonsServiceService){
    pokemonsService=this.pokemonsService;
  }
  ngOnInit() {
    this.pokemonsService.getP().subscribe(
      (data) => {
        this.pokemons = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des Pokémon:', error);
      }
    );
  }


   addPokemon(): void {

    this.router.navigate([`/add-pokemon`]);

}
}
