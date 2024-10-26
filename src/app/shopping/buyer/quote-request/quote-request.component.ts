import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

import { ButtonModule } from 'primeng/button';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-quote-request',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './quote-request.component.html',
  styleUrl: './quote-request.component.css'
})
export class QuoteRequestComponent {

  title = "Solicitar cotización";

  constructor(private router: Router, private sidebarService:SidebarService){
    this.sidebarService.setSidebarLabel(this.title);
  }

  ngOnInit() {
    this.showAlert();
  }
  
  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  showAlert() {
    Swal.fire({
      html: `
            <ul>
                <li>La información que ingreses para la cotización debe ser real y estar completa.</li>
                Cualquier cambio puede dejar tu cotización sin validez, ya que es en base a esta información que el viajero te está cotizando.</li>
                <li>Ni Im Share My Bag ni el viajero son responsables de productos, muestras, canjes o regalos no cotizados.</li>
                <li>Por motivos de seguridad, está prohibido el transporte de productos que NO sean entregados directamente de una tienda al alojamiento del viajero.</li>
            </ul>
        `,
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      customClass: {
        popup: 'custom-modal',  // Clase para el modal
        confirmButton: 'custom-button'  // Clase para el botón
      }
    });
  }

}
