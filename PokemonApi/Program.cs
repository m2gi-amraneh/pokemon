using Microsoft.EntityFrameworkCore;
using PokemonApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Ajoutez les services nécessaires
builder.Services.AddDbContext<PokemonContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("PokemonConnection")));

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder.AllowAnyOrigin()
                         .AllowAnyMethod()
                         .AllowAnyHeader());
});

var app = builder.Build();

app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();
