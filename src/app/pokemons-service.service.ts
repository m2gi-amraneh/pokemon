import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsServiceService {
// Retourne tous les pokémons
getPokemons(): Pokemon[] {
  return POKEMONS;
  }
  // Retourne le pokémon avec l'identifiant passé en paramètre
  getPokemon(id: number): Pokemon | null {
    let pokemons = this.getPokemons();
    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[index].id) {
        return pokemons[index];
      }
    }
    // Retourne null si aucun Pokémon n'est trouvé
    return null;
  }
  getPokemonTypes(): Array<string> {
  return [
  'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
  'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
   ];
  }
}
