using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PokemonApi.Models;
namespace PokemonApi.service
{
    public class PokemonService
    {
         private readonly PokemonContext _context;

    public PokemonService(PokemonContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Pokemon>> SearchPokemonsAsync(string searchTerm)
{
    if (string.IsNullOrWhiteSpace(searchTerm))
    {
        return Enumerable.Empty<Pokemon>();
    }

    // Convert both the search term and the Name field to lowercase
    return await _context.Pokemons
        .Where(p => p.Name.ToLower().Contains(searchTerm.ToLower()))
        .ToListAsync();
}

}
}
