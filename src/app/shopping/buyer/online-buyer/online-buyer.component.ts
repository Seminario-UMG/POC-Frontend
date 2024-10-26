import { Component } from '@angular/core';

import { SidebarService } from '../../../../services/sidebar/sidebar.service';

import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-buyer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './online-buyer.component.html',
  styleUrl: './online-buyer.component.css'
})
export class OnlineBuyerComponent {
  
  title:string = "Comprador en línea";

  constructor(private router: Router, private sidebarService:SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
