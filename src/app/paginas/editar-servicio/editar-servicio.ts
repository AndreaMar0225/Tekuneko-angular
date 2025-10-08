import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Servicio } from '../../services/servicio.model';
import { DataService } from '../../services/data-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-servicio',
  imports: [RouterModule, FormsModule],
  templateUrl: './editar-servicio.html',
  styleUrl: './editar-servicio.css'
})
export class EditarServicio {
  servicio: Servicio = { id: 0, nombre: '', precio: '', descuento: '' };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const s = this.dataService.getServicio(id);
    if (s) this.servicio = { ...s };
  }

  guardar() {
    this.dataService.actualizarServicio(this.servicio);
    this.router.navigate(['/GestionarServicios']);
  }
}
