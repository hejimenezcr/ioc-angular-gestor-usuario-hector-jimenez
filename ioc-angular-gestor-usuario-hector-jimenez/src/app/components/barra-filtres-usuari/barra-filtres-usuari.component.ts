import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RolUsuari } from '../../models/usuari.model';

export interface FiltresUsuari {
  text: string;
  rol: RolUsuari;
}

@Component({
  selector: 'app-barra-filtres-usuari',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './barra-filtres-usuari.component.scss',
  templateUrl: './barra-filtres-usuari.component.html',
})
export class BarraFiltresUsuariComponent {
  @Output() filtresCanviats = new EventEmitter<FiltresUsuari>();

  llistaRols: RolUsuari[] = ['Tots', 'Administrador', 'Desenvolupador', 'Dissenyador', 'Gestor', 'Analista'];

  filtres: FiltresUsuari = {
    text: '',
    rol: 'Tots'
  };

  // Emite los filtros al componete padre
  aplicaFiltres(): void {
    this.filtresCanviats.emit({ ...this.filtres });
  }

  // Restablece el formulario y notifica al padre
  restableixFiltres(): void {
    this.filtres = { text: '', rol: 'Tots' };
    this.aplicaFiltres();
  }
}