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

@NgModule({
  declarations: [
    AppComponent,PokemonTypeColorPipe, PokemonDetailComponent, PokemonListComponent, PokemonUpdateComponent, PokemonAddComponent
  ],
  imports: [FormsModule ,
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
