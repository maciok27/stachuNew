import { Component, OnInit, Inject, Injectable, inject} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-blank',
  imports: [CommonModule],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.css'
})
export class BlankComponent {
  private router = inject(Router);
  Home(){
    this.router.navigate(['/mainpage'])
  }
}
