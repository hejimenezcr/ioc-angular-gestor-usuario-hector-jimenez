import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Usuari } from '../../models/usuari.model';
import { EtiquetaRolComponent } from '../etiqueta-rol/etiqueta-rol.component';

@Component({
  selector: 'app-targeta-usuari',
  standalone: true,
  imports: [DatePipe, EtiquetaRolComponent],
  styleUrl: './targeta-usuari.component.scss',
  templateUrl: './targeta-usuari.component.html'
})
export class TargetaUsuariComponent {
  @Input({ required: true }) usuari!: Usuari;
  @Input() seleccionat = false;
  @Output() selecciona = new EventEmitter<Usuari>();

  // Notifica la selección del usuario hacia el componente padre
  notificaSeleccio(): void {
    this.selecciona.emit(this.usuari);
  }
}