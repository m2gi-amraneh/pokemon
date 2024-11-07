import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonUpdateComponent } from './pokemon-update/pokemon-update.component';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { authGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{
  path: 'pokemons',component: PokemonListComponent,
  canActivate: [authGuard]
},
  { path: 'login', component: LoginComponent, },

{ path: 'pokemons/:id', component: PokemonDetailComponent,canActivate: [authGuard] },
{path:'edit-pokemon/:id', component: PokemonUpdateComponent,canActivate: [authGuard]},
{path:'add-pokemon', component: PokemonAddComponent,canActivate: [authGuard]},
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
