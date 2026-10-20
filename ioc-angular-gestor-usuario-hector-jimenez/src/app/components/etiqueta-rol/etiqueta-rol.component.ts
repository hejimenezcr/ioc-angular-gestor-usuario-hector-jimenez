import { Component, Input } from '@angular/core';
import { RolUsuari } from '../../models/usuari.model';

@Component({
  selector: 'app-etiqueta-rol',
  standalone: true,
  imports: [],
  styleUrl: './etiqueta-rol.component.scss',
  templateUrl: './etiqueta-rol.component.html',
})
export class EtiquetaRolComponent {
  // Entrades del component pare amb validació obligatòria
  @Input({ required: true }) rol!: RolUsuari;
  @Input() destacat = false;
}