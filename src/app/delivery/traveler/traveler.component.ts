import { Component } from '@angular/core';

import { SidebarService } from '../../../services/sidebar/sidebar.service';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-traveler',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './traveler.component.html',
  styleUrl: './traveler.component.css'
})
export class TravelerComponent {

  title:string = "Viajero";

  constructor(private sidebarService:SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

}
