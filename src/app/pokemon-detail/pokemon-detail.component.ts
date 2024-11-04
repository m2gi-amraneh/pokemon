import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { Utils } from '../utils';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemons: Pokemon[] =[]; 
  pokemon: Pokemon|null=null ; 
  
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
  
  this.pokemons = POKEMONS;
  
  let id = +this.route.snapshot.paramMap.get("id")!; 
  
  for (let i = 0; i < this.pokemons.length; i++) {

  if (this.pokemons[i].id == id) {
  this.pokemon = this.pokemons[i];
   }
   }
   if(this.pokemon== null){this.router.navigate(['/**'])}
  }
  
  goBack(): void {
  this.router.navigate(['/pokemons']);
  }
  notnull(){
    return this.pokemon !== null && this.pokemon !== undefined;
  }
}
