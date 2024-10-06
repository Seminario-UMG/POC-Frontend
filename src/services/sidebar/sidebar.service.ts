import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarLabelSubject = new BehaviorSubject<string>('Default');
  sidebarLabel$ = this.sidebarLabelSubject.asObservable();

  setSidebarLabel(label: string): void {
    this.sidebarLabelSubject.next(label);
  }
}
