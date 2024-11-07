import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { Pokemon } from '../model/pokemon';
import { Utils } from '../utils';
import { PokemonsServiceService } from '../services/pokemons-service.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemons: Pokemon[] =[];
  pokemon: Pokemon|null=null ;

  constructor(private route: ActivatedRoute, private router: Router,private pokemonsertvice :PokemonsServiceService) {this.pokemonsertvice=pokemonsertvice}
  ngOnInit(): void {



  let id = +this.route.snapshot.paramMap.get("id")!;

  this.pokemonsertvice.getPokemonById(id).subscribe((data)=>{this.pokemon=data},
  (error) => {
    console.error('Erreur lors de la récupération du Pokémon:', error);
  })
  }

  goBack(): void {
  this.router.navigate(['/pokemons']);
  }
  notnull(){
    return this.pokemon !== null && this.pokemon !== undefined;
  }
  editPokemon(): void {
    if (this.pokemon) {
      this.router.navigate(['edit-pokemon', this.pokemon.id]);
    }
  }

  // Méthode pour supprimer le Pokémon
  deletePokemon(): void {
    if (this.pokemon) {
      const confirmed = confirm(`Voulez-vous vraiment supprimer ${this.pokemon.name} ?`);
      if (confirmed) {
        this.pokemonsertvice.deletePokemon(this.pokemon.id).subscribe(
          () => {
            alert(`${this.pokemon!.name} a été supprimé.`);
            this.router.navigate(['/pokemons']);
          },
          (error) => console.error('Erreur lors de la suppression du Pokémon:', error)
        );
      }
    }
  }
}
