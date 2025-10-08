import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-servicio',
  imports: [RouterModule, FormsModule],
  templateUrl: './crear-servicio.html',
  styleUrl: './crear-servicio.css'
})
export class CrearServicio {
  nombre = '';
  precio = '';
  descuento = '';

  constructor(private dataService: DataService, private router: Router) {}

  guardar() {
    this.dataService.agregarServicio({
      nombre: this.nombre,
      precio: this.precio,
      descuento: this.descuento
    });
    this.router.navigate(['/GestionarServicios']);
  }
}