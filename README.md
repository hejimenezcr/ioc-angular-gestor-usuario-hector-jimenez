# 

<h1 align="center">Gestor d'usuaris</h1>

<p align="center">
  <b>Aquest repositori conté un sistema de gestió d'usuaris dissenyat per administrar el registre, l'autenticació i el control de rols de manera eficient. Aquesta aplicació per a la visualització, cerca i gestió d'usuaris amb filtres per rol i cerca per nom/email, comptador dinàmic i panell de detall seleccionat.</b>
</p>

------------------------------------------------------

## 📑 Índex de Continguts

* [1. Sobre el Projecte](#1-sobre-el-projecte)
* [2. Requisits del Sistema](#2-requisits-del-sistema)
* [3. Scripts Disponibles](#3-scripts-disponibles)
* [4. Guia d'Instal·lació](#4-guia-dinstal·lació)
* [4.1. Branch ra1-setup](#4-1-branch-ra1-setup)
* [4.2. Branch ra2-components](#4-2-branch-ra2-components)
* [4.3. Branch ra3-serveis](#4-3-branch-ra3-serveis)
* [5. Estructura del Projecte](#5-estructura-del-projecte)
* [6. Tecnologies Utilitzades](#6-tecnologies-utilitzades)
* [7. Autors i Llicència](#7-autors-i-llicència)

------------------------------------------------------

## 1. Sobre el Projecte

**ra1-setup**
Aquest projecte ha estat creat com a part del mòdul de desenvolupament web. L'objectiu principal és oferir una interfície interactiva construïda amb **Angular** que es comunica amb serveis REST i utilitza bones pràctiques d'arquitectura de programari.

**ra2-components**
Aquest repositori conté un sistema de gestió d'usuaris dissenyat per administrar el registre, l'autenticació i el control de rols de manera eficient. Aquesta aplicació per a la visualització, cerca i gestió d'usuaris amb filtres per rol i cerca per nom/email, comptador dinàmic i panell de detall seleccionat.

------------------------------------------------------

## 2. Requisits del Sistema

Abans de començar, assegura't de tenir instal·lades les següents eines al teu entorn local:

* **Node.js**: `v24.15.0` o superior (LTS)
* **NPM**: `v10.x` o superior
* **Angular CLI**: `v19.x` o superior (`npm install -g @angular/cli`)
* **Git** per al control de versions

**Taula d'aplicatius**

| Eina | Versió | Comprovar | Descripció |
| :--- | :---: | ---: | ---: |
| Node.js | 24.21.0 | node --version | Motor JavaScript |
| npm | 11.19.0 | npm --version | Gestor paquets |
| Angular CLI | 22.2.0 | ng version | Eina línia d'ordres |
| VS Code | 1.139.1 | code --version | Editor codi |
| Git | 2.55.0 | git --version | Control versions |
| Navegador | Chrome compatible Angular 22 | Obrir navegador | DevTools |

**URL Oficials Per Descarregar**

- [Node.js](https://nodejs.org)

- [Angular CLI](https://angular.dev/cli)

- [VS Code](https://code.visualstudio.com)

- [Git](https://git-scm.com)

**Extensions VS Code recomanades**

- **Angular Language Service**: *Autocompletat plantilles*

- **ESLint**: *Detecció errors qualitat*

- **Prettier**: *Format automàtic*

- **GitLens**: *Visualització Git*

- **Path Intellisense**: *Autocompletat rutes*

------------------------------------------------------

## 3. Scripts Disponibles

| Comanda | Descripció |
| :--- | ---: |
| `npm start` / `ng serve` | Executa el servidor local de desenvolupament. |
| `ng build` | Compila l'aplicació i genera els arxius de producció a /dist. |
| `ng test` | Executa les proves unitàries (unit tests). |
| `ng lint` | Analitza el codi a la cerca d'errors d'estil i sintaxi. |


| Carpetes principals | Descripció |
| :--- | ---: |
| `src/app/` | Components i codi de l'aplicació |
| `public/` | Recursos estàtics (imatges, fonts, favicon.ico); en versions antigues d'Angular aquesta carpeta era `src/assets/` |
| `node_modules/` | Dependències npm (NO pujar a Git) |


Fitxers clau:
| Comanda | Descripció |
| :--- | ---: |
| `angular.json` | Configuració Angular CLI (aquí queda registrat que els components es generen amb estil SCSS i noms `*.component.*`) |
| `package.json` | Dependències i scripts `npm` |
| `tsconfig.json` | Configuració TypeScript |
| `.gitignore` | Fitxers exclosos de Git (ja inclou `/node_modules`, `/dist` i `/.angular/cache`) |
| `src/app/app.component.ts` | Component arrel. Amb Angular 22 la classe generada es diu App, tot i que el fitxer conserva el nom `app.component.ts` |
| `src/app/app.config.ts` | Configuració global de l'aplicació (proveïdors, entre ells provideRouter(routes)) |
| `src/app/app.routes.ts` | Mapa de rutes, de moment buit |
| `src/main.ts` | Punt d'entrada: bootstrapApplication(App, appConfig) |


- Verificarem el contingut dels de diferents fitxers.

Obriu `src/app/app.component.ts` i observeu el contingut generat:

```bash
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ioc-angular-prova-git-hector');
}
```

Obriu `C:\ZPublico\Repositorios_GitHub\prova-git\ioc-angular-prova-git-hector\package.json`.

```bash
{
  "name": "ioc-angular-prova-git-hector",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "packageManager": "npm@11.12.1",
  "dependencies": {
    "@angular/common": "^22.1.0",
    "@angular/compiler": "^22.1.0",
    "@angular/core": "^22.1.0",
    "@angular/forms": "^22.1.0",
    "@angular/platform-browser": "^22.1.0",
    "@angular/router": "^22.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^22.1.7",
    "@angular/cli": "^22.1.7",
    "@angular/compiler-cli": "^22.1.0",
    "jsdom": "^28.0.0",
    "prettier": "^3.8.1",
    "typescript": "~6.0.2",
    "vitest": "^4.0.8"
  }
}
```

------------------------------------------------------

## 4. Guia d'Instal·lació

Una vegada feta en el [2. Requisits del Sistema](#2-requisits-del-sistema), podrem verificar versions d'eines amb les següents comandes o el executable que deixo en el repositori.

```bash
# Windows PowerShell
node --version
npm --version
ng version
git --version
code --version
```

Un altre pas que s'ha de fer és revisar les característiques del sistema operatiu com l'espai disponible que és es té per treballar, per poder realitzar deixo les següents comandes o l'executable que deixo en el repositori.

```bash
# Informació Completa del Sistema Operatiu
systeminfo | findstr /I /C:"OS" /C:"Sistema"

# Nom del Sistema Operatiu
systeminfo | findstr /B /C:"Nombre del sistema operativo" /C:"Versión del sistema operativo"

# Sistema Operatiu i Versió
powershell -Command "Get-CimInstance Win32_OperatingSystem | Select-Object Caption, Version"

# Verificar espai disponible
powershell -Command "Get-PSDrive C | Select-Object Used, Free"

# erificar espai disponible amb GB
powershell -Command "Get-PSDrive C | Select-Object @{Name='Used (GB)'; Expression={[math]::Round($_.Used / 1GB, 2)}}, @{Name='Free (GB)'; Expression={[math]::Round($_.Free / 1GB, 2)}}"
```

- **Checklist de requisits del sistema**

**Maquinari**
- [ ] CPU: _____ nuclis, _____ GHz (mínim 2)
- [ ] RAM: _____ GB (mínim 4, recomanat 8-16)
- [ ] Espai lliure: _____ GB (mínim 10)
- [ ] Disc: HDD / SSD

**Sistema operatiu**
- [ ] SO: Windows ___ / macOS ___ / Linux _____
- [ ] Terminal: PowerShell / zsh / bash
- [ ] Permisos: Administrador / sudo

**Eines actuals (si n'hi ha)**
- [ ] Node.js: _____ (`node --version`; mòdul: 24.15.0+ dins 24.x)
- [ ] npm: _____ (`npm --version`; inclòs amb Node.js 24)
- [ ] Angular CLI: _____ (`ng version`; mòdul: 22.x)
- [ ] VS Code: _____ (`code --version`)
- [ ] Git: _____ (`git --version`)

**Accés a Internet**
- [ ] Connexió estable
- [ ] Proxy (si escau): _____

*Observacions / Notes sobre el meu sistema / Dubtes per resoldre*

- **Configuració Git i GitHub**

```bash
# Configuració global
git config --global user.name "hejimenezcr"
git config --global user.email "h_jimenezcruz@hotmail.com"

# Verificar configuració
git config --global --list
```

- **Crear repositori remot de Gestor d'usuaris**

Dins de l'aplicatiu web GitHub i enregistrat anirem a crear un nou repositori:
1. Cliqueu **New repository** (*botó verd dalt a la dreta*)
2. **Repository name**: *ioc-angular-gestor-usuario-hector-jimenez*
3. **Description**: "*Aquest repositori conté un sistema de gestió d'usuaris dissenyat per administrar el registre, l'autenticació i el control de rols de manera eficient.*"
4. Deixeu **Public** seleccionat
5. **NO marqueu** "*Add a README file*" (ja el teniu)
6. Cliqueu **Create repository**

- **Comades de GitHub per el repositori remot**

Una vegada creat el repositori, la plataforma ens proporcionarà un conjunt de comandes per a la seva gestió. Aquestes ens permetran pujar o baixar canvis, seleccionar la branca de treball i realitzar els commits corresponents.

```bash
echo "# ioc-angular-gestor-usuario-hector-jimenez" >> README.md 
git init 
git add README.md 
git commit -m "first commit" 
git branch -M main 
git remote add origin https://github.com/hejimenezcr/ioc-angular-gestor-usuario-hector-jimenez.git
git push -u origin main
```

- **Per clonar el repositori i executar el projecte**

```bash
git clone https://github.com/hejimenezcr/ioc-angular-gestor-usuario-hector-jimenez.git
```

Un cop arribats a aquest punt, ja podem crear el projecte Angular. Per fer-ho, ens desplaçarem a la carpeta on tenim allotjat el repositori per tal d'executar-hi les comandes necessàries.

```bash
cd C:\ZPublico\Repositorios_GitHub\ioc-angular-gestor-usuario-hector-jimenez
```

### 4.1. Branch ra1-setup

Crea projecte Angular complet

```bash
ng new ioc-angular-gestor-usuario-hector-jimenez --routing --style=scss --ssr=false --standalone=true --file-name-style-guide=2016 --skip-git=true --package-manager=npm
```

Ens crearà diferents fitxes que entre ells:

```bash
CREATE ioc-angular-gestor-usuario-hector-jimenez/README.md
CREATE ioc-angular-gestor-usuario-hector-jimenez/angular.json
CREATE ioc-angular-gestor-usuario-hector-jimenez/package.json
CREATE ioc-angular-gestor-usuario-hector-jimenez/tsconfig.json
```

En instal·lar el mòdul NPM el repositori Git no pujarà el seu contingut, en el cas que vulguem que sí que pugi s'ha de crear un fitxer i modificar el seu contingut, pera que ho faci bé sense deixar-se res.

```bash
# Nom del fitxer
.gitignore
```

Entrarem dins del projecte d'Angular.

```bash
cd C:\ZPublico\Repositorios_GitHub\ioc-angular-gestor-usuario-hector-jimenez
```

Instal·larem les dependències NPM.

```bash
npm install
```

Inicia el servidor de desenvolupament:
```bash
ng serve --open
```

L'aplicació s'obrirà automàticament a `http://localhost:4200` amb suport de recàrrega en directe (Hot Reload).

Quan executam la comanda, ens demana si volem utilitzar el navegador que tenim predefinit. Si li diem que sí, s'obrirà el navegador de forma automàtica. Tot canvi que realitzem als fitxers de configuració es reflectirà de forma automàtica.

Quan vulguem tancar el servei, haurem d'anar al terminal, prémer `Ctrl + C` i es tancarà."

Continuarem configurant i preparant l'estructura del projecte, ara crearem carpetes preparatòries.

```bash
# Ubicacó del projecte
cd C:\ZPublico\Repositorios_GitHub\ioc-angular-gestor-usuario-hector-jimenez\ioc-angular-gestor-usuario-hector-jimenez


# Windows PowerShell
Set-Location src\app
New-Item -ItemType Directory -Name components
New-Item -ItemType Directory -Name services
New-Item -ItemType Directory -Name models
New-Item -ItemType Directory -Name pages
Set-Location ..\..

# Linux/macOS/Git Bash
cd src/app
mkdir components services models pages
cd ../..
```

Git no versiona carpetes buides. Perquè les quatre carpetes quedin registrades al repositori, afegiu-hi un fitxer .gitkeep:

```bash
# Windows PowerShell (des de l'arrel del projecte)
New-Item src\app\components\.gitkeep
New-Item src\app\services\.gitkeep
New-Item src\app\models\.gitkeep
New-Item src\app\pages\.gitkeep

# Linux/macOS/Git Bash (des de l'arrel del projecte)
touch src/app/components/.gitkeep
touch src/app/services/.gitkeep
touch src/app/models/.gitkeep
touch src/app/pages/.gitkeep
```

Un únic commit a main amb el missatge indicat. Comproveu amb `git show --stat` HEAD que hi apareixen els quatre fitxers .gitkeep.

```bash
git log --oneline --decorate --all --graph
```

Crear les branques del mòdul

```bash
git branch ra1-setup
git branch ra2-components
git branch ra3-serveis
git branch ra4-navegacio
git branch
```

Pujares les branques creades localment al remot.

```bash
git push -u origin main
git push -u origin ra1-setup
git push -u origin ra2-components
git push -u origin ra3-serveis
git push -u origin ra4-navegacio

```

Ho podrem verificar de la següent manera.

```bash
git branch -a
git log --oneline --decorate --all --graph
```

Ens situarem en la branca ra1-setup

```bash
git switch ra1-setup
git status
git branch --show-current   # ha de respondre: ra1-setup
```

Una vegada dintre iniciarem el servei de l'Angular desde branch ra1-setup.

```bash
ng serve --open
```

Sen aturar el servidor. Obrim `src/app/app.component.ts` i afegim una propietat pública amb el nom de la vostra aplicació (el que heu triat com a [nom-app]; a l'exemple, un catàleg). De moment conserveu la propietat title generam, perquè la plantilla actual encara la fa servir:

```bash
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('ioc-angular-gestor-usuario-hector-jimenez');
  public nomAplicacio = 'Catàleg d\'Elements';   // substituïu-ho pel nom de la vostra aplicació
}

```

Obrim `src/app/app.component.html`, esborrem tot el contingut generat i substituïu-lo per una pàgina inicial pròpia amb un títol, un paràgraf de presentació, una targeta de dades i un aside. Cal conservar el `<router-outlet />` perquè el projecte té routing activat:

```html
<main class="app-shell">
  <section class="intro">
    <h1>{{ Gestior Usuaris }}</h1>
    <p>Aplicació creada per Hector Jimenez Cruz per al mòdul DA2_OA01.</p>
  </section>

  <section class="project-card">
    <h2>Dades del projecte</h2>
    <p>Estat: Projecte base llest</p>
    <p>Framework: Angular 22</p>
  </section>

  <aside class="note">
    <p>Nota: aquest projecte s'ampliarà durant el mòdul.</p>
  </aside>
</main>

<router-outlet />
```

Obriu `src/app/app.component.scss`, esborrem tot el contingut generat i substituïu-lo

```bash
.app-shell {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 48rem;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #1976d2;
}

.project-card {
  padding: 1rem;
  border: 1px solid #b7c7d9;
  border-radius: 0.5rem;
}

.note {
  padding: 1rem;
  background: #eef5ff;
  border-left: 4px solid #1976d2;
}
```
Una vegada acabat les modificacions executarem les següents comandes en la branca que pertoca.

```bash
git add .
git commit -m "cometario"

# En la branca que estem
git push -u origin ra1-setup

git log --oneline --decorate --all --graph

```

### 4.2. Branch ra2-components

Crearem el model per poder finirem la interficie del aplicartiu

```bash
# Crear model de dades
# es Creat src/app/models/usuari.model.ts
ng generate interface models/usuari --type=model
```

Estructura del Fitxer

```bash
// Define los roles o categorias posibles para un usuario
export type RolUsuari = 'Administrador' | 'Desenvolupador' | 'Dissenyador' | 'Gestor' | 'Analista' | 'Tots';

// Interfaz principal que representa la estructura de un usuario en el sistema
export interface Usuari {
  id: number;                          // Identificador unico
  nom: string;                         // Nombre completo del usuario
  email: string;                       // Correo electronico
  rol: RolUsuari;                      // Rol / Categoria dentro del sistema
  dataAlta: string;                    // Fecha de alta ISO 8601 para aplicar Pipes de fecha
  puntuacio: number;                   // Campo numerico relevante (puntuacion/nivel)
  destacat?: boolean;                  // Campo booleano opcional para usuarios destacados
  actiu?: boolean;                     // Estado de la cuenta
  descripcio?: string;                 // Biografia o descripcion breve
}

export type EstatLlista = 'carregant' | 'buit' | 'error' | 'disponible';
```

Crearem la base de dades al directori `mocks`i tindre un llista predifinida

```bash
# src/app/mocks/dades-usuaris.mock.ts
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
```

* Crearem els diferents components per poder gestionar l'aplicatiu

Crearem el component Estiqueta Rol

```bash
# Crear component d'etiqueta rol
ng generate component components/etiqueta-rol --add-type-to-class-name
```

Editarem els diferentes fitjer por el component.

```bash
# Editar el fichero src/app/components/etiqueta-rol/etiqueta-rol.component.ts
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
```

```html
# Editar el fichero src/app/components/etiqueta-rol/etiqueta-rol.component.html
<span class="etiqueta-rol" [class.destacat]="destacat">
    {{ rol }}
    @if (destacat) {
        ★ <span class="visually-hidden">(Usuari destacat)</span>
    }
</span>
```

```bash
# Editar el fichero src/app/components/etiqueta-rol/etiqueta-rol.component.scss
.etiqueta-rol {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    background-color: #e0f2fe;
    color: #0369a1;
    font-size: 0.8rem;
    font-weight: 600;
}

.etiqueta-rol.destacat {
    background-color: #fef3c7;
    color: #b45309;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
}
```

Crearem el component Tarjeta Usuari


```bash
# Crear component tarjeta Usuari
ng generate component components/targeta-usuari --add-type-to-class-name
```

Editarem els diferentes fitjer por el component.

```bash
# Editar el fichero src/app/components/targeta-usuari/targeta-usuari.component.ts
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
```

```html
# Editar el fichero src/app/components/targeta-usuari/targeta-usuari.component.html
<article class="targeta-usuari" [class.seleccionat]="seleccionat">
  <header class="capcalera-targeta">
    <app-etiqueta-rol [rol]="usuari.rol" [destacat]="usuari.destacat ?? false" />
    <time [attr.datetime]="usuari.dataAlta">
      Alta: {{ usuari.dataAlta | date:'dd/MM/yyyy' }}
    </time>
  </header>

  <h3>{{ usuari.nom }}</h3>
  <p class="email">{{ usuari.email }}</p>
  <p class="puntuacio">Puntuació: <strong>{{ usuari.puntuacio }}/100</strong></p>

  <button type="button" (click)="notificaSeleccio()" [attr.aria-label]="'Veure el detall de ' + usuari.nom">
    Veure Detall
  </button>
</article>
```

```bash
# Editar el fichero src/app/components/targeta-usuari/targeta-usuari.component.scss
.targeta-usuari {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background-color: #ffffff;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &.seleccionat {
    border-color: #2563eb;
    background-color: #f0f9ff;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #1f2937;
  }

  .email {
    color: #6b7280;
    font-size: 0.9rem;
    margin: 0;
  }

  .puntuacio {
    font-size: 0.95rem;
    color: #374151;
    margin: 0;
  }

  button {
    align-self: flex-start;
    margin-top: auto;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    background-color: #2563eb;
    color: #ffffff;
    cursor: pointer;
    font-weight: 600;

    &:focus-visible {
      outline: 3px solid #f59e0b;
      outline-offset: 2px;
    }
  }
}

.capcalera-targeta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #6b7280;
}
```

Crearem el component Barra de Filtres de Usuaris

```bash
# Crear component barra-filtres-usuari
ng generate component components/barra-filtres-usuari --add-type-to-class-name
```

Editarem els diferentes fitjer por el component.

```bash
# Editar el fichero src/app/components/barra-filtres-usuari/barra-filtres-usuari.component.ts
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
```

```html
# Editar el fichero src/app/components/barra-filtres-usuari/barra-filtres-usuari.component.html
<!-- Formulari de filtros basado en FormsModule i [(ngModel)] -->
<form class="filtres-form" #formulariFiltres="ngForm" (ngSubmit)="aplicaFiltres()" aria-label="Filtres de cerca d'usuaris">
    <div class="camp">
        <label for="text-cerca">Cerca per nom o email</label>
        <input id="text-cerca" name="text" type="search" [(ngModel)]="filtres.text" #campText="ngModel" minlength="3" placeholder="Mínim 3 caràcters (opcional)" aria-describedby="text-ajuda text-error"/>
        
        <span id="text-ajuda" class="text-ajuda">
            Si escriviu un text, ha de tenir com a mínim 3 caràcters.
        </span>
        
        <!-- Messatje de error visible si la longitud no comple la regla -->
        @if (campText.invalid && (campText.dirty || campText.touched)) {
            <strong id="text-error" class="text-error" role="alert">
                La cerca ha de tenir 3 caràcters com a mínim.
            </strong>
        }
    </div>
    
    <div class="camp">
        <label for="select-rol">Filtrar per Rol</label>
        <select id="select-rol" name="rol" [(ngModel)]="filtres.rol">
            @for (r of llistaRols; track r) {
                <option [ngValue]="r">{{ r }}</option>
            }
        </select>
    </div>
    
    <div class="accions">
        <!-- Boto deshabilitadp si el formulario es invalido -->
        <button type="submit" [disabled]="formulariFiltres.invalid">
            Aplicar Filtres
        </button>
        
        <button type="button" class="btn-secundari" (click)="restableixFiltres()">
            Restablir
        </button>
    </div>
</form>
```

```bash
# Editar el fichero src/app/components/barra-filtres-usuari/barra-filtres-usuari.component.scss
.filtres-form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-end;
    padding: 1.25rem;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    margin-bottom: 1.5rem;
}

.camp {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    flex: 1;
    min-width: 220px;
    
    label {
        font-weight: 600;
        font-size: 0.9rem;
        color: #334155;
    }
    
    input, select {
        padding: 0.6rem;
        border: 2px solid #cbd5e1;
        border-radius: 6px;
        font-size: 0.95rem;
        
        &:focus-visible {
            outline: 3px solid #f59e0b;
            outline-offset: 2px;
        }
    }
}

.text-ajuda {
    font-size: 0.8rem;
    color: #64748b;
}

.text-error {
    font-size: 0.85rem;
    color: #dc2626;
    margin-top: 0.2rem;
}

.accions {
    display: flex;
    gap: 0.5rem;
    
    button {
        padding: 0.65rem 1.2rem;
        border: none;
        border-radius: 6px;
        background-color: #2563eb;
        color: white;
        font-weight: 600;
        cursor: pointer;
        
        &:disabled {
            background-color: #94a3b8;
            cursor: not-allowed;
        }
        
        &.btn-secundari {
            background-color: #e2e8f0;
            color: #1e293b;
        }
    }
}
```

Crearem el component Llista Usuaris

```bash
# Crear component llista-usuaris
ng generate component components/llista-usuaris --add-type-to-class-name
```

Editarem els diferentes fitjer por el component.


```bash
# Editar el fichero src/app/components/llista-usuaris/llista-usuaris.component.ts
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
```

```html
# Editar el fichero src/app/components/llista-usuaris/llista-usuaris.component.html
<!-- Grid de usuarios con control de flujo de Angular 22 -->
<section class="graella-usuaris" aria-label="Llistat d'usuaris enregistrats">
    @for (usuari of usuaris; track usuari.id) {
        <app-targeta-usuari
        [usuari]="usuari"
        [seleccionat]="usuari.id === usuariSeleccionatId"
        (selecciona)="propagaSeleccio($event)"/>
    } @empty {
        <p class="sense-resultats" role="status">No s'ha trobat cap usuari amb aquests criteris.</p>
    }
</section>
```

```bash
# Editar el fichero src/app/components/llista-usuaris/llista-usuaris.component.scss
.graella-usuaris {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.sense-resultats {
    grid-column: 1 / -1;
    padding: 3rem;
    text-align: center;
    color: #64748b;
    font-size: 1.1rem;
}
```

Crearem el component Detall Usuaris

```bash
# Crear component detall-usuari
ng generate component components/detall-usuari --add-type-to-class-name
```

Editarem els diferentes fitjer por el component.


```bash
# Editar el fichero src/app/components/detall-usuari/detall-usuari.component.ts
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
```

```html
# Editar el fichero src/app/components/detall-usuari/detall-usuari.component.html
<aside class="panell-detall" aria-live="polite" aria-label="Detall de l'usuari seleccionat">
  <h2>Panell de Detall</h2>

  @if (usuari) {
    <div class="contingut-detall">
      <header class="capcalera-detall">
        <h3>{{ usuari.nom }}</h3>
        <app-etiqueta-rol [rol]="usuari.rol" [destacat]="usuari.destacat ?? false" />
      </header>

      <ul class="llista-detalls">
        <li><strong>Email:</strong> {{ usuari.email }}</li>
        <li><strong>Rol:</strong> {{ usuari.rol }}</li>
        <li><strong>Data d'alta:</strong> {{ usuari.dataAlta | date:'dd/MM/yyyy' }}</li>
        <li><strong>Puntuació:</strong> {{ usuari.puntuacio }}/100</li>
        <li><strong>Estat del compte:</strong> {{ usuari.actiu ? 'Actiu' : 'Inactiu' }}</li>
      </ul>

      @if (usuari.descripcio) {
        <div class="descripcio-seccio">
          <strong>Biografia / Descripció:</strong>
          <p>{{ usuari.descripcio }}</p>
        </div>
      }

      <button type="button" class="boto-tancar" (click)="onTancar()">
        Tanca el detall
      </button>
    </div>
  } @else {
    <p class="missatge-indicacio">Seleccioneu un usuari de la llista per veure el seu detall complet.</p>
  }
</aside>
```

```bash
# Editar el fichero src/app/components/detall-usuari/detall-usuari.component.scss
.panell-detall {
  position: sticky;
  top: 1rem;
  align-self: start;
  padding: 1.25rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;

  h2 {
    margin-top: 0;
    color: #1e293b;
    font-size: 1.25rem;
  }
}

.capcalera-detall {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    margin: 0;
    color: #0f172a;
    font-size: 1.1rem;
  }
}

.llista-detalls {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;

  li {
    margin-bottom: 0.5rem;
    color: #334155;
    font-size: 0.95rem;
  }
}

.descripcio-seccio {
  margin-bottom: 1.25rem;
  color: #475569;
  font-size: 0.9rem;

  p {
    margin: 0.25rem 0 0 0;
  }
}

.boto-tancar {
  padding: 0.5rem 1rem;
  background-color: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b91c1c;
  }

  &:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 2px;
  }
}

.missatge-indicacio {
  color: #64748b;
  font-size: 0.95rem;
}
```

dsadasdds

Editarem el Fitxer principal per a aplicar les funcionalitats de l'aplicatiu `app.component.ts`.

```bash
# Editar el fichero src/app/app.component.ts
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
```

Estructura de componentes creats

Editarem el Fitxer principal per a aplicar les visualitzacions de l'aplicatiu `app.component.html`.

```html
# Editar el fichero src/app/app.component.html
<!-- Enllaç de salt directament al contingut principal per a accessibilitat -->
<a href="#contingut-principal" class="skip-link">Saltar al contingut principal</a>

<header class="capcalera-principal">
  <h1>Gestor d'Usuaris</h1>
  <p>Sistema de gestió de perfils, rols i permisos</p>
</header>

<main id="contingut-principal" class="layout-principal">
  <!-- Zona de Filtres de Cerca -->
  <section class="zona-filtres" aria-label="Filtres del catàleg d'usuaris">
    <app-barra-filtres-usuari (filtresCanviats)="actualitzaFiltres($event)" />
  </section>

  <!-- Control de Flux i Estats de la Interfície -->
  @if (estat() === 'carregant') {
    <section class="estat-carregant" aria-live="polite" aria-busy="true">
      <div class="spinner" aria-hidden="true"></div>
      <p>Carregant dades dels usuaris...</p>
    </section>
  } @else {
    <section class="resultats" aria-label="Resultats de la cerca">
      <h2>
        Llistat d'Usuaris
        <!-- Comptador dinàmic de resultats -->
        <span class="comptador" aria-live="polite">
          {{ usuarisFiltrats.length }} de {{ usuaris.length }}
        </span>
      </h2>

      @if (filtresActuals.text || filtresActuals.rol !== 'Tots') {
        <p class="info-filtres">
          Filtres actius:
          @if (filtresActuals.text) { text «{{ filtresActuals.text }}» }
          @if (filtresActuals.rol !== 'Tots') { rol «{{ filtresActuals.rol }}» }
        </p>
      }

      @if (usuarisFiltrats.length > 0) {
        <app-llista-usuaris
          [usuaris]="usuarisFiltrats"
          [usuariSeleccionatId]="usuariSeleccionat?.id"
          (selecciona)="seleccionaUsuari($event)"
        />
      } @else {
        <div class="missatge-buit" role="status">
          <p>No s'ha trobat cap usuari que coincideixi amb els filtres.</p>
        </div>
      }
    </section>
  }

  <!-- Panell de Detall de l'Usuari Seleccionat -->
  <aside class="panell-detall" aria-live="polite" aria-label="Detall de l'usuari seleccionat">
    <h2>Detall de l'Usuari</h2>

    @if (usuariSeleccionat) {
      <div class="contingut-detall">
        <h3>{{ usuariSeleccionat.nom }}</h3>
        <p><strong>Email:</strong> {{ usuariSeleccionat.email }}</p>
        <p><strong>Rol:</strong> {{ usuariSeleccionat.rol }}</p>
        <p><strong>Data d'alta:</strong> {{ usuariSeleccionat.dataAlta | date:'dd/MM/yyyy' }}</p>
        <p><strong>Puntuació:</strong> {{ usuariSeleccionat.puntuacio }}/100</p>
        <p><strong>Estat:</strong> {{ usuariSeleccionat.actiu ? 'Actiu' : 'Inactiu' }}</p>
        <p><strong>Biografia:</strong> {{ usuariSeleccionat.descripcio }}</p>
        <button type="button" (click)="tancaDetall()">Tanca el detall</button>
      </div>
    } @else {
      <p>Seleccioneu un usuari de la llista per veure el seu detall complet.</p>
    }
  </aside>
</main>

<router-outlet />
```

Editarem el Fitxer principal per a aplicar els estils de l'aplicatiu `app.component.scss`.

```bash
# Editar el fichero src/app/app.component.scss
.app-shell {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 48rem;
  margin: 2rem auto;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #1976d2;
}

.project-card {
  padding: 1rem;
  border: 1px solid #b7c7d9;
  border-radius: 0.5rem;
}

.note {
  padding: 1rem;
  background: #eef5ff;
  border-left: 4px solid #1976d2;
}


/* Skip Link de accessibilidad */
.skip-link {
  position: absolute;
  top: -40px;
  left: 10px;
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  z-index: 100;
  text-decoration: none;
  border-radius: 4px;
  &:focus {
    top: 10px;
  }
}

.capcalera-principal {
  text-align: center;
  padding: 2rem 1rem 1rem;
  h1 { color: #1e293b; margin: 0 0 0.5rem; }
  p { color: #64748b; margin: 0; }
}

/* Layout dividido en columna principal y panel de detalle (CSS Grid) */
.layout-principal {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
}

.zona-filtres {
  grid-column: 1 / -1;
}

.panell-detall {
  position: sticky;
  top: 1rem;
  align-self: start;
  padding: 1.25rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: #ef4444;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}

.comptador {
  margin-left: 0.5rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 0.9rem;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 2rem auto;
  border: 4px solid #cbd5e1;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: gir 0.8s linear infinite;
}

@keyframes gir {
  to { transform: rotate(360deg); }
}

/* Layout Responsive para pantallas pequenas */
@media (max-width: 850px) {
  .layout-principal {
    grid-template-columns: 1fr;
  }
  .panell-detall {
    position: static;
  }
}
```

Iniciarem el servei per poder visualitzar el funcionament de l'aplicatiu.

```bash
ng serve --open
```

Pujar-lo a GIT les actualitzacions fetes al repositori


```bash
#iniciar el GIT
git init

# cambiar a branca ra2-components
git switch ra2-components
git status
```

Pujares les branques creades localment al remot.

```bash
git add .
git commit -m "Pujar les noves funcions de l'aplicatiu"
git push -u origin ra2-components
git push -u origin ra3-serveis
git push -u origin ra4-navegacio
# entoria tendira que ir en la resta de  ramas ya que es una continuacion
```

Ho podrem verificar de la següent manera.

```bash
git branch -a
git log --oneline --decorate --max-count=5
```

### 4.3. Branch ra3-serveis

**AQUI**


Iniciarem el servei per poder visualitzar el funcionament de l'aplicatiu.

```bash
ng serve --open
```

Pujar-lo a GIT les actualitzacions fetes al repositori


```bash
#iniciar el GIT
git init

# cambiar a branca ra3-serveis
git switch ra3-serveis
git status
```

Pujares les branques creades localment al remot.

```bash
git add .
git commit -m "Pujar les noves funcions de l'aplicatiu"
git push -u origin ra3-serveis
git push -u origin ra4-navegacio
# entoria tendira que ir en la resta de  ramas ya que es una continuacion
```

Ho podrem verificar de la següent manera.

```bash
git branch -a
git log --oneline --decorate --max-count=5
```

------------------------------------------------------

## 5. Estructura del Projecte

Actualizar estructura segons evolucioni el projecte

```text
ioc-angular-gestor-usuario-hector-jimenez/
├── .github/              # Workflow i accions de CI/CD
├── public/                (recursos estàtics)
├── src/                  # Codi font de l'aplicació
│   ├── app/              # Components, serveis i mòduls
│   │   ├── components/
│   │   │       ├── barra-filtres-usuari/
│   │   │       │     ├── barra-filtres-usuari.component.ts
│   │   │       │     ├── barra-filtres-usuari.component.html
│   │   │       │     └── barra-filtres-usuari.component.scss
│   │   │       ├── detall-usuari/
│   │   │       │     ├── detall-usuari.component.ts
│   │   │       │     ├── detall-usuari.component.html
│   │   │       │     └── detall-usuari.component.scss
│   │   │       ├── etiqueta-rol/
│   │   │       │     ├── etiqueta-rol.component.ts
│   │   │       │     ├── etiqueta-rol.component.html
│   │   │       │     └── etiqueta-rol.component.scss
│   │   │       ├── llista-usuaris/
│   │   │       │     ├── llista-usuaris.component.ts
│   │   │       │     ├── llista-usuaris.component.html
│   │   │       │     └── llista-usuaris.component.scss
│   │   │       └── targeta-usuari/
│   │   │             ├── targeta-usuari.component.ts
│   │   │             ├── targeta-usuari.component.html
│   │   │             └── targeta-usuari.component.scss
│   │   ├── moks/
│   │   │   └── dades-usuaris.mock    # Recull de dades
│   │   ├── services/      (preparatori, amb .gitkeep)
│   │   ├── models/
│   │   │   └── usuaris.model.ts    # Interficies de l'usuari
│   │   ├── pages/         (preparatori, amb .gitkeep)
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── index.html        # Fitxer HTML principal
│   ├── main.ts
│   └── styles.scss       # Estils globals
├── angular.json          # Configuració de l'Angular CLI
├── package.json          # Manifest de dependències i scripts
├── tsconfig.json         # Configuració base de TypeScript
├── README.md
└── .gitignore            # Fitxers exclosos de Git (node_modules, dist)
```

------------------------------------------------------

## 6. Tecnologies Utilitzades

- **Frontend**: *Angular, TypeScript, HTML5, CSS3 / SCSS*

- **Entorn i Gestor de Paquets**: *Node.js, NPM*

- **IDE & Control de Versions**: *Visual Studio Code, Git, GitHub*

------------------------------------------------------

## 7. Autors i Llicència

Desenvolupat per **Hector Jimenez Cruz**.

(En el cas d'haver de comentar.)
Projecte creat sota la llicència MIT - consulta el fitxer LICENSE per a més detalls.

------------------------------------------------------

