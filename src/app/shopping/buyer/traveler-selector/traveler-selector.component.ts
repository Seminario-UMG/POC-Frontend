import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox'; // Importar CheckboxModule
import { ButtonModule } from 'primeng/button'; // Importar ButtonModule
import { SidebarService } from '../../../../services/sidebar/sidebar.service';

interface Viajero {
  nombre: string;
  estado: string;
  ciudad: string;
  desde: string;
  hasta: string;
  llega: string;
  selected?: boolean; // Añadir propiedad para seleccionar
}

@Component({
  selector: 'app-traveler-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule, ButtonModule],
  templateUrl: './traveler-selector.component.html',
  styleUrls: ['./traveler-selector.component.css']
})
export class TravelerSelectorComponent {
  title: string = "Elegir Viajero";

  constructor(private router: Router, private sidebarService: SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

  viajeros: Viajero[] = [
    {
      nombre: 'Juan Pérez',
      estado: 'Guatemala',
      ciudad: 'Guatemala',
      desde: '01/01/2024',
      hasta: '15/01/2024',
      llega: '20/01/2024',
      selected: false
    },
    {
      nombre: 'María López',
      estado: 'Puebla',
      ciudad: 'Puebla',
      desde: '05/01/2024',
      hasta: '20/01/2024',
      llega: '25/01/2024',
      selected: false
    },
    {
      nombre: 'Carlos García',
      estado: 'San Salvador',
      ciudad: 'San Salvador',
      desde: '10/01/2024',
      hasta: '22/01/2024',
      llega: '28/01/2024',
      selected: false
    }
  ];

  selectedViajeros: Viajero[] = [];

  onCheckboxChange(viajero: Viajero) {
    if (viajero.selected) {
      this.selectedViajeros.push(viajero);
    } else {
      const index = this.selectedViajeros.indexOf(viajero);
      if (index > -1) {
        this.selectedViajeros.splice(index, 1);
      }
    }
  }

  cotizar() {
    console.log('Viajeros seleccionados:', this.selectedViajeros);
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}