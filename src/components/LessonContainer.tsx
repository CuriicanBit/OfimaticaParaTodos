/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Leccion, Progreso } from '../types';
import { 
  Volume2, 
  VolumeX, 
  HelpCircle, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Info,
  CheckSquare,
  Square,
  Play,
  Pause,
  Volume1,
  Compass
} from 'lucide-react';

// Componente auxiliar para enriquecer textos con botones e iconos simulados de Office
function TextoEnriquecido({ 
  texto, 
  moduloId = 'word', 
  isDarkMode 
}: { 
  texto: string; 
  moduloId?: string; 
  isDarkMode: boolean 
}) {
  if (!texto) return null;

  // Regex para encontrar términos clave de manuales de Office
  const regex = /(Control \+ [NSEG]|Shift \+ \d|Barra Espaciadora|Enter|Intro|Retroceso|Shift|Mayús|Control|Alt|Disposición|Formato|Diseño de página|Tamaño|Márgenes|Inicio|Negrita|Subrayado|Cursiva|Todos los bordes|Zoom|Estrecho|Ancho|Oficio I*|Carta|A\d|B\d|C\d|D\d+|=SUMA\([A-Z0-9:]+\)|=[A-Z0-9+]+)/gi;

  const partes = texto.split(regex);

  return (
    <span>
      {partes.map((parte, i) => {
        if (!parte) return null;
        const parteLower = parte.toLowerCase();

        // 1. Identificar si es tecla de teclado (KBD keycap)
        const esTecla = [
          'enter', 'intro', 'retroceso', 'shift', 'mayús', 'control', 'alt', 'barra espaciadora',
          'control + n', 'control + s', 'control + e'
        ].includes(parteLower) || parteLower.startsWith('shift +');

        // 2. Identificar si es botón o herramienta de pestaña de Office
        const esHerramienta = [
          'disposición', 'formato', 'diseño de página', 'tamaño', 'márgenes', 'inicio', 
          'negrita', 'subrayado', 'cursiva', 'todos los bordes', 'zoom', 'estrecho', 'ancho', 'oficio', 'oficio ii', 'carta'
        ].includes(parteLower);

        // 3. Identificar si es celda o fórmula de Excel
        const esCeldaOFormula = /^[a-d]\d+$/i.test(parteLower) || parteLower.startsWith('=');

        if (esTecla) {
          return (
            <kbd 
              key={i} 
              className={`mx-1 px-2 py-1 text-xs font-mono font-black rounded-lg border-b-[3px] shadow-[1px_2px_0px_rgba(0,0,0,0.15)] inline-flex items-center gap-1 inline-block align-middle select-all ${
                isDarkMode 
                  ? 'bg-zinc-800 text-yellow-300 border-zinc-950 text-white' 
                  : 'bg-zinc-100 text-zinc-900 border-zinc-400'
              }`}
            >
              <kbd className="text-[10px] opacity-75">⌨️</kbd> {parte}
            </kbd>
          );
        }

        if (esHerramienta) {
          let badgeStyle = '';
          if (moduloId === 'word') {
            badgeStyle = isDarkMode 
              ? 'bg-blue-950 text-blue-200 border-blue-800 shadow-[0_1px_4px_rgba(0,0,0,0.5)]' 
              : 'bg-blue-50 text-blue-900 border-blue-400 hover:bg-blue-100';
          } else if (moduloId === 'excel') {
            badgeStyle = isDarkMode 
              ? 'bg-green-950 text-green-200 border-green-800 shadow-[0_1px_4px_rgba(0,0,0,0.5)]' 
              : 'bg-green-50 text-green-900 border-green-500 hover:bg-green-100';
          } else if (moduloId === 'powerpoint') {
            badgeStyle = isDarkMode 
              ? 'bg-orange-950 text-orange-200 border-orange-850 shadow-[0_1px_4px_rgba(0,0,0,0.5)]' 
              : 'bg-orange-50 text-orange-950 border-orange-400';
          } else {
            badgeStyle = isDarkMode 
              ? 'bg-slate-900 text-slate-100 border-zinc-700' 
              : 'bg-zinc-100 text-zinc-900 border-zinc-400';
          }

          let charIcon = '🎛️';
          if (parteLower === 'negrita') charIcon = ' 🔠 N';
          else if (parteLower === 'subrayado') charIcon = ' 📄 S';
          else if (parteLower === 'cursiva') charIcon = ' 📐 K';
          else if (parteLower === 'zoom') charIcon = ' 🔍 Zoom';
          else if (parteLower === 'todos los bordes') charIcon = ' 🔳 Bordes';

          return (
            <span 
              key={i} 
              className={`mx-1 px-2.5 py-1 text-xs border-2 font-sans font-black rounded-xl inline-flex items-center gap-1.5 inline-block align-middle shadow-sm uppercase ${badgeStyle}`}
            >
              <span>{charIcon === '🎛️' ? '🖱️' : null}</span>
              <span>{charIcon === '🎛️' ? parte : charIcon}</span>
            </span>
          );
        }

        if (esCeldaOFormula) {
          const esFormula = parte.startsWith('=');
          return (
            <code 
              key={i} 
              className={`mx-1 px-2 py-0.5 border border-dashed rounded font-mono font-bold text-xs inline-block align-middle ${
                esFormula 
                  ? (isDarkMode ? 'bg-amber-950/40 text-amber-300 border-amber-600' : 'bg-amber-100 text-amber-900 border-amber-400')
                  : (isDarkMode ? 'bg-zinc-800 text-green-300 border-zinc-700' : 'bg-zinc-100 text-green-900 border-zinc-400')
              }`}
            >
              {esFormula ? `🧮 ${parte}` : `🎯 ${parte}`}
            </code>
          );
        }

        return <span key={i}>{parte}</span>;
      })}
    </span>
  );
}

interface LessonContainerProps {
  leccion: Leccion;
  onCompletada: (leccionId: string) => void;
  onSiguiente: () => void;
  onAnterior: () => void;
  progresoPrevio?: Progreso;
  fontSizeClass: string; // Recibe la clase de tipografía ajustada
  isDarkMode?: boolean; // Recibe si se encuentra activo el modo oscuro o false por defecto
}

