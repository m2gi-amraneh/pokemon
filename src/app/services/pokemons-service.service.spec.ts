import { TestBed } from '@angular/core/testing';

import { PokemonsServiceService } from './services/pokemons-service.service';

describe('PokemonsServiceService', () => {
  let service: PokemonsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
