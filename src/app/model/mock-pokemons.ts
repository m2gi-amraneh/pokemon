import { Pokemon } from './pokemon';

export const POKEMONS: Pokemon[] = [
  new Pokemon(
    1,
    45,
    49,
    'Bulbasaur',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
    ['Grass', 'Poison'],
    new Date()
  ),
  new Pokemon(
    2,
    60,
    62,
    'Ivysaur',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
    ['Grass', 'Poison'],
    new Date()
  ),
  new Pokemon(
    3,
    80,
    82,
    'Venusaur',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
    ['Grass', 'Poison'],
    new Date()
  ),
  new Pokemon(
    4,
    39,
    52,
    'Charmander',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
    ['Feu'],
    new Date()
  ),
  new Pokemon(
    5,
    58,
    64,
    'Charmeleon',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
    ['Feu'],
    new Date()
  ),
  new Pokemon(
    6,
    78,
    84,
    'Charizard',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
    ['Fire', 'Flying'],
    new Date()
  ),
  // Ajoutez d'autres Pokémon si nécessaire
];
