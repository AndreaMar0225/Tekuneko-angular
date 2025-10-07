import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-servicio',
  imports: [],
  templateUrl: './detalle-servicio.html',
  styleUrl: './detalle-servicio.css'
})
export class DetalleServicio {
  id: number | null = null;
  title: string = '';
  description: string = '';
  imageUrl: string = '';
  precio: string = '';
  cantidadHoras: string = '';
  descuento: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID del servicio:', this.id);
    switch (this.id) {
      case 1:
        this.title = 'Implementación de Soluciones en la Nube';
        this.description = '¿Quieres que tu empresa sea más ágil y segura?' +  
                               'Nosotros te ayudamos a migrar tus sistemas a la nube,' + 
                               'para que puedas acceder a tus datos desde cualquier lugar,' +  
                               'con total confianza y escalabilidad. Nos encargamos de todo:' + 
                                'desde la configuración hasta el soporte.';
        this.imageUrl = '/Imagenespagina/Servicio1.jpeg';
        this.precio = '$5.500.000';
        this.cantidadHoras = '50 horas';
        this.descuento = '15%';
        break;
      case 2:
        this.title = 'Desarrollo de Software Personalizado';
        this.description = 'Sabemos que cada negocio es único.' +  
                           'Por eso, diseñamos software a tu medida, adaptado a tus procesos, necesidades' + 
                           ' y visión. Tú nos cuentas qué necesitas, y nosotros lo convertimos en una solución' + 
                           'funcional, moderna y fácil de usar.';
                                
        this.imageUrl = '/Imagenespagina/Servicio2.jpeg';
        this.precio = '$7.500.000';
        this.cantidadHoras = '100 horas';
        this.descuento = '5%';
        break;
      case 3:
        this.title = 'Ciberseguridad';
        this.description = 'Tu información es valiosa, y protegerla es nuestra prioridad.' +
                           'Implementamos medidas de seguridad para que tus sistemas estén blindados' +
                           'frente a amenazas digitales. Desde auditorías hasta monitoreo constante,' +
                           'cuidamos tu tranquilidad.';

        this.imageUrl = '/Imagenespagina/Servicio3.jpeg';
        this.precio = '$5.000.000';
        this.cantidadHoras = '200 horas';
        this.descuento = '15%';
        break;
      case 4:
        this.title = 'Soluciones de Comercio Electrónico';
        this.description = '¿Quieres vender en línea de forma profesional?' +
                          'Creamos tu tienda virtual, integramos pasarelas de pago, y optimizamos ' +
                          'la experiencia de compra para tus clientes. Tú te enfocas en vender,' + 
                          'nosotros en que todo funcione perfecto.';

        this.imageUrl = '/Imagenespagina/Servicio4.jpeg';
        this.precio = '$2.800.000';
        this.cantidadHoras = 'Según necesidad del cliente';
        this.descuento = '0%';
        
        break;
        case 5:
        this.title = 'Desarrollo de APIs';
        this.description = 'Si tus sistemas necesitan hablar entre sí, nosotros les damos voz. ' +
                           'Creamos APIs seguras y eficientes que permiten que tus plataformas.' +
                           'se conecten, compartan datos y trabajen en conjunto sin complicaciones.';

        this.imageUrl = '/Imagenespagina/Servicio5.jpeg';
        this.precio = '$5.000.000';
        this.cantidadHoras = '50 horas';
        this.descuento = '0%';
        break;
        case 6:
        this.title = 'Gestión de Bases de Datos';
        this.description = 'Tus datos bien organizados son el corazón de tu operación.' +
                           'Nos encargamos de estructurar, optimizar y respaldar tus bases de datos' +
                           'para que siempre estén disponibles, seguras y funcionando al máximo rendimiento.';

        this.imageUrl = '/Imagenespagina/Servicio6.jpeg';
        this.precio = '$4.000.000';
        this.cantidadHoras = '200 horas';
        this.descuento = '7%';
        break;
        case 7:
        this.title = 'Inteligencia Artificial';
        this.description = '¿Te imaginas tomar decisiones con datos que se anticipan al futuro? Con IA,' +
                           'analizamos patrones, automatizamos tareas y te ayudamos a entender mejor a tus clientes. ' +
                           'Es tecnología que piensa contigo.';

        this.imageUrl = '/Imagenespagina/Servicio7.jpeg';
        this.precio = '$2.500.000';
        this.cantidadHoras = '500 horas';
        this.descuento = '0%';
        break;
        case 8:
        this.title = 'Gestión de Aplicaciones';
        this.description = 'No basta con tener una app, hay que mantenerla viva.' +
                           'Nosotros monitoreamos, actualizamos y mejoramos tus aplicaciones' +
                           'para que siempre estén al día, sin errores y listas para crecer contigo.';

        this.imageUrl = '/Imagenespagina/Servicio8.jpeg';
        this.precio = '$4.500.000';
        this.cantidadHoras = '800 horas';
        this.descuento = '5%';
        break;
        case 9:
        this.title = 'Migración Tecnológica';
        this.description = '¿Tienes sistemas antiguos que ya no responden? Te ayudamos a dar' +
                           'el salto a tecnologías modernas sin perder tu información ni' +
                           'interrumpir tu operación. Es como renovar tu infraestructura sin dolor de cabeza.';

        this.imageUrl = '/Imagenespagina/Servicio9.jpeg';
        this.precio = '$12.000.000';
        this.cantidadHoras = 'según necesidad del cliente';
        this.descuento = '20%';
        break; 
        case 10:
        this.title = 'Business Intelligence';
        this.description = 'Transformamos tus datos en decisiones inteligentes.' +
                           'Con BI, te damos herramientas para visualizar, analizar y entender ' +
                           'tu negocio en profundidad. Así puedes tomar decisiones basadas' +
                           'en hechos, no en suposiciones.'; 
                        
        this.imageUrl = '/Imagenespagina/Servicio10.jpeg';
        this.precio = '$8.000.000';
        this.cantidadHoras = '200 horas';
        this.descuento = '10%';
        break; 
    }
        
  }


}

