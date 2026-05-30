/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Profile {
  id: string;
  nombre: string;
  nivel_actual: 'Básico' | 'Intermedio' | 'Avanzado';
}

export interface Leccion {
  id: string;
  modulo_id: string;
  orden: number;
  nivel: 'Nivel 1: Funcional' | 'Nivel 2: Administrativo' | 'Nivel 3: Resolución de Problemas';
  programa: 'Word' | 'Excel' | 'PowerPoint' | 'Outlook';
  titulo: string;
  descripcion_teorica: string;
  explicacion_alternativa: string;
  pasos_a_seguir: string[];
  pasos_alternativos: string[];
  tips_de_accesibilidad: string;
  checklist_validacion: string[];
  sugerencias_descubrimiento?: string[];
  concepto_clave?: string;
  ejercicio_practico?: string;
  elementos_visuales?: {
    icono: string;
    etiqueta: string;
    descripcion?: string;
  }[];
}

export interface Progreso {
  user_id: string;
  leccion_id: string;
  completado: boolean;
  reintentado: boolean;
}

export interface Modulo {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}
