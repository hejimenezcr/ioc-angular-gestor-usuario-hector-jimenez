import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuari } from '../../models/usuari.model';
import { TargetaUsuariComponent } from '../targeta-usuari/targeta-usuari.component';

@Component({
  selector: 'app-llista-usuaris',
  standalone: true,
  imports: [TargetaUsuariComponent],
  styleUrl: './llista-usuaris.component.scss',
  templateUrl: './llista-usuaris.component.html',
})
export class LlistaUsuarisComponent {
  @Input({ required: true }) usuaris: Usuari[] = [];
  @Input() usuariSeleccionatId?: number;
  @Output() selecciona = new EventEmitter<Usuari>();

  propagaSeleccio(usuari: Usuari): void {
    this.selecciona.emit(usuari);
  }
}