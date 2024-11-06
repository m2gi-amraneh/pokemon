import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsServiceService } from '../pokemons-service.service';

@Component({
  selector: 'app-pokemon-add',
  templateUrl: './pokemon-add.component.html',
  styleUrl: './pokemon-add.component.css'
})
export class PokemonAddComponent {
  pokemon: Pokemon = { id: 0, hp: 0, cp: 0, name: '', picture: '', types: [], created: new Date() }; // Initialisez le Pokémon
  typesInput: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonsServiceService
  ) {}
  onSubmit(): void {
    
  
      
      this.pokemon!.types = this.typesInput.split(',').map(type => type.trim());
      this.pokemonService.addPokemon(this.pokemon!).subscribe(
        () => {
          alert('Pokémon ajouter avec succès!');
          this.router.navigate(['/pokemons']);
        },
        (error) => console.error('Erreur lors de la mise à jour du Pokémon:', error)
      );
    
  }

  cancel(): void {
    this.router.navigate(['/pokemons']);
  }
}
