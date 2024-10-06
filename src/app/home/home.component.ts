import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarService } from '../../services/sidebar/sidebar.service';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PanelModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title:string = "Inicio";

  constructor(private router: Router, private sidebarService:SidebarService) {
    this.checkSession();
    this.sidebarService.setSidebarLabel(this.title);
  }

  checkSession(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const userId = sessionStorage.getItem('userId');
      const userEmail = sessionStorage.getItem('userEmail');

      if (!userId || !userEmail) {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }

}
