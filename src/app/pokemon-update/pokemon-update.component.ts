import { Component } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsServiceService } from '../services/pokemons-service.service';

@Component({
  selector: 'app-pokemon-update',
  templateUrl: './pokemon-update.component.html',
  styleUrl: './pokemon-update.component.css'
})
export class PokemonUpdateComponent {
  pokemon: Pokemon | null = null;
  typesInput: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonsServiceService
  ) {
    this.pokemonService=pokemonService
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonService.getPokemonById(+id).subscribe(
        (data) => {
          this.pokemon = data;
          // Convertir le tableau de types en une chaîne pour le formulaire
          this.typesInput = this.pokemon.types.join(', ');
        },
        (error) => console.error('Erreur lors de la récupération du Pokémon:', error)
      );
    }
  }

  onSubmit(): void {
    if (this.pokemon) {
      // Convertir la chaîne d'entrées des types en tableau
      this.pokemon.types = this.typesInput.split(',').map(type => type.trim());
      this.pokemonService.updatePokemon(this.pokemon).subscribe(
        () => {
          alert('Pokémon modifié avec succès!');
          this.router.navigate(['/pokemons']);
        },
        (error) => console.error('Erreur lors de la mise à jour du Pokémon:', error)
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/pokemons']);
  }
}
