import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonUpdateComponent } from './pokemon-update/pokemon-update.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
const routes: Routes = [{ path: 'pokemons', component: PokemonListComponent },
{ path: 'pokemons/:id', component: PokemonDetailComponent },
{path:'edit-pokemon/:id', component: PokemonUpdateComponent},
{path:'add-pokemon', component: PokemonAddComponent},
{ path: '', redirectTo: 'pokemons', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
