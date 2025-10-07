import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  imports: [RouterModule],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css'
})
export class InicioSesion {
constructor(private router: Router) { }
redireccionar() {
  this.router.navigate(['/GestionarServicios']);
}
}


