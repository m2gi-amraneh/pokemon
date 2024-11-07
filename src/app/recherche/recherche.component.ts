import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../model/pokemon';
import { PokemonsServiceService } from '../services/pokemons-service.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-recherche',
  imports: [FormsModule,CommonModule],
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  isInputFocused: boolean = false;  // Variable pour suivre l'état de focus

  // Fonction pour gérer l'événement focus
  onFocus() {
    this.isInputFocused = true;  // Lorsque l'input est focus, l'icône disparait
  }

  // Fonction pour gérer l'événement blur
  onBlur() {
    this.isInputFocused = false;  // Lorsque l'input perd le focus, l'icône réapparaît
  }
  private searchTerms = new Subject<string>();
  pokemons$!: Observable<Pokemon[]>;
  constructor(
  private pokemonsService: PokemonsServiceService,
  private router: Router) {}
  // Ajoute un terme de recherche dans le flux 'searchTerms'
  search(term: string): void {
  this.searchTerms.next(term);
  }
  ngOnInit(): void {
  this.pokemons$ = this.searchTerms.pipe(
  // attendre 300ms de pause entre chaque requête
  debounceTime(300),
  // ignorer la recherche en cours si c'est la même que la précédente
  distinctUntilChanged(),
  // pour chaque terme de recherche
  // on renvoie la liste des Pokémons correspondants à cette recherche.
  switchMap((term: string) => this.pokemonsService.searchPokemons(term))
  );
  }
  gotoDetail(pokemon: Pokemon): void {
  let link = ['/pokemons', pokemon.id];
  this.router.navigate(link);
  }

}
