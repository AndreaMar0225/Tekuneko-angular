import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
  constructor(private router: Router) {}

  verDetalleServicio(id: number) {
    this.router.navigate(['/DetalleServicio', id]);
  }
}
