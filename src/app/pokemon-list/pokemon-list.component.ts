import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  title = 'pokemon';
  selectedPokemon: Pokemon | undefined;
 pokemons: Pokemon[] = [];

  ngOnInit() {
    this.pokemons = POKEMONS
    }
    onPokemonSelected(event: Event): void {
      const selectElement = event.target as HTMLSelectElement; // Assurez-vous que target est un élément select
      const pokemonId = selectElement.value; // Récupérer la valeur
      const id = parseInt(pokemonId, 10); // Convertir en entier
  
      // Vérifiez si l'ID est valide et trouvez le Pokémon correspondant
      this.selectedPokemon = this.pokemons.find(pokemon => pokemon.id === id);
    }
}
