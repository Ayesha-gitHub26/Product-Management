import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, RouterLink],
  template: `
  <mat-toolbar color="pink">
    <button mat-icon-button routerLink="/" class="example-icon" aria-label="Example icon-button with menu icon">
      <mat-icon>🏡</mat-icon>
    </button>
    <span>My Product Management</span>
</mat-toolbar>`,
  styles: `` 
})
export class HeaderComponent {

}
