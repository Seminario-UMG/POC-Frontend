import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { SidebarService } from '../../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule, RadioButtonModule, ButtonModule, TooltipModule], // Elimina BrowserModule
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'] // Corrige styleUrl a styleUrls
})
export class CreateOrderComponent {
  // Variables para el formulario
  entrega: string = '';
  productName: string = '';
  url: string = '';
  selectedCategory: any; 
  quantity: number = 1; 
  unitValue: number = 0; 
  includeBox: any; 
  length: number = 0; 
  height: number = 0; 
  width: number = 0; 
  weight: number = 0; 
  deliveryMethod: string = ''; 
  comment: string = ''; 

  // Variables para dropdown
  categorias: { label: string; value: any }[] = [
    { label: 'Categoría 1', value: 1 },
    { label: 'Categoría 2', value: 2 },
    { label: 'Categoría 3', value: 3 },
  ]; // Ejemplo de opciones de categorías

  incluyeCajaOptions: { label: string; value: any }[] = [
    { label: 'Sí', value: true },
    { label: 'No', value: false },
  ]; // Ejemplo de opciones para incluir caja
  
  title: string = "Ingresar Pedido";

  constructor(private router: Router, private sidebarService: SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}