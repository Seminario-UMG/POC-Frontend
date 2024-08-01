import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    {
      id: 1,
      username: 'testuser',
      password: 'password123', // Recuerda no usar contraseñas en texto plano en aplicaciones reales.
      email: 'testuser@example.com',
      name: 'John Doe',
      created_at: '2024-07-31 12:34:56'
    }
  ];

  constructor(private router: Router) { }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.router.navigate(['/home']);
      return true;
    } else {
      return false;
    }
  }
}
