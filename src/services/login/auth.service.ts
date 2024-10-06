import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://149.50.144.143:3001/api/authentications'; 

  constructor(private http: HttpClient, private router: Router) { }

  login(user: string, password: string): Observable<any> {
    const body = { user, password };
    return this.http.post(this.apiUrl, body);  // Realiza la solicitud POST al microservicio
  }
}
