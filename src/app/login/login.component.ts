import { Component } from '@angular/core';
import { AuthService } from '../../services/login/auth.service'; 
import { FormsModule } from '@angular/forms'; // Para usar ngModel en los inputs
import { RouterModule, Router } from '@angular/router';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebookF, faApple } from '@fortawesome/free-brands-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common'; // Para usar directivas comunes de Angular
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, FontAwesomeModule, CommonModule, HttpClientModule], // Importar FormsModule y FontAwesomeModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(library: FaIconLibrary, private authService: AuthService, private router: Router) {
    this.checkSession();
    library.addIcons(faGoogle, faFacebookF, faApple, faBagShopping); // Configurar íconos
  }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        // Suponiendo que el login es exitoso y recibes un token o userId
        sessionStorage.setItem('userId', response.userId);
        sessionStorage.setItem('userEmail', this.email);
        this.router.navigate(['/home']);
      },
      error => {
        alert('Credenciales incorrectas');
        console.error('Error en la autenticación', error);
      }
    );
  }

  checkSession(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const userId = sessionStorage.getItem('userId');
      const userEmail = sessionStorage.getItem('userEmail');

      if (userId && userEmail) {
        this.router.navigate(['/home']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
