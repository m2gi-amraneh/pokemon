import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from '../model/mock-pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsServiceService {
  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
    // Si le terme de recherche n'existe pas,
    // on renvoie un tableau vide sous la forme d'un Observable avec 'of'.
    return of([]);
    }
    return this.http.get<Pokemon[]>(`${this.apiUrl}/search?term=${term}`).pipe(
      tap(_ => this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemons', []))
      );
      }
      log(message: string): void {
        console.log(message);
      }

      // Fonction pour gérer les erreurs
      handleError<T>(operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {
          console.error(`${operation} failed: ${error.message}`); // Affiche l'erreur dans la console

          // Retourne un résultat par défaut (le tableau vide ici)
          return of(result as T);
        };
      }


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
