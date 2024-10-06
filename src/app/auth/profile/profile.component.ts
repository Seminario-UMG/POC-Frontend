import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [ConfirmationService, MessageService]
})
export class ProfileComponent {

  title:string = "Mi Perfil";

  constructor(private router: Router, private confirmationService: ConfirmationService, private messageService: MessageService, private sidebarService:SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: '¿Deseas cerrar sesión?',
        header: 'Cierre de sesión',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        acceptLabel:"Aceptar",
        rejectIcon:"none",
        rejectLabel:"Cancelar",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            this.logout();
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userEmail');
    }
    this.router.navigate(['/login']);
  }

}
