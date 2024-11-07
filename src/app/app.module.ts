import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonTypeColorPipe } from './colortrypepokemon';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
import { HttpClientModule } from '@angular/common/http';
import { PokemonUpdateComponent } from './pokemon-update/pokemon-update.component';
import { FormsModule } from '@angular/forms';
import { PokemonAddComponent } from './pokemon-add/pokemon-add.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,PokemonTypeColorPipe, PokemonDetailComponent, PokemonListComponent, PokemonUpdateComponent,

   ],
  imports: [FormsModule , PokemonAddComponent,
    BrowserModule,RechercheComponent,FontAwesomeModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
