import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Nosotros } from './paginas/nosotros/nosotros';
import { Servicios } from './paginas/servicios/servicios';
import { InicioSesion } from './paginas/inicio-sesion/inicio-sesion';
import { GestionarServicios } from './paginas/gestionar-servicios/gestionar-servicios';
import { CrearServicio } from './paginas/crear-servicio/crear-servicio';
import { EditarServicio } from './paginas/editar-servicio/editar-servicio';
import { DetalleServicio } from './paginas/detalle-servicio/detalle-servicio';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'Nosotros', component: Nosotros},
    {path:'Servicios', component: Servicios},
    {path:'InicioSesion', component: InicioSesion},
    {path:'GestionarServicios', component: GestionarServicios},
    {path:'CrearServicio', component: CrearServicio},
    {path:'EditarServicio', component: EditarServicio},
    {path:'DetalleServicio', component: DetalleServicio},    
    {path:'**',redirectTo:''},
];
