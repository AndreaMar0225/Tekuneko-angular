import { Injectable } from '@angular/core';
import { Servicio } from './servicio.model';
import { HttpClient } from '@angular/common/http';

const STORAGE_KEY = 'servicios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private servicios: Servicio[] = [];
  private nextId = 1;

  constructor(private http: HttpClient) {
    this.cargarServicios();
  }

  private cargarServicios() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      this.servicios = JSON.parse(data);
      // Calcula el siguiente id basado en los existentes
      const ids = this.servicios.map(s => s.id);
      this.nextId = ids.length ? Math.max(...ids) + 1 : 1;
    } else {
      // Si localStorage está vacío, cargar desde servicios.json
      this.http.get<Servicio[]>('/servicios.json').subscribe(servicios => {
        this.servicios = servicios;
        const ids = this.servicios.map(s => s.id);
        this.nextId = ids.length ? Math.max(...ids) + 1 : 1;
        this.guardarServicios();
      });
    }
  }

  private guardarServicios() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.servicios));
  }

  getServicios(): Servicio[] {
    return [...this.servicios];
  }

  getServicio(id: number): Servicio | undefined {
    return this.servicios.find(s => s.id === id);
  }

  agregarServicio(servicio: Omit<Servicio, 'id'>) {
    this.servicios.push({ ...servicio, id: this.nextId++ });
    this.guardarServicios();
  }

  actualizarServicio(servicio: Servicio) {
    const idx = this.servicios.findIndex(s => s.id === servicio.id);
    if (idx > -1) {
      this.servicios[idx] = servicio;
      this.guardarServicios();
    }
  }

  eliminarServicio(id: number) {
    this.servicios = this.servicios.filter(s => s.id !== id);
    this.guardarServicios();
  }
}
