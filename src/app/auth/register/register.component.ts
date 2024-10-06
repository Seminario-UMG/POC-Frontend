import { Component } from '@angular/core';

import { SidebarService } from '../../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  title:string = "Register";

  constructor(private sidebarService:SidebarService){
    this.sidebarService.setSidebarLabel(this.title);
  }

}
