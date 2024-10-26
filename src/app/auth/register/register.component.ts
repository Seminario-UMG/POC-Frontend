import { Component } from '@angular/core';
import { SidebarService } from '../../../services/sidebar/sidebar.service';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs'; // Para manejar errores de forma simple

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule, ButtonModule, CheckboxModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title: string = "Registro";
  user = {
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmUserPassword: '',
    terminos: false,
    privacidad: false
  };

  constructor(private sidebarService: SidebarService, private http: HttpClient) {
    this.sidebarService.setSidebarLabel(this.title);
  }

  onSubmit() {
    console.log(this.user);

    // Validar que las contraseñas coinciden
    if (this.user.userPassword !== this.user.confirmUserPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Contraseña no coincide',
        text: 'Las contraseñas ingresadas no coinciden.',
      });
      return; // Salir de la función si las contraseñas no coinciden
    }

    if (this.user.terminos && this.user.privacidad) {
      let user = {
        userName: this.user.userName,
        userEmail: this.user.userEmail,
        userPassword: this.user.userPassword
      };

      // Mostrar alerta de carga
      Swal.fire({
        title: 'Cargando...',
        text: 'Por favor, espera mientras procesamos tu solicitud.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading(); // Mostrar loading spinner
        }
      });

      this.http.post('http://149.50.144.143:3000/api/user', user)
        .pipe(
          catchError(error => {
            console.error('Error al registrar el usuario:', error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrió un error!",
            });
            return of(null); // Manejo simple de errores
          })
        )
        .subscribe(response => {
          // Cerrar la alerta de carga
          Swal.close();

          if (response) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "¡Te damos la bienvenida a Im Share My Bag!",
              text: "Hola, : Es necesario confirmar la creación de tu usuario para continuar.",
              showConfirmButton: true
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrió un error!",
            });
            console.error('Error en el registro.');
          }
        });
    } else {
      Swal.fire({
        title: "Completa los campos",
        text: "Debes aceptar los términos y condiciones y las políticas de privacidad.",
        icon: "warning"
      });
    }
  }
}