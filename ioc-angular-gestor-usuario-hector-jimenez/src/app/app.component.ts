import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

// Imports de componentes de usuario
import { TargetaUsuariComponent } from './components/targeta-usuari/targeta-usuari.component';
import { BarraFiltresUsuariComponent, FiltresUsuari } from './components/barra-filtres-usuari/barra-filtres-usuari.component';
import { LlistaUsuarisComponent } from './components/llista-usuaris/llista-usuaris.component';
import { DetallUsuariComponent } from './components/detall-usuari/detall-usuari.component';

// Imports de modelos y datos ficticios
import { USUARIS_MOCK } from './mocks/dades-usuaris.mock';
import { Usuari, EstatLlista } from './models/usuari.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DatePipe,
    BarraFiltresUsuariComponent,
    LlistaUsuarisComponent,
    TargetaUsuariComponent,
    DetallUsuariComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  // Estado de la interfaz mediante Signals de Angular
  estat = signal<EstatLlista>('carregant');
  
  usuaris: Usuari[] = [];
  usuarisFiltrats: Usuari[] = [];
  usuariSeleccionat: Usuari | undefined = undefined;
  filtresActuals: FiltresUsuari = { text: '', rol: 'Tots' };

  ngOnInit(): void {
    this.carregarDades();
  }

  // Carga asíncrona simulada de datos mock
  carregarDades(): void {
    this.estat.set('carregant');
    setTimeout(() => {
      this.usuaris = USUARIS_MOCK;
      this.usuarisFiltrats = USUARIS_MOCK;
      this.estat.set(USUARIS_MOCK.length > 0 ? 'disponible' : 'buit');
    }, 800);
  }

  // Filtro combinado de búsqueda por texto (nombre/email) y rol
  actualitzaFiltres(filtres: FiltresUsuari): void {
    this.filtresActuals = filtres;
    const cerca = filtres.text.trim().toLowerCase();

    this.usuarisFiltrats = this.usuaris.filter(u => {
      const coincideixRol = filtres.rol === 'Tots' || u.rol === filtres.rol;
      const coincideixText = cerca === '' || 
        u.nom.toLowerCase().includes(cerca) || 
        u.email.toLowerCase().includes(cerca);
      return coincideixRol && coincideixText;
    });

    if (this.usuariSeleccionat && !this.usuarisFiltrats.includes(this.usuariSeleccionat)) {
      this.usuariSeleccionat = undefined;
    }
  }

  seleccionaUsuari(usuari: Usuari): void {
    this.usuariSeleccionat = usuari;
  }

  tancaDetall(): void {
    this.usuariSeleccionat = undefined;
  }
}