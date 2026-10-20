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