export default function LessonContainer({
  leccion,
  onCompletada,
  onSiguiente,
  onAnterior,
  progresoPrevio,
  fontSizeClass,
  isDarkMode = false,
}: LessonContainerProps) {
  // Estado para alternar explicación más fácil de peras y manzanas
  const [esSimplificado, setEsSimplificado] = useState(false);
  
  // Estado para verificar si ha marcado que ya completó la tarea en su PC real
  const [completadoPC, setCompletadoPC] = useState(false);

  // Checklist de validación interactiva
  const [checklistEstado, setChecklistEstado] = useState<boolean[]>([]);

  // Estados de control de audio (lectora en voz alta con pausabilidad y puntos específicos)
  const [speechState, setSpeechState] = useState<'stopped' | 'playing' | 'paused'>('stopped');
  const [etiquetaVoz, setEtiquetaVoz] = useState<string>(''); // Segmento que se lee (ej: "Lección Completa", "Teoría")
  const [textoVozActual, setTextoVozActual] = useState<string>('');
  const [velocidadVoz, setVelocidadVoz] = useState<number>(0.82); // Velocidad predeterminada (pausada y clara)

  // --- CARGA SENSATA DE VOCES PARA EL ASISTENTE ---
  const [voces, setVoces] = useState<SpeechSynthesisVoice[]>([]);
  const [vozSeleccionadaURI, setVozSeleccionadaURI] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('voz_narratriz_preferida') || '';
    }
    return '';
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const actualizarVoces = () => {
      const todasLasVoces = window.speechSynthesis.getVoices();
      // Filtrar preferentemente voces en español ("es") de cualquier región
      const vocesEspanyol = todasLasVoces.filter(v => v.lang.toLowerCase().startsWith('es'));
      setVoces(vocesEspanyol.length > 0 ? vocesEspanyol : todasLasVoces);
    };

    actualizarVoces();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = actualizarVoces;
    }
  }, []);

  const aplicarVozAUtterance = (ut: SpeechSynthesisUtterance) => {
    if (typeof window !== 'undefined' && window.speechSynthesis && vozSeleccionadaURI) {
      const list = window.speechSynthesis.getVoices();
      const match = list.find(v => v.voiceURI === vozSeleccionadaURI);
      if (match) {
        ut.voice = match;
      }
    }
  };

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Modo de visualización sugerido (Pantalla Dividida vs Celular)
  const [modoAyuda, setModoAyuda] = useState<'computadora' | 'celular'>('computadora');

  // Inicializar estados al cambiar de materia o lección
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
    }
    setEsSimplificado(false);

    // Inicializar checklist de validación segun la lección
    const numItems = leccion.checklist_validacion ? leccion.checklist_validacion.length : 0;
    const initialChecklist = new Array(numItems).fill(progresoPrevio?.completado || false);
    setChecklistEstado(initialChecklist);

    setCompletadoPC(progresoPrevio?.completado || false);
    detenerNarracion();

    // Desplazar mágicamente al inicio de la lección para comodidad de la alumna, no al tope absoluto del navegador
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        const elementoLeccion = document.getElementById(`leccion-container-${leccion.id}`);
        if (elementoLeccion) {
          elementoLeccion.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [leccion.id, progresoPrevio?.completado, leccion.checklist_validacion?.length]);

  const toggleChecklistItem = (idx: number) => {
    const nuevo = [...checklistEstado];
    nuevo[idx] = !nuevo[idx];
    setChecklistEstado(nuevo);

    // Lectura sonora de confirmación táctil para el estudiante
    if (synthRef.current) {
      synthRef.current.cancel();
      const frase = leccion.checklist_validacion[idx];
      const mensaje = nuevo[idx] 
        ? `Listo: ${frase}` 
        : `Desmarcado: ${frase}`;
      const ut = new SpeechSynthesisUtterance(mensaje);
      ut.lang = 'es-ES';
      ut.rate = 0.95;
      aplicarVozAUtterance(ut);
      synthRef.current.speak(ut);
    }

    // Si todos los puntos clave están marcados, marcar la lección completa e iniciar audio feliz
    const todosListos = nuevo.length > 0 && nuevo.every(v => v === true);
    if (todosListos) {
      setCompletadoPC(true);
      onCompletada(leccion.id);
      reproducirSonidoAlarmaPositiva();
      
      setTimeout(() => {
        if (synthRef.current) {
          synthRef.current.cancel();
          const ut = new SpeechSynthesisUtterance("¡Excelente! Has verificado todos los puntos clave del checklist de validación. La lección se ha marcado como completada con éxito. Ya puedes avanzar.");
          ut.lang = 'es-ES';
          ut.rate = 0.9;
          aplicarVozAUtterance(ut);
          synthRef.current.speak(ut);
        }
      }, 500);
    } else {
      setCompletadoPC(false);
    }
  };

  // Limpiar síntesis de voz al desmontar el componente
  useEffect(() => {
    return () => {
      detenerNarracion();
    };
  }, []);

  // --- NUEVO SISTEMA DE LECTURA SECUENCIAL Y AUTOSCROLL COORDENADO ---
  const [indiceSegmentoActual, setIndiceSegmentoActual] = useState<number | null>(null);
  const currentSegmentIndexRef = useRef<number | null>(null);
  const [mostrarFlotante, setMostrarFlotante] = useState(false);

  interface SegmentoLectura {
    id: string;
    texto: string;
    etiqueta: string;
  }

  // Genera la lista de segmentos lógicos ordenados para leer secuencialmente
  const obtenerSegmentos = (): SegmentoLectura[] => {
    const segmentos: SegmentoLectura[] = [];
    
    // 1. Título de la Lección
    segmentos.push({
      id: `leccion-cabecera-${leccion.id}`,
      texto: `Materia Práctica. Lección ${leccion.orden}. ${leccion.titulo}.`,
      etiqueta: `Lección ${leccion.orden}`
    });

    // 2. Explicación Teórica
    const teoriaTexto = esSimplificado ? leccion.explicacion_alternativa : leccion.descripcion_teorica;
    const teoriaEtiqueta = esSimplificado ? "Teoría Simplificada" : "Teoría Estándar";
    segmentos.push({
      id: `leccion-teoria-p-${leccion.id}`,
      texto: teoriaTexto,
      etiqueta: teoriaEtiqueta
    });

    // 3. Banner de Instrucción
    const moduloNombre = leccion.modulo_id === 'word' ? 'Word' : leccion.modulo_id === 'excel' ? 'Excel' : leccion.modulo_id === 'powerpoint' ? 'PowerPoint' : 'Outlook';
    segmentos.push({
      id: `leccion-banner-instruccion-${leccion.id}`,
      texto: `Abra ${moduloNombre} real e imite estos pasos:`,
      etiqueta: "Apertura"
    });

    // 4. Pasos a seguir
    const pasos = esSimplificado ? leccion.pasos_alternativos : leccion.pasos_a_seguir;
    pasos.forEach((paso, idx) => {
      segmentos.push({
        id: `leccion-paso-item-${leccion.id}-${idx}`,
        texto: `Paso número ${idx + 1}: ${paso}`,
        etiqueta: `Paso ${idx + 1}`
      });
    });

    // 5. Sugerencias descubrimiento
    if (leccion.sugerencias_descubrimiento && leccion.sugerencias_descubrimiento.length > 0) {
      segmentos.push({
        id: `zona-experimentacion-${leccion.id}`,
        texto: "¡Pruebe más opciones para aprender jugando en su computadora!",
        etiqueta: "Espacio de juego"
      });

      leccion.sugerencias_descubrimiento.forEach((sug, idx) => {
        segmentos.push({
          id: `leccion-sugerencia-item-${leccion.id}-${idx}`,
          texto: `Sugerencia de juego número ${idx + 1}: ${sug}`,
          etiqueta: `Juego ${idx + 1}`
        });
      });
    }

    // 6. Checklist de validación
    if (leccion.checklist_validacion && leccion.checklist_validacion.length > 0) {
      segmentos.push({
        id: `checklist-validacion-${leccion.id}`,
        texto: "¿Qué debió aparecer en su pantalla física? Revisemos la lista de comprobación de éxito:",
        etiqueta: "Comprobación"
      });

      leccion.checklist_validacion.forEach((chk, idx) => {
        segmentos.push({
          id: `leccion-checklist-item-${leccion.id}-${idx}`,
          texto: `Punto de comprobación número ${idx + 1}: ${chk}`,
          etiqueta: `Punto ${idx + 1}`
        });
      });
    }

    // 7. Consejo de accesibilidad
    segmentos.push({
      id: `leccion-consejo-seccion-${leccion.id}`,
      texto: `Consejo de accesibilidad útil: ${leccion.tips_de_accesibilidad}`,
      etiqueta: "Consejo Útil"
    });

    return segmentos;
  };

  // Reproductor del segmento e invocación del scroll coordinado
  const reproducirSegmentoSecuencial = (indice: number, deCorrido: boolean = true) => {
    if (!synthRef.current) return;

    // Asegurarse de cancelar cualquier voz activa
    synthRef.current.cancel();

    const listaSegmentos = obtenerSegmentos();
    if (indice < 0 || indice >= listaSegmentos.length) {
      detenerNarracion();
      return;
    }

    setSpeechState('playing');
    setIndiceSegmentoActual(indice);
    currentSegmentIndexRef.current = indice;

    const seg = listaSegmentos[indice];
    setEtiquetaVoz(seg.etiqueta);
    setTextoVozActual(seg.texto);

    // Auto-scroll coordinado y suave centrado en el elemento activo
    setTimeout(() => {
      const el = document.getElementById(seg.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 45);

    const ut = new SpeechSynthesisUtterance(seg.texto);
    ut.lang = 'es-ES';
    ut.rate = velocidadVoz;
    aplicarVozAUtterance(ut);

    ut.onend = () => {
      // Evitar que continúe si ya saltamos a otro segmento por click manual
      if (currentSegmentIndexRef.current !== indice) return;

      if (deCorrido && indice + 1 < listaSegmentos.length) {
        reproducirSegmentoSecuencial(indice + 1, true);
      } else {
        detenerNarracion();
      }
    };

    ut.onerror = (e) => {
      console.log("Speech error o cancelación:", e);
    };

    utteranceRef.current = ut;
    synthRef.current.speak(ut);
  };

  // Monitorear el scroll de la ventana para mostrar/ocultar el panel flotante
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setMostrarFlotante(true);
      } else {
        setMostrarFlotante(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Si cambia el tamaño de la letra y hay un segmento leyéndose, re-centrar el elemento
  useEffect(() => {
    if (indiceSegmentoActual !== null) {
      const lista = obtenerSegmentos();
      const seg = lista[indiceSegmentoActual];
      if (seg) {
        const timer = setTimeout(() => {
          const el = document.getElementById(seg.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [fontSizeClass]);

  // Auxiliares de consulta de estado del elemento activo
  const isSegmentoActivoPorId = (elemId: string) => {
    if (indiceSegmentoActual === null) return false;
    const lista = obtenerSegmentos();
    const seg = lista[indiceSegmentoActual];
    return seg ? seg.id === elemId : false;
  };

  const getHighlightClass = (elemId: string, baseClassDefault: string = "") => {
    const activo = isSegmentoActivoPorId(elemId);
    if (activo) {
      return `border-amber-400 bg-amber-50 shadow-md ring-4 ring-amber-400 ring-offset-2 scale-[1.015] duration-200 transition-all ${baseClassDefault}`;
    }
    return `transition-all duration-150 ${baseClassDefault}`;
  };

  // Función para reanudar o pausar el audio actual alternadamente
  const pausarReanudarVoz = () => {
    if (!synthRef.current) return;
    
    if (speechState === 'playing') {
      synthRef.current.pause();
      setSpeechState('paused');
    } else if (speechState === 'paused') {
      synthRef.current.resume();
      setSpeechState('playing');
    } else {
      // Si estaba detenido, reproducir la lección completa por default
      reproducirSegmentoSecuencial(0, true);
    }
  };

  const detenerNarracion = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setSpeechState('stopped');
    setIndiceSegmentoActual(null);
    currentSegmentIndexRef.current = null;
    setEtiquetaVoz('');
    setTextoVozActual('');
  };

  // Adaptadores de las lecturas por sección con el nuevo motor secuencial
  const narrarLeccionCompleta = () => {
    reproducirSegmentoSecuencial(0, true);
  };

  const narrarDesdeTeoriaAdelante = () => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `leccion-teoria-p-${leccion.id}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, true);
    }
  };

  const narrarDesdePasosAdelante = () => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `leccion-banner-instruccion-${leccion.id}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, true);
    }
  };

  const narrarDesdePasoEspecifico = (indicePaso: number) => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `leccion-paso-item-${leccion.id}-${indicePaso}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, true);
    }
  };

  const narrarSoloConsejo = () => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `leccion-consejo-seccion-${leccion.id}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, false);
    }
  };

  const narrarSoloChecklist = () => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `checklist-validacion-${leccion.id}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, true);
    }
  };

  const narrarSoloSugerencias = () => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `zona-experimentacion-${leccion.id}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, true);
    }
  };

  const narrarSugerenciaEspecifica = (indice: number) => {
    const idx = obtenerSegmentos().findIndex(s => s.id === `leccion-sugerencia-item-${leccion.id}-${indice}`);
    if (idx !== -1) {
      reproducirSegmentoSecuencial(idx, false);
    }
  };

  // Modificar velocidad dinamica de narración coordinadamente
  const cambiarVelocidadVoz = (nuevaVelocidad: number) => {
    setVelocidadVoz(nuevaVelocidad);
    
    // Si la lectura está activa o en pausa, reiniciar inmediatamente en el segmento actual con el nuevo rate
    if (speechState === 'playing' || speechState === 'paused' || indiceSegmentoActual !== null) {
      const activeIdx = indiceSegmentoActual !== null ? indiceSegmentoActual : 0;
      if (synthRef.current) {
        synthRef.current.cancel();
      }
      
      setTimeout(() => {
        reproducirSegmentoSecuencial(activeIdx, true);
      }, 150);
    } else {
      // Mensaje auditivo si el reproductor está detenido
      if (synthRef.current) {
        synthRef.current.cancel();
        let rapidezTexto = "Velocidad Normal";
        if (nuevaVelocidad === 0.65) rapidezTexto = "Velocidad muy pausada";
        if (nuevaVelocidad === 0.82) rapidezTexto = "Velocidad lenta recomendada";
        if (nuevaVelocidad === 1.0) rapidezTexto = "Velocidad rápida estándar";
        const ut = new SpeechSynthesisUtterance(`Velocidad cambiada a ${rapidezTexto}.`);
        ut.lang = 'es-ES';
        ut.rate = nuevaVelocidad;
        aplicarVozAUtterance(ut);
        synthRef.current.speak(ut);
      }
    }
  };

  // Switch dinámico para alternar explicación más amigable
  const alternarExplicacionFácil = () => {
    const nuevoSimplificado = !esSimplificado;
    setEsSimplificado(nuevoSimplificado);
    
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    
    setSpeechState('stopped');
    setIndiceSegmentoActual(null);
    currentSegmentIndexRef.current = null;
    setEtiquetaVoz('');
    setTextoVozActual('');
    
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        const mensaje = nuevoSimplificado 
          ? "Cambiando a explicación súper fácil con ejemplos alternativos." 
          : "Regresando a explicación conceptual normal.";
        const ut = new SpeechSynthesisUtterance(mensaje);
        ut.lang = 'es-ES';
        ut.rate = velocidadVoz;
        aplicarVozAUtterance(ut);
        
        ut.onend = () => {
          // Después de anunciar la alteración de teoría, reiniciar la lectura automática desde la nueva teoría
          const list = obtenerSegmentos();
          const tIdx = list.findIndex(s => s.id.startsWith("leccion-teoria-p-"));
          if (tIdx !== -1) {
            reproducirSegmentoSecuencial(tIdx, true);
          }
        };
        
        window.speechSynthesis.speak(ut);
      }
    }, 100);
  };

  // Guardar hito de que terminó el ejercicio físico en su computador
  const marcarEjercicioTerminado = () => {
    // Marcar todos los elementos del checklist del alumno como marcados
    const todosListos = new Array(checklistEstado.length).fill(true);
    setChecklistEstado(todosListos);

    setCompletadoPC(true);
    onCompletada(leccion.id);
    reproducirSonidoAlarmaPositiva();
    
    if (synthRef.current) {
      synthRef.current.cancel();
      const ut = new SpeechSynthesisUtterance("¡Excelente! Has verificado y marcado todo este ejercicio práctico como completado con éxito. Ahora ya puede oprimir el gran botón de avanzar a la siguiente lección.");
      ut.lang = 'es-ES';
      ut.rate = 0.9;
      aplicarVozAUtterance(ut);
      synthRef.current.speak(ut);
    }
  };

  // Generador de audio positivo mediante el oscilador nativo para retroalimentación instantánea
  const reproducirSonidoAlarmaPositiva = () => {
    try {
      if (typeof window !== 'undefined' && (window.AudioContext || (window as any).webkitAudioContext)) {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, ctx.currentTime); // La4 (A4)
        osc.frequency.setValueAtTime(554.37, ctx.currentTime + 0.1); // Do#5 (C#5)
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.2); // Mi5 (E5)
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.3); // La5 (A5)

        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      }
    } catch (_) {
      // ignore silently
    }
  };

  const pasosActuales = esSimplificado ? leccion.pasos_alternativos : leccion.pasos_a_seguir;

  return (
    <div 
      id={`leccion-container-${leccion.id}`}
      className={`border-2 sm:border-4 ${isDarkMode ? 'border-zinc-700 bg-zinc-900 text-white' : 'border-black bg-white text-black'} rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl font-sans`}
    >
      {/* --- BANNER INFORMATIVO SOBRE MODO DE USO (split-screen o móvil) --- */}
      <div className={`border-b-2 sm:border-b-4 ${isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-100 border-black text-black'} p-3.5 sm:p-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}>
        <div className="flex items-center gap-3">
          <Info className={`w-8 h-8 ${isDarkMode ? 'text-zinc-300' : 'text-black'} shrink-0`} />
          <span className={`text-base sm:text-lg font-black uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>
            ¿Cómo está usando esta guía hoy?
          </span>
        </div>
 
        <div className={`flex flex-col sm:flex-row w-full md:w-auto ${isDarkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-black'} border-2 rounded-lg overflow-hidden shrink-0`}>
          <button
            onClick={() => {
              setModoAyuda('computadora');
              if (synthRef.current) {
                synthRef.current.cancel();
                const ut = new SpeechSynthesisUtterance("Modo recomendado de pantalla dividida guardado.");
                ut.lang = 'es-ES';
                aplicarVozAUtterance(ut);
                synthRef.current.speak(ut);
              }
            }}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-center gap-2 font-bold text-sm sm:text-base cursor-pointer flex-1 sm:flex-initial ${
              modoAyuda === 'computadora' 
                ? (isDarkMode ? 'bg-yellow-400 text-zinc-950 font-black' : 'bg-black text-white') 
                : (isDarkMode ? 'bg-zinc-900 text-zinc-100 hover:bg-zinc-800' : 'bg-white text-black hover:bg-slate-100')
            }`}
            aria-label="Recomendación: Pantalla dividida compartida a un lado de su programa de oficina"
            aria-pressed={modoAyuda === 'computadora'}
          >
            <Monitor className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Colocar a un lado en mi PC</span>
          </button>
          
          <button
            onClick={() => {
              setModoAyuda('celular');
              if (synthRef.current) {
                synthRef.current.cancel();
                const ut = new SpeechSynthesisUtterance("Modo celular guardado. Leeré las pantallas de su celular mientras presiona teclas en su computadora.");
                ut.lang = 'es-ES';
                aplicarVozAUtterance(ut);
                synthRef.current.speak(ut);
              }
            }}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-center gap-2 font-bold text-sm sm:text-base cursor-pointer border-t-2 sm:border-t-0 sm:border-l-2 ${isDarkMode ? 'border-zinc-700' : 'border-black'} flex-1 sm:flex-initial ${
              modoAyuda === 'celular' 
                ? (isDarkMode ? 'bg-yellow-400 text-zinc-950 font-black' : 'bg-black text-white') 
                : (isDarkMode ? 'bg-zinc-900 text-zinc-100 hover:bg-zinc-800' : 'bg-white text-black hover:bg-slate-100')
            }`}
            aria-label="Modo acompañante: Viendo el instructivo en un celular o tablet al lado de su PC"
            aria-pressed={modoAyuda === 'celular'}
          >
            <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Ver en mi Celular</span>
          </button>
        </div>
      </div>
 
      {modoAyuda === 'computadora' && (
        <div className={`border-b-2 sm:border-b-4 ${isDarkMode ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-amber-100 text-black border-black'} px-4 py-3 sm:px-6 text-sm font-semibold text-center`}>
          💡 <strong>Tip para baja visión:</strong> Arrastre esta ventana hacia el borde izquierdo de su pantalla y su programa de Office hacia la derecha para trabajar de forma simultánea.
        </div>
      )}
 
      {/* --- CABECERA PRINCIPAL DE LA LECCIÓN --- */}
      <div 
        id={`leccion-cabecera-${leccion.id}`}
        className={getHighlightClass(`leccion-cabecera-${leccion.id}`, `border-b-2 sm:border-b-4 ${isDarkMode ? 'border-zinc-700 bg-zinc-900 text-white' : 'border-black bg-white text-black'} p-3.5 xs:p-5 sm:p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6`)}
      >
        <div>
          <span className={`inline-block ${isDarkMode ? 'bg-zinc-800 text-yellow-300' : 'bg-black text-white'} font-mono text-base sm:text-lg font-black uppercase px-4 py-1.5 rounded-md mb-2`}>
            Materia Práctica — Lección {leccion.orden}
          </span>
          <h2 className={`font-sans font-black text-2xl xs:text-3xl md:text-4xl ${isDarkMode ? 'text-white' : 'text-black'} leading-tight`}>
            {leccion.titulo}
          </h2>
        </div>

        {/* PANEL CONTROL DE AUDIO DE PEDAGOGÍA - CON PAUSAR, REANUDAR, DETENER Y AJUSTE DE VELOCIDAD */}
        <div className={`flex flex-col gap-3 w-full sm:min-w-[325px] min-w-0 flex-1 md:flex-initial p-3 sm:p-4 rounded-xl border-2 sm:border-3 max-w-md shadow-md ${
          isDarkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-50 border-black text-black'
        }`}>
          <div className={`flex items-center justify-between border-b-2 ${isDarkMode ? 'border-zinc-750' : 'border-zinc-200'} pb-2`}>
            <span className={`text-xs font-black uppercase ${isDarkMode ? 'text-zinc-300' : 'text-zinc-650'} flex items-center gap-1.5 font-sans`}>
              <span className={`w-2.5 h-2.5 rounded-full inline-block ${
                speechState === 'playing' ? 'bg-green-600 animate-ping' : speechState === 'paused' ? 'bg-amber-500 animate-pulse' : 'bg-zinc-400'
              }`} />
              Asistente de Voz: {speechState === 'playing' ? "Escuchando" : speechState === 'paused' ? "En Pausa" : "Apagado"}
            </span>
            {etiquetaVoz && (
              <span className={`text-xs font-bold ${isDarkMode ? 'bg-zinc-900 border-zinc-700 text-yellow-300 shadow-sm' : 'text-blue-900 bg-blue-100 border-blue-200'} px-2 py-0.5 rounded border truncate max-w-[140px] xs:max-w-[170px]`} title={etiquetaVoz}>
                {etiquetaVoz}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Botón Principal: Play/Pause */}
            <button
              id={`btn-audio-reproducir-pausa-${leccion.id}`}
              onClick={pausarReanudarVoz}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border-2 ${isDarkMode ? 'border-zinc-700' : 'border-black'} font-extrabold text-sm sm:text-base transition-transform active:scale-95 cursor-pointer ${
                speechState === 'playing' 
                  ? 'bg-amber-300 text-black hover:bg-amber-400 font-extrabold' 
                  : 'bg-green-400 text-black hover:bg-green-500 font-black shadow-xs'
              }`}
              aria-label={speechState === 'playing' ? "Pausar la voz del asistente" : "Reproducir o reanudar la voz del asistente"}
            >
              {speechState === 'playing' ? (
                <>
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  <span>{speechState === 'paused' ? "Continuar" : "Oír Todo"}</span>
                </>
              )}
            </button>

            {/* Botón Detener / Apagar */}
            <button
              id={`btn-audio-detener-${leccion.id}`}
              onClick={detenerNarracion}
              disabled={speechState === 'stopped'}
              className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border-2 ${isDarkMode ? 'border-zinc-700' : 'border-black'} font-extrabold text-sm sm:text-base transition-transform active:scale-95 ${
                speechState === 'stopped' 
                  ? (isDarkMode ? 'bg-zinc-900 border-zinc-800 cursor-not-allowed text-zinc-650' : 'bg-zinc-200 border-zinc-300 cursor-not-allowed text-zinc-400')
                  : 'bg-red-400 text-black hover:bg-red-500 cursor-pointer shadow-xs'
              }`}
              aria-label="Detener y apagar por completo la lectura en voz alta"
            >
              <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Ajuste fino de velocidad lectora */}
          <div className="flex flex-col gap-1">
            <label className={`text-xs font-black ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`} id="audio-speed-label">
              Velocidad de Lectura:
            </label>
            <div className={`grid grid-cols-3 ${isDarkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-100' : 'bg-white border-black text-black'} border-2 rounded-lg overflow-hidden`} role="radiogroup" aria-labelledby="audio-speed-label">
              <button
                type="button"
                onClick={() => cambiarVelocidadVoz(0.65)}
                className={`py-1.5 text-[10px] sm:text-xs font-bold cursor-pointer transition-colors ${
                  velocidadVoz === 0.65 
                    ? (isDarkMode ? 'bg-yellow-405 bg-yellow-400 text-zinc-950 font-black' : 'bg-black text-white') 
                    : (isDarkMode ? 'hover:bg-zinc-805 bg-zinc-900 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-black/85 bg-white')
                }`}
                aria-checked={velocidadVoz === 0.65}
                role="radio"
              >
                Muy Lento
              </button>
              <button
                type="button"
                onClick={() => cambiarVelocidadVoz(0.82)}
                className={`py-1.5 text-[10px] sm:text-xs font-bold cursor-pointer border-x-2 ${isDarkMode ? 'border-zinc-700' : 'border-black'} transition-colors ${
                  velocidadVoz === 0.82 
                    ? (isDarkMode ? 'bg-yellow-400 text-zinc-950 font-black' : 'bg-black text-white') 
                    : (isDarkMode ? 'hover:bg-zinc-805 bg-zinc-900 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-black/85 bg-white')
                }`}
                aria-checked={velocidadVoz === 0.82}
                role="radio"
              >
                Lento (Rec.)
              </button>
              <button
                type="button"
                onClick={() => cambiarVelocidadVoz(1.0)}
                className={`py-1.5 text-[10px] sm:text-xs font-bold cursor-pointer transition-colors ${
                  velocidadVoz === 1.0 
                    ? (isDarkMode ? 'bg-yellow-400 text-zinc-950 font-black' : 'bg-black text-white') 
                    : (isDarkMode ? 'hover:bg-zinc-805 bg-zinc-900 text-zinc-400 hover:text-white' : 'hover:bg-zinc-100 text-black/85 bg-white')
                }`}
                aria-checked={velocidadVoz === 1.0}
                role="radio"
              >
                Standard
              </button>
            </div>
          </div>

          {/* Selector de Tipo de Voz del Asistente */}
          <div className="flex flex-col gap-1">
            <label className={`text-xs font-black ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`} htmlFor={`voice-choice-${leccion.id}`}>
              🔊 Tipo de Voz del Asistente:
            </label>
            <select
              id={`voice-choice-${leccion.id}`}
              value={vozSeleccionadaURI}
              onChange={(e) => {
                const uri = e.target.value;
                setVozSeleccionadaURI(uri);
                localStorage.setItem('voz_narratriz_preferida', uri);
                
                // Confirmación oral del cambio de voz
                if (synthRef.current) {
                  synthRef.current.cancel();
                  const ut = new SpeechSynthesisUtterance("Voz de lectura seleccionada con éxito.");
                  ut.lang = 'es-ES';
                  // Buscar coincidencia en la voz
                  const list = synthRef.current.getVoices();
                  const match = list.find(v => v.voiceURI === uri);
                  if (match) {
                    ut.voice = match;
                  }
                  synthRef.current.speak(ut);
                }
              }}
              className={`text-xs p-2.5 rounded-lg border-2 font-bold cursor-pointer transition-colors ${
                isDarkMode 
                  ? 'bg-zinc-900 border-zinc-700 text-zinc-100 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400' 
                  : 'bg-white border-black text-black focus:border-blue-600 focus:ring-1 focus:ring-blue-600'
              }`}
            >
              <option value="">🗣️ Voz predeterminada del sistema</option>
              {voces.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* --- CUERPO DIVIDIDO EN DOS PANELES (LEFT: TEORÍA | RIGHT: INSTRUCCIONES) --- */}
      <div className={`grid md:grid-cols-2 border-b-2 sm:border-b-4 ${isDarkMode ? 'border-zinc-700 divide-zinc-700 bg-zinc-950 text-white' : 'border-black divide-black text-black'} divide-y-2 md:divide-y-0 md:divide-x-2`}>
        
        {/* =========================================
            PANEL IZQUIERDO: EXPLICACIÓN DE CONCEPTOS
            ========================================= */}
        <section 
          className={`p-3.5 xs:p-5 sm:p-6 md:p-8 ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-black'}`}
          aria-label="Panel Izquierdo: Conceptos teóricos de oficina"
        >
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-zinc-800 text-yellow-300' : 'bg-black text-white'} flex items-center justify-center font-black text-base md:text-lg font-sans`}>
                1
              </span>
              <h3 className={`text-lg sm:text-xl font-black uppercase ${isDarkMode ? 'text-zinc-100' : 'text-black'} tracking-wide`}>
                Explicación Teórica:
              </h3>
            </div>
            
            <button
              onClick={narrarDesdeTeoriaAdelante}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-xs cursor-pointer transition-colors ${
                etiquetaVoz === "Desde la Teoría" 
                  ? 'bg-amber-400 text-black border-amber-500' 
                  : (isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-750' : 'bg-yellow-100 text-gray-800 border-zinc-350 hover:bg-yellow-250')
              }`}
              title="Escuchar en voz alta desde este texto de teoría en adelante"
            >
              <Play className="w-3.5 h-3.5 fill-black/10 text-current" />
              <span>Oír desde aquí</span>
            </button>
          </div>

          <p 
            id={`leccion-teoria-p-${leccion.id}`}
            className={getHighlightClass(`leccion-teoria-p-${leccion.id}`, `leading-relaxed font-sans mb-8 p-4 xs:p-6 rounded-2xl min-h-[160px] focus:outline-none border-2 ${
              esSimplificado 
                ? (isDarkMode ? 'bg-amber-950/40 border-amber-500/80 text-amber-200 shadow-xs' : 'bg-amber-50 border-amber-400 text-black') 
                : (isDarkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-slate-50 border-zinc-200 text-zinc-900')
            } ${fontSizeClass}`)}
          >
            <TextoEnriquecido texto={esSimplificado ? leccion.explicacion_alternativa : leccion.descripcion_teorica} isDarkMode={isDarkMode} />
          </p>

          {/* Elementos visuales clave para identificar botones en pantalla física */}
          {leccion.elementos_visuales && leccion.elementos_visuales.length > 0 && (
            <div className={`mt-6 mb-8 p-4 sm:p-5 rounded-2xl border-2 ${
              isDarkMode ? 'bg-zinc-800/40 border-zinc-700 text-white' : 'bg-blue-50/40 border-blue-100 text-black'
            }`}>
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>🖥️ Botonera y elementos a ubicar en su computadora:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {leccion.elementos_visuales.map((elem, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-xl border-2 flex items-start gap-3 transition-colors ${
                      isDarkMode ? 'bg-zinc-900 border-zinc-700/80' : 'bg-white border-blue-200/60 shadow-xs'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black shrink-0 text-xl select-none ${
                      isDarkMode ? 'bg-zinc-800 text-yellow-300 border border-zinc-700' : 'bg-slate-100 text-black border border-slate-300 shadow-xs'
                    }`}>
                      {elem.icono.toLowerCase().includes('negrita') ? '𝗡' :
                       elem.icono.toLowerCase().includes('subrayado') ? '𝗦' :
                       elem.icono.toLowerCase().includes('cursiva') ? '𝘒' :
                       elem.icono.toLowerCase().includes('zoom') ? '🔍' :
                       elem.icono.toLowerCase().includes('cinta') ? '📋' :
                       elem.icono.toLowerCase().includes('enter') ? '⏎' :
                       elem.icono.toLowerCase().includes('clic') ? '🖱️' :
                       elem.icono.toLowerCase().includes('viñeta') ? '•☰' :
                       elem.icono.toLowerCase().includes('numeración') ? '1☰' :
                       elem.icono.toLowerCase().includes('disco') ? '💾' :
                       elem.icono.toLowerCase().includes('ventana') ? '🗁' :
                       elem.icono.toLowerCase().includes('alineación') ? '⟷' :
                       elem.icono.toLowerCase().includes('interlineado') ? '⇵' : '⚙️'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-extrabold text-xs sm:text-sm leading-tight mb-1">
                        {elem.etiqueta}
                      </p>
                      {elem.descripcion && (
                        <p className={`text-[10px] sm:text-xs font-semibold leading-normal ${
                          isDarkMode ? 'text-zinc-400' : 'text-zinc-500'
                        }`}>
                          {elem.descripcion}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botón de control: No entendí, dame otra explicación */}
          <div className="mt-8">
            <button
              id={`btn-simplificar-paradigma-${leccion.id}`}
              onClick={alternarExplicacionFácil}
              className={`w-full flex items-center justify-center gap-2 border-2 px-3 py-3 sm:px-6 sm:py-4.5 rounded-2xl font-black text-base sm:text-lg transition-colors min-h-[56px] cursor-pointer ${
                esSimplificado 
                  ? 'bg-amber-400 text-zinc-950 border-amber-500 hover:bg-amber-500' 
                  : (isDarkMode ? 'bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700' : 'bg-white text-zinc-950 border-zinc-900 hover:bg-zinc-100')
              }`}
              aria-label="Obtener explicación adaptada con manzanas y peras tradicionales"
              aria-pressed={esSimplificado}
            >
              <HelpCircle className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${esSimplificado ? 'text-zinc-950' : (isDarkMode ? 'text-zinc-200' : 'text-zinc-950')}`} />
              <span>
                {esSimplificado ? 'Volver a explicación estándar' : 'No entendí, dame otra explicación'}
              </span>
            </button>
          </div>
        </section>

        {/* =========================================
            PANEL DERECHO: LISTA DE PASOS NUMERADOS
            ========================================= */}
        <section 
          className={`p-3.5 xs:p-5 sm:p-6 md:p-8 border-t-2 md:border-t-0 md:border-l-2 ${isDarkMode ? 'bg-zinc-900 text-zinc-100 border-zinc-800' : 'bg-white text-zinc-900 border-zinc-200'}`}
          aria-label="Panel Derecho: Pasos secuenciales a ejecutar"
        >
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-zinc-800 text-yellow-300' : 'bg-black text-white'} flex items-center justify-center font-black text-base md:text-lg font-sans`}>
                2
              </span>
              <h3 className={`text-lg sm:text-xl font-black uppercase ${isDarkMode ? 'text-zinc-100' : 'text-black'} tracking-wide`}>
                Pasos a hacer en su PC:
              </h3>
            </div>
            
            <button
              onClick={narrarDesdePasosAdelante}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-bold text-xs cursor-pointer transition-colors ${
                etiquetaVoz === "Desde los Pasos" 
                  ? 'bg-amber-400 text-black border-amber-500' 
                  : (isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-750' : 'bg-yellow-105 bg-yellow-100 hover:bg-yellow-250 hover:bg-yellow-200')
              }`}
              title="Escuchar en voz alta todas las instrucciones de corrido en adelante"
            >
              <Play className="w-3.5 h-3.5 fill-black/10 text-current" />
              <span>Oír todos los pasos</span>
            </button>
          </div>

          <div className="space-y-4 mb-8">
            <span 
              id={`leccion-banner-instruccion-${leccion.id}`}
              className={getHighlightClass(`leccion-banner-instruccion-${leccion.id}`, `text-[10px] sm:text-xs font-extrabold ${isDarkMode ? 'text-amber-200 border-amber-700 bg-amber-950/30' : 'text-blue-900 border-blue-400 bg-blue-50'} px-2.5 py-1 rounded inline-block uppercase tracking-wider font-sans border`)}
            >
              Abra {leccion.modulo_id === 'word' ? 'Word' : leccion.modulo_id === 'excel' ? 'Excel' : leccion.modulo_id === 'powerpoint' ? 'PowerPoint' : 'Outlook'} real e imite estos pasos:
            </span>

            <ol className="space-y-3.5" role="list">
              {pasosActuales.map((paso, index) => {
                const esEstaLeyendoEstePaso = etiquetaVoz === `Paso ${index + 1} en adelante` || isSegmentoActivoPorId(`leccion-paso-item-${leccion.id}-${index}`);
                return (
                  <li 
                    key={index}
                    id={`leccion-paso-item-${leccion.id}-${index}`}
                    className={getHighlightClass(`leccion-paso-item-${leccion.id}-${index}`, `flex items-start gap-2.5 p-3 rounded-xl border transition-all duration-150 ${
                      esEstaLeyendoEstePaso 
                        ? (isDarkMode ? 'border-amber-500 bg-amber-950/35 shadow-md scale-[1.01]' : 'border-amber-400 bg-amber-50/45 shadow-sm scale-[1.01]')
                        : (isDarkMode ? 'bg-zinc-800/80 border-zinc-705 border-zinc-700/80 text-zinc-100' : 'bg-white border-zinc-150 text-zinc-900')
                    } ${fontSizeClass}`)}
                  >
                    <span className={`w-7 h-7 rounded-full ${isDarkMode ? 'bg-zinc-900 text-yellow-300' : 'bg-black text-white'} flex items-center justify-center font-black font-sans shrink-0 text-sm`}>
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                      <span className={`font-semibold leading-relaxed ${isDarkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                        <TextoEnriquecido texto={paso} isDarkMode={isDarkMode} />
                      </span>
                      <button 
                        onClick={() => narrarDesdePasoEspecifico(index)}
                        className={`shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-lg border text-[10px] sm:text-xs cursor-pointer transition-colors outline-hidden ${
                          esEstaLeyendoEstePaso 
                            ? 'bg-amber-400 text-black border-amber-500 hover:bg-amber-500 font-extrabold' 
                            : (isDarkMode ? 'bg-zinc-900 text-zinc-350 border-zinc-700 hover:bg-zinc-800' : 'bg-zinc-100 text-zinc-700 border-zinc-200 hover:bg-zinc-250')
                        }`}
                        title={`Oír la lección en voz alta desde este paso número ${index + 1} en adelante`}
                      >
                        <Play className="w-3" />
                        <span>Oír</span>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* --- EXPANSIÓN INTELECTUAL: PROPUESTAS DE EXPERIMENTACIÓN Y DESCUBRIMIENTO --- */}
          {leccion.sugerencias_descubrimiento && leccion.sugerencias_descubrimiento.length > 0 && (
            <div
              id={`zona-experimentacion-${leccion.id}`}
              className={getHighlightClass(`zona-experimentacion-${leccion.id}`, `p-3.5 sm:p-4 rounded-xl border mb-8 shadow-xs ${
                isDarkMode 
                  ? 'bg-blue-950/20 border-blue-900/40' 
                  : 'bg-blue-50/50 border-blue-200 shadow-xs'
              }`)}
              role="region"
              aria-label="Espacio de Descubrimiento y Experimentos Libres"
            >
              <div className={`flex items-center justify-between flex-wrap gap-2 mb-3 pb-1.5 border-b ${isDarkMode ? 'border-blue-900/60' : 'border-blue-200'}`}>
                <h4 className={`font-extrabold text-xs sm:text-sm ${isDarkMode ? 'text-blue-300' : 'text-blue-950'} uppercase flex items-center gap-2`}>
                  <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0" />
                  <span>🧪 ¡Pruebe más opciones! (Espacio de Juego)</span>
                </h4>
                
                <button
                  type="button"
                  onClick={narrarSoloSugerencias}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded-lg border font-bold text-[10px] sm:text-xs cursor-pointer transition-colors ${
                    isDarkMode 
                      ? 'bg-blue-900/40 text-blue-200 border-blue-800 hover:bg-blue-900/60' 
                      : 'bg-blue-105 bg-blue-100 text-blue-950 border-blue-200 hover:bg-blue-200'
                  }`}
                  title="Escuchar todas las sugerencias de experimento en voz alta"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Oír ideas de juego</span>
                </button>
              </div>

              <p className={`text-[11px] sm:text-xs font-bold mb-3 leading-relaxed font-sans ${isDarkMode ? 'text-blue-200/80' : 'text-blue-900/90'}`}>
                No se limite a cumplir la tarea. ¡Pruebe a equivocarse en su computadora para entender cómo funciona de verdad! Intente lo siguiente:
              </p>

              <ul className="space-y-2.5 font-sans" role="list">
                {leccion.sugerencias_descubrimiento.map((item, idx) => {
                  const estaReproduciendoSuga = etiquetaVoz === `Experimento ${idx + 1}` || isSegmentoActivoPorId(`leccion-sugerencia-item-${leccion.id}-${idx}`);
                  return (
                    <li 
                      key={idx}
                      id={`leccion-sugerencia-item-${leccion.id}-${idx}`}
                      className={getHighlightClass(`leccion-sugerencia-item-${leccion.id}-${idx}`, `p-3 rounded-xl border transition-all duration-150 ${
                        estaReproduciendoSuga 
                          ? (isDarkMode ? 'bg-blue-950 border-blue-500 text-blue-100 shadow' : 'bg-blue-100 border-blue-400 shadow-xs')
                          : (isDarkMode ? 'bg-zinc-800/80 border-blue-950 text-zinc-101 text-zinc-100 hover:border-zinc-750' : 'bg-white border-blue-50 hover:border-blue-100')
                      }`)}
                    >
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-between gap-2">
                        <div className="flex items-start gap-2 sm:gap-2.5">
                          <span className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-blue-900 text-blue-200 text-[10px]' : 'bg-blue-600 text-white text-xs'} flex items-center justify-center font-black shrink-0 mt-0.5 font-sans`}>
                            {idx + 1}
                          </span>
                          <span className={`text-[11px] sm:text-xs font-bold leading-relaxed ${isDarkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                            <TextoEnriquecido texto={item} isDarkMode={isDarkMode} />
                          </span>
                        </div>
                        
                        <button 
                          type="button"
                          onClick={() => narrarSugerenciaEspecifica(idx)}
                          className={`shrink-0 flex items-center justify-center gap-1 px-2 py-0.5 rounded-lg border text-[10px] font-bold active:scale-95 cursor-pointer transition-colors w-full sm:w-auto ${
                            estaReproduciendoSuga 
                              ? 'bg-amber-400 text-black border-amber-500' 
                              : (isDarkMode ? 'bg-zinc-900 text-zinc-300 border-zinc-700' : 'bg-blue-50 text-blue-900 border-blue-150 hover:bg-blue-100')
                          }`}
                          title={`Escuchar sugerencia de experimento número ${idx + 1}`}
                        >
                          <Play className="w-2.5 h-2.5 fill-black/10 text-current" />
                          <span>Oír</span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* --- CHECKLIST DE VALIDACIÓN DE SECRETARIADO --- */}
          {leccion.checklist_validacion && leccion.checklist_validacion.length > 0 && (
            <div 
              id={`checklist-validacion-${leccion.id}`}
              className={getHighlightClass(`checklist-validacion-${leccion.id}`, `p-3.5 sm:p-4 rounded-xl border-2 mb-8 ${isDarkMode ? 'bg-zinc-900/40 border-zinc-700' : 'bg-zinc-50 border-zinc-300'}`)}
              role="group"
              aria-label="Lista de Comprobación de Éxito de la Tarea"
            >
              <div className={`flex items-center justify-between flex-wrap gap-2 mb-2 pb-1.5 border-b ${isDarkMode ? 'border-zinc-705 border-zinc-750' : 'border-zinc-200'}`}>
                <h4 className={`font-extrabold text-xs sm:text-sm ${isDarkMode ? 'text-zinc-100' : 'text-zinc-905 text-zinc-900'} uppercase flex items-center gap-2`}>
                  <CheckSquare className="w-5 h-5 text-green-500 shrink-0" />
                  <span>¿Qué debió aparecer en su PC?</span>
                </h4>
                
                <button
                  type="button"
                  onClick={narrarSoloChecklist}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg border font-bold text-[10px] sm:text-xs cursor-pointer transition-colors ${
                    isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700' : 'bg-zinc-100 text-black border-zinc-200 hover:bg-zinc-200'
                  }`}
                  title="Oír la lista completa de comprobación de éxito"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Oír lista</span>
                </button>
              </div>
              <p className={`text-[11px] sm:text-xs font-bold mb-3 leading-relaxed font-sans ${isDarkMode ? 'text-zinc-350' : 'text-zinc-700'}`}>
                Haga click sobre cada casilla para marcar que logró verificarlo en su pantalla:
              </p>

              <ul className="space-y-2.5" role="list">
                {leccion.checklist_validacion.map((item, idx) => {
                  const isChecked = checklistEstado[idx] || false;
                  const esChekeando = isSegmentoActivoPorId(`leccion-checklist-item-${leccion.id}-${idx}`);
                  return (
                    <li 
                      key={idx} 
                      id={`leccion-checklist-item-${leccion.id}-${idx}`}
                      className="block"
                    >
                      <button
                        onClick={() => toggleChecklistItem(idx)}
                        className={getHighlightClass(`leccion-checklist-item-${leccion.id}-${idx}`, `w-full flex items-start gap-2.5 p-3 rounded-xl border transition-all cursor-pointer text-left min-h-[48px] ${
                          isChecked 
                            ? (isDarkMode ? 'bg-green-950/20 border-green-700 text-green-200' : 'bg-green-50 border-green-500 hover:bg-green-100 text-green-950') 
                            : (isDarkMode ? 'bg-zinc-800 border-zinc-700 hover:bg-zinc-750 text-zinc-200' : 'bg-white border-zinc-250 hover:bg-zinc-50 text-zinc-900')
                        } ${esChekeando ? 'border-amber-400 bg-amber-50/45 shadow scale-[1.01]' : ''}`)}
                        aria-label={`Punto de validación ${idx + 1}: ${item}. Estado actual: ${isChecked ? 'Verificado' : 'Sin verificar'}`}
                        aria-pressed={isChecked}
                      >
                        <div className="shrink-0 mt-0.5">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-green-500" />
                          ) : (
                            <Square className="w-5 h-5 text-zinc-400" />
                          )}
                        </div>
                        <span className={`text-[11px] sm:text-xs font-semibold leading-relaxed ${
                          isChecked ? 'line-through opacity-60 decoration-1' : (isDarkMode ? 'text-zinc-200' : 'text-zinc-900')
                        }`}>
                          <TextoEnriquecido texto={item} isDarkMode={isDarkMode} />
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Consejo Útil de Accesibilidad integrado */}
          <div 
            id={`leccion-consejo-seccion-${leccion.id}`}
            className={getHighlightClass(`leccion-consejo-seccion-${leccion.id}`, `p-3.5 sm:p-4 rounded-xl border mb-8 ${
              isDarkMode 
                ? 'bg-yellow-950/20 border-yellow-800/40' 
                : 'bg-yellow-50 border-yellow-400'
            }`)}
          >
            <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
              <p className={`flex items-center gap-2 font-black text-xs sm:text-sm ${isDarkMode ? 'text-yellow-300' : 'text-amber-950'}`}>
                <Sparkles className="w-5 h-5 shrink-0" />
                CONSEJO DE ACCESIBILIDAD ALTO:
              </p>
              
              <button
                type="button"
                onClick={narrarSoloConsejo}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[10px] font-bold active:scale-95 cursor-pointer transition-colors ${
                  isDarkMode ? 'bg-zinc-800 text-zinc-200 border-zinc-700 hover:bg-zinc-700' : 'bg-white text-black border-zinc-300 hover:bg-zinc-50'
                }`}
                title="Oír el consejo de accesibilidad en voz alta"
              >
                <Volume2 className="w-3.5 h-3.5 text-current" />
                <span>Oír consejo</span>
              </button>
            </div>
            <p className={`font-semibold text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-yellow-100' : 'text-yellow-950'} ${fontSizeClass}`}>
              <TextoEnriquecido texto={leccion.tips_de_accesibilidad} isDarkMode={isDarkMode} />
            </p>
          </div>

          {/* Botón de Acción: He terminado este ejercicio */}
          <div className="pt-4 border-t-2 border-dashed border-zinc-300">
            <button
              id={`btn-completar-pasos-${leccion.id}`}
              onClick={marcarEjercicioTerminado}
              className={`w-full flex items-center justify-center gap-3 border-2 px-4 py-4 sm:px-6 sm:py-4.5 rounded-2xl font-black text-lg sm:text-xl cursor-pointer min-h-[56px] transition-all transform active:scale-95 ${
                completadoPC 
                  ? 'bg-green-100 text-green-900 border-green-600' 
                  : (isDarkMode ? 'bg-green-500 border-green-600 text-black hover:bg-green-400' : 'bg-green-400 text-black border-zinc-950 hover:bg-green-505 hover:bg-green-550 hover:bg-green-500')
              }`}
              aria-label="Marcar que ya hizo todas las tareas solicitadas en su computadora de escritorio"
            >
              <CheckCircle2 className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 ${completadoPC ? 'text-green-700' : 'text-black'}`} />
              <span>
                {completadoPC ? '¡Listo! Ejercicio completado' : 'He terminado este ejercicio'}
              </span>
            </button>
          </div>
        </section>

      </div>

      {/* --- MENÚ DE NAVEGACIÓN DE ESTUDIO (SIGUIENTE LECCIÓN INTERBLOQUEADO) --- */}
      <div className={`p-4 sm:p-6 md:p-8 flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-4 border-t ${
        isDarkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-205 bg-gray-50'
      }`}>
        <button
          onClick={onAnterior}
          className={`flex items-center justify-center gap-2 border-2 font-extrabold text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-4 rounded-xl min-h-[48px] cursor-pointer transition-transform active:scale-95 shadow-xs w-full xs:w-auto ${
            isDarkMode 
              ? 'bg-zinc-900 text-zinc-100 border-zinc-700 hover:bg-zinc-800' 
              : 'bg-white text-black border-black hover:bg-zinc-100'
          }`}
          aria-label="Regresar a la lección o paso instructivo anterior"
        >
          <ChevronLeft className="w-5 h-5 text-current shrink-0" />
          <span>Lección Anterior</span>
        </button>

        {completadoPC ? (
          <button
            onClick={onSiguiente}
            className="flex items-center justify-center gap-2 border-2 bg-yellow-300 hover:bg-yellow-400 text-black font-black text-sm sm:text-base px-5 py-3.5 sm:px-8 sm:py-4 rounded-xl min-h-[48px] cursor-pointer transition-all transform hover:scale-105 active:scale-95 shadow-md animate-pulse w-full xs:w-auto"
            aria-label="Avanzar a la siguiente lección del programa de oficina"
          >
            <span>Siguiente Lección</span>
            <ChevronRight className="w-5 h-5 text-black shrink-0" />
          </button>
        ) : (
          <div className="flex flex-col items-stretch xs:items-end gap-1 w-full xs:w-auto">
            <button
              disabled
              className={`flex items-center justify-center gap-2 border-2 font-bold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 rounded-xl min-h-[48px] cursor-not-allowed opacity-45 w-full xs:w-auto ${
                isDarkMode ? 'bg-zinc-905 bg-zinc-900 text-zinc-650 border-zinc-800' : 'bg-zinc-200 text-zinc-400 border-zinc-300'
              }`}
              title="Debe oprimir el gran botón verde para registrar que ya terminó los pasos de estudio"
            >
              <span>Siguiente Lección</span>
              <ChevronRight className="w-5 h-5 text-current shrink-0" />
            </button>
            <span className={`text-center xs:text-right text-[10px] sm:text-xs font-extrabold px-2 py-0.5 border rounded ${
              isDarkMode ? 'text-red-405 text-red-405 text-red-400 bg-red-950/20 border-red-900' : 'text-red-700 bg-red-50 border-red-200'
            }`}>
              * Termine la práctica en su PC para avanzar
            </span>
          </div>
        )}
      </div>

      {/* ========================================================
          BOTÓN FLOTANTE CIRCULAR REFINADO "SIEMPRE A LA MANO"
          ======================================================== */}
      {mostrarFlotante && (
        <button 
          onClick={pausarReanudarVoz}
          className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 shadow-xl z-50 cursor-pointer transition-all transform active:scale-90 hover:scale-[1.05] ${
            speechState === 'playing' 
              ? 'bg-amber-400 text-black border-amber-500 animate-pulse' 
              : (isDarkMode ? 'bg-zinc-800 text-yellow-300 border-zinc-705 border-zinc-700 hover:bg-zinc-700' : 'bg-green-400 text-black border-black hover:bg-green-500')
          }`}
          role="button"
          aria-label={speechState === 'playing' ? "Pausar la voz del asistente" : "Reproducir o reanudar la voz de asistencia"}
          title={speechState === 'playing' ? "Pausar asistente de voz" : "Reanudar asistente de voz"}
        >
          {speechState === 'playing' ? (
            <Pause className="w-6 h-6 sm:w-7 sm:h-7 animate-none shrink-0" />
          ) : (
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current shrink-0" />
          )}
        </button>
      )}

    </div>
  );
}
