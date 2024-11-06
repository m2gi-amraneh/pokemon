import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsServiceService {
  
// Retourne tous les pokémons
private apiUrl = 'http://localhost:5230/api/pokemon';
constructor(private http: HttpClient) { }
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

  getP(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }
  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/${id}`);
  }
  addPokemon(p: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(`${this.apiUrl}`,p);
  }
  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.apiUrl}/${pokemon.id}`, pokemon);
  }
  }
