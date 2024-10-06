import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { SidebarService } from '../services/sidebar/sidebar.service';

// ngprime
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, ButtonModule, InputTextModule, ToolbarModule, SidebarModule, AvatarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TravelCourier';
  titleComponent:string = 'Inicio';

  sidebarVisible:boolean = false;
  touchStartX:number = 0;
  touchEndX:number = 0;

  constructor(private router: Router, private sidebarService:SidebarService, private location: Location) {}

  ngOnInit(): void {
    this.sidebarService.sidebarLabel$.subscribe(label => {
      this.titleComponent = label;
    });
  }

  onSwipe(event: any):void {
    switch (event.direction) {
      case Hammer.DIRECTION_LEFT:
        console.log("left");
        break;
      case Hammer.DIRECTION_RIGHT:
        console.log("right");
        break;
    }
  }

  isNotRouteApp(): boolean {
    return this.router.url === '/login';
  }

  closeCallback(event: any): void {
    this.sidebarVisible = false;
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('userEmail');
    }
    this.router.navigate(['/login']);
  }

  goBack(): void {
    this.location.back(); // Navega a la página anterior en el historial del navegador
  }

}
