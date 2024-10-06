import { Component } from '@angular/core';

import { SidebarService } from '../../../services/sidebar/sidebar.service';

import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [PasswordModule, ButtonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  title:string = "Cambiar clave";

  constructor (private sidebarService:SidebarService){
    this.sidebarService.setSidebarLabel(this.title);
  }

}
