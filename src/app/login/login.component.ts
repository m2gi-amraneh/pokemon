import { AuthService } from './../services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
   <form (ngSubmit)="onSubmit()">
  <div class="form-group">
    <label for="username"><i class="fas fa-user"></i> CP :</label>
    <input type="text" id="username" [(ngModel)]="username" name="username" required placeholder="Entrez votre CP" />
  </div>

  <div class="form-group">
    <label for="password"><i class="fas fa-lock"></i> Mot de passe :</label>
    <input type="password" id="password" [(ngModel)]="password" name="password" required placeholder="Entrez votre mot de passe" />
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn-primary"><i class="fas fa-sign-in-alt"></i> Se connecter</button>
  </div>
</form>

  `,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private AuthService:AuthService){}
username:string="pikachu"
password:string="pikachu"
onSubmit() {
  console.log(this.username,this.password)
  console.log(this.username, this.password);
  this.AuthService.login(this.username, this.password).subscribe(isLoggedIn => {
    if (isLoggedIn) {
      // Rediriger après une connexion réussie
      this.router.navigate(['/pokemons']);  // Exemple de redirection après connexion réussie
    } else {
      // Afficher un message d'erreur si la connexion échoue
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  });
}
}


