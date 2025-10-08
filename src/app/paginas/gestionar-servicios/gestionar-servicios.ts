import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Servicio } from '../../services/servicio.model';
import { DataService } from '../../services/data-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gestionar-servicios',
  imports: [RouterModule, CommonModule],
  templateUrl: './gestionar-servicios.html',
  styleUrl: './gestionar-servicios.css'
})
export class GestionarServicios {
  servicios: Servicio[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicios = this.dataService.getServicios();
    console.log(this.servicios);
  }

  eliminar(id: number) {
    this.dataService.eliminarServicio(id);
    this.cargarServicios();
  }

  editar(id: number) {
    this.router.navigate(['/EditarServicio', id]);
  }

  redireccionar() {
    this.router.navigate(['/CrearServicio']);
  }
}