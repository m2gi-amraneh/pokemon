using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PokemonApi.Models
{
    public class Pokemon
    {
        [Key]
        
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public int Hp { get; set; }

        public int Cp { get; set; }

        public string Picture { get; set; }

        public List<string> Types { get; set; } = new List<string>();

        public DateTime Created { get; set; } = DateTime.UtcNow;
    }
}
