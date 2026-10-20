import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Usuari } from '../../models/usuari.model';
import { EtiquetaRolComponent } from '../etiqueta-rol/etiqueta-rol.component';

@Component({
  selector: 'app-detall-usuari',
  standalone: true,
  imports: [DatePipe, EtiquetaRolComponent],
  styleUrl: './detall-usuari.component.scss',
  templateUrl: './detall-usuari.component.html'
})
export class DetallUsuariComponent {
  @Input() usuari?: Usuari;
  @Output() tancar = new EventEmitter<void>();

  onTancar(): void {
    this.tancar.emit();
  }
}