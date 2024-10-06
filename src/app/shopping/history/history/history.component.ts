import { Component } from '@angular/core';

import { SidebarService } from '../../../../services/sidebar/sidebar.service';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  title:string = "Historial";

  constructor(private sidebarService:SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

}
