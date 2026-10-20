import { Usuari } from '../models/usuari.model';

// Coleccion de datos ficticios
export const USUARIS_MOCK: Usuari[] = [
  { id: 1, nom: 'Héctor Jiménez', email: 'hector@example.com', rol: 'Administrador', dataAlta: '2026-01-15', puntuacio: 98, destacat: true, actiu: true, descripcio: 'Administrador principal del sistema de gestió.' },
  { id: 2, nom: 'Laura Gómez', email: 'laura.gomez@example.com', rol: 'Desenvolupador', dataAlta: '2026-02-01', puntuacio: 85, destacat: false, actiu: true, descripcio: 'Especialista en frontend amb Angular i TypeScript.' },
  { id: 3, nom: 'Marc Vila', email: 'marc.vila@example.com', rol: 'Dissenyador', dataAlta: '2026-02-10', puntuacio: 90, destacat: true, actiu: true, descripcio: 'Dissenyador d UI/UX centrat en accessibilitat web.' },
  { id: 4, nom: 'Anna Soler', email: 'anna.soler@example.com', rol: 'Gestor', dataAlta: '2026-03-05', puntuacio: 78, destacat: false, actiu: true, descripcio: 'Gestora de projectes de desenvolupament de software.' },
  { id: 5, nom: 'Jordi Serra', email: 'jordi.serra@example.com', rol: 'Analista', dataAlta: '2026-03-12', puntuacio: 92, destacat: true, actiu: true, descripcio: 'Analista de dades i requisits de seguretat.' },
  { id: 6, nom: 'Marta Roca', email: 'marta.roca@example.com', rol: 'Desenvolupador', dataAlta: '2026-04-02', puntuacio: 88, destacat: false, actiu: true, descripcio: 'Desenvolupadora backend i gestió de bases de dades.' },
  { id: 7, nom: 'Pau Claris', email: 'pau.claris@example.com', rol: 'Gestor', dataAlta: '2026-04-20', puntuacio: 70, destacat: false, actiu: false, descripcio: 'Coordinador d operacions i logística interna.' },
  { id: 8, nom: 'Elena Noguera', email: 'elena.noguera@example.com', rol: 'Dissenyador', dataAlta: '2026-05-11', puntuacio: 95, destacat: true, actiu: true, descripcio: 'Especialista en sistemes de disseny i maquetació CSS.' },
  { id: 9, nom: 'Sergi Vidal', email: 'sergi.vidal@example.com', rol: 'Analista', dataAlta: '2026-05-25', puntuacio: 82, destacat: false, actiu: true, descripcio: 'Analista de sistemes en la línia de ciberseguretat.' },
  { id: 10, nom: 'Clara Martí', email: 'clara.marti@example.com', rol: 'Administrador', dataAlta: '2026-06-01', puntuacio: 91, destacat: true, actiu: true, descripcio: 'Supervisora d accessos i auditoria d usuaris.' }
];