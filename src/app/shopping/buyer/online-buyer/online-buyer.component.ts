import { Component } from '@angular/core';

import { SidebarService } from '../../../../services/sidebar/sidebar.service';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-online-buyer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './online-buyer.component.html',
  styleUrl: './online-buyer.component.css'
})
export class OnlineBuyerComponent {
  
  title:string = "Comprador en línea";

  constructor(private sidebarService:SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

}
