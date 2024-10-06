import { Component } from '@angular/core';

import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  title:string = "Mis Datos";

  usuario:any = {
    "nombre": "usuario",
    "email": "email@email"
  }

  constructor (private sidebarService:SidebarService) {
    this.sidebarService.setSidebarLabel(this.title);
  }

}
