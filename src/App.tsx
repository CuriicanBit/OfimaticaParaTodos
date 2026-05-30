/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MODULOS, LECCIONES } from './data/lessonsData';
import LessonContainer from './components/LessonContainer';
import { Profile, Progreso } from './types';
import {
  FileText,
  Table2,
  Presentation,
  Mail,
  Sun,
  Moon,
  Type,
  Volume2,
  VolumeX,
  Home,
  Award,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  Play,
  ChevronRight,
  RotateCcw
} from 'lucide-react';

export default function App() {
  // --- ACCESSIBILITY STATES ---
  const [fontSize, setFontSize] = useState<'grande' | 'gigante' | 'monstruoso'>('grande');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [audioFeedback, setAudioFeedback] = useState<boolean>(true);

  // --- APPLICATION STATES ---
  const [view, setView] = useState<'bienvenida' | 'perfil' | 'dashboard' | 'leccion' | 'felicitaciones'>('bienvenida');
  const [nombre, setNombre] = useState<string>('');
  const [nivel, setNivel] = useState<'Básico' | 'Intermedio' | 'Avanzado'>('Básico');
  const [selectedModuloId, setSelectedModuloId] = useState<string | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);

  // --- LOCAL DATABASE SIMULATION (Supabase client equivalent in localStorage) ---
  const [progreso, setProgreso] = useState<Record<string, Progreso>>({});

  // --- VOICE SELECTION STATES ---
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Cargar voces en español disponibles
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const actualizarVoces = () => {
      const todasLasVoces = window.speechSynthesis.getVoices();
      const vocesEspanyol = todasLasVoces.filter(v => v.lang.toLowerCase().startsWith('es'));
      setAvailableVoices(vocesEspanyol);
      
      const savedVoiceURI = localStorage.getItem('voz_narratriz_preferida') || localStorage.getItem('ofimatica_voz_uri') || '';
      if (savedVoiceURI && todasLasVoces.some(v => v.voiceURI === savedVoiceURI)) {
        setSelectedVoiceURI(savedVoiceURI);
      } else if (vocesEspanyol.length > 0) {
        setSelectedVoiceURI(vocesEspanyol[0].voiceURI);
      }
    };

    actualizarVoces();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = actualizarVoces;
    }
  }, []);

  // Cargar progreso del usuario guardado en el navegador al iniciar
  useEffect(() => {
    const savedNombre = localStorage.getItem('ofimatica_nombre') || '';
    const savedNivel = localStorage.getItem('ofimatica_nivel') as any || 'Básico';
    const savedProgreso = localStorage.getItem('ofimatica_progreso') || '{}';
    
    if (savedNombre) {
      setNombre(savedNombre);
      setNivel(savedNivel);
    }
    
    try {
      setProgreso(JSON.parse(savedProgreso));
    } catch (_) {
      setProgreso({});
    }

    // Saludo de voz inicial e indicaciones para baja visión
    setTimeout(() => {
      reproducirVozGuia(
        "Bienvenida a la aplicación de aprendizaje de oficina para computadora. Diseñada para su comodidad total. Presione el gran botón verde en el centro para registrar su nombre y empezar."
      );
    }, 1000);
  }, []);

  // Guardar datos en simulador Supabase (localStorage)
  const guardarNombreYPerfil = (pNombre: string, pNivel: 'Básico' | 'Intermedio' | 'Avanzado') => {
    localStorage.setItem('ofimatica_nombre', pNombre);
    localStorage.setItem('ofimatica_nivel', pNivel);
    setNombre(pNombre);
    setNivel(pNivel);
    reproducirVozGuia(`Perfil guardado con éxito. Hola ${pNombre || 'Estudiante'}, bienvenida a su curso nivel ${pNivel}.`);
  };

  // Función de actualización de base de datos Simulación de marcar_leccion_completada PostgreSQL RPC
  const registrarProgresoLeccion = (leccionId: string) => {
    const nuevoProgreso = { ...progreso };
    
    if (nuevoProgreso[leccionId] && nuevoProgreso[leccionId].completado) {
      nuevoProgreso[leccionId] = {
        user_id: 'user_temp_id_51',
        leccion_id: leccionId,
        completado: true,
        reintentado: true
      };
    } else {
      nuevoProgreso[leccionId] = {
        user_id: 'user_temp_id_51',
        leccion_id: leccionId,
        completado: true,
        reintentado: false
      };
    }

    setProgreso(nuevoProgreso);
    localStorage.setItem('ofimatica_progreso', JSON.stringify(nuevoProgreso));
  };

  // Función de ayuda por voz (Asistente de accesibilidad con Speech Synthesis)
  const reproducirVozGuia = (texto: string) => {
    if (!audioFeedback) return;
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel(); // Detener lecturas previas
      const utterance = new SpeechSynthesisUtterance(texto);
      
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.voiceURI === selectedVoiceURI);
      if (voice) {
        utterance.voice = voice;
      } else {
        utterance.lang = 'es-ES';
      }
      utterance.rate = 0.92; // Más pausado y comprensivo
      window.speechSynthesis.speak(utterance);
    }
  };

  const alternarVozFeedback = () => {
    const nuevoEstado = !audioFeedback;
    setAudioFeedback(nuevoEstado);
    if (nuevoEstado) {
      // Si se activa, saludar
      setTimeout(() => {
        reproducirVozGuia("Asistente de voz activado. Le leeré en voz alta las instrucciones de uso en pantalla.");
      }, 50);
    } else {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }
  };

  // Configuración de tamaños de letra (AAA requiere min 20px, permitiendo escalar a 24px and 32px)
  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'grande':
        return 'text-xl md:text-2xl'; // 20px - 24px
      case 'gigante':
        return 'text-2xl md:text-3xl'; // 24px - 30px
      case 'monstruoso':
        return 'text-3xl md:text-4xl'; // 30px - 36px
    }
  };

  const getSubFontSizeClass = () => {
    switch (fontSize) {
      case 'grande':
        return 'text-lg md:text-xl';
      case 'gigante':
        return 'text-xl md:text-2xl';
      case 'monstruoso':
        return 'text-2xl md:text-3xl';
    }
  };

  // Filtra lecciones según el módulo seleccionado y el nivel actual de dificultad activa
  const targetNivel = nivel === 'Básico' 
    ? 'Nivel 1: Funcional' 
    : nivel === 'Intermedio' 
      ? 'Nivel 2: Administrativo' 
      : 'Nivel 3: Resolución de Problemas';

  const leccionesFiltradas = LECCIONES.filter(l => 
    l.modulo_id === selectedModuloId && l.nivel === targetNivel
  ).sort((a, b) => a.orden - b.orden);

  const irAModulo = (moduloId: string) => {
    const modulo = MODULOS.find(m => m.id === moduloId);
    setSelectedModuloId(moduloId);
    setCurrentLessonIndex(0);
    setView('leccion');
    reproducirVozGuia(`Ha seleccionado el módulo de ${modulo?.titulo || moduloId}. A continuación, se muestra la primera lección.`);
    
    // Desplazar suavemente al inicio de la lección activa
    setTimeout(() => {
      const element = document.getElementById('inicio-leccion-foco');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.focus();
      }
    }, 150);
  };

  const avanzarSiguienteLeccion = () => {
    if (currentLessonIndex < leccionesFiltradas.length - 1) {
      const proxIndex = currentLessonIndex + 1;
      setCurrentLessonIndex(proxIndex);
      reproducirVozGuia(`Avanzando a la lección número ${proxIndex + 1}.`);
      
      // Desplazar suavemente al inicio de la lección activa
      setTimeout(() => {
        const element = document.getElementById('inicio-leccion-foco');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.focus();
        }
      }, 100);
    } else {
      // ¡Completó todo el módulo!
      setView('felicitaciones');
      reproducirVozGuia(`¡Felicitaciones! Ha completado todas las materias prácticas del módulo de ${MODULOS.find(m => m.id === selectedModuloId)?.titulo}. Guardando este importante hito en su perfil virtual.`);
    }
  };

  const retrocederLeccion = () => {
    if (currentLessonIndex > 0) {
      const prevIndex = currentLessonIndex - 1;
      setCurrentLessonIndex(prevIndex);
      reproducirVozGuia(`Retrocediendo a la lección número ${prevIndex + 1}.`);
      
      // Desplazar suavemente al inicio de la lección activa
      setTimeout(() => {
        const element = document.getElementById('inicio-leccion-foco');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          element.focus();
        }
      }, 100);
    } else {
      setView('dashboard');
      reproducirVozGuia(`Regresando al catálogo de módulos educativos de oficina.`);
    }
  };

  // Cuenta número de lecciones completadas por módulo para el progreso en base al nivel activo
  const getCompletadasPorModulo = (moduloId: string) => {
    const targetN = nivel === 'Básico' 
      ? 'Nivel 1: Funcional' 
      : nivel === 'Intermedio' 
        ? 'Nivel 2: Administrativo' 
        : 'Nivel 3: Resolución de Problemas';
    const moduloLecciones = LECCIONES.filter(l => l.modulo_id === moduloId && l.nivel === targetN);
    const completadas = moduloLecciones.filter(l => progreso[l.id]?.completado);
    return completadas.length;
  };

  const getModuloProgresoPorcentaje = (moduloId: string) => {
    const targetN = nivel === 'Básico' 
      ? 'Nivel 1: Funcional' 
      : nivel === 'Intermedio' 
        ? 'Nivel 2: Administrativo' 
        : 'Nivel 3: Resolución de Problemas';
    const total = LECCIONES.filter(l => l.modulo_id === moduloId && l.nivel === targetN).length;
    if (total === 0) return 0;
    return Math.round((getCompletadasPorModulo(moduloId) / total) * 100);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDarkMode ? 'contrast-high-dark bg-zinc-950 text-white' : 'bg-slate-50 text-black'
    }`}>
      {/* SKIP LINK PARA LECTORES DE PANTALLA */}
      <a href="#contenido-principal" className="skip-link font-sans text-xl">
        Saltar directamente al contenido educativo (Saltar Menús)
      </a>

      {/* --- CABECERA SUPERIOR ACCESIBLE CON HERRAMIENTAS GIGANTES DE CONFIGURACIÓN --- */}
      <header 
        className="border-b-4 border-black bg-white text-black py-4 px-6 md:px-12 flex flex-wrap items-center justify-between gap-4 shadow-md"
        role="banner"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg font-black font-sans text-2xl">
            OF
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              Ofimática Fácil
            </h1>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
              Nivel de Accesibilidad WCAG AAA
            </p>
          </div>
        </div>

        {/* CONTROLES DE ACCESIBILIDAD (GRANDES, TARGET >= 48PX) */}
        <div className="flex flex-wrap items-center gap-3" aria-label="Herramientas de configuración visual y auditiva">
          {/* CONTROL TAMAÑO DE TEXTO */}
          <div className="flex items-center border-4 border-black rounded-lg overflow-hidden bg-white">
            <span className="px-3 py-1 font-mono text-xs font-black uppercase border-r-2 border-black bg-gray-100 flex items-center gap-1 text-black">
              <Type className="w-4 h-4" /> Letra:
            </span>
            <button
              onClick={() => {
                setFontSize('grande');
                reproducirVozGuia("Letra configurada en tamaño grande.");
              }}
              className={`px-4 py-3 font-bold cursor-pointer text-black min-h-[48px] hover:bg-zinc-200 transition-colors ${fontSize === 'grande' ? 'bg-black text-white' : 'bg-white'}`}
              aria-label="Configurar tamaño de letra grande habitual"
              aria-pressed={fontSize === 'grande'}
            >
              A
            </button>
            <button
              onClick={() => {
                setFontSize('gigante');
                reproducirVozGuia("Letra configurada en tamaño muy gigante.");
              }}
              className={`px-4 py-3 font-bold cursor-pointer text-black min-h-[48px] border-l border-r border-black hover:bg-zinc-200 transition-colors ${fontSize === 'gigante' ? 'bg-black text-white' : 'bg-white'}`}
              aria-label="Configurar tamaño de letra muy gigante"
              aria-pressed={fontSize === 'gigante'}
            >
              A+
            </button>
            <button
              onClick={() => {
                setFontSize('monstruoso');
                reproducirVozGuia("Letra configurada en tamaño súper gigante para máxima visión.");
              }}
              className={`px-4 py-3 font-mono font-extrabold cursor-pointer text-black min-h-[48px] hover:bg-zinc-200 transition-colors ${fontSize === 'monstruoso' ? 'bg-black text-white' : 'bg-white'}`}
              aria-label="Configurar tamaño de letra súper gigante para máxima lectura"
              aria-pressed={fontSize === 'monstruoso'}
            >
              A++
            </button>
          </div>

          {/* CONTROL DE CONTRASTE ALTO: CLARO / OSCURO */}
          <button
            onClick={() => {
              const prev = isDarkMode;
              setIsDarkMode(!prev);
              reproducirVozGuia(`Cambiando contraste. Modo de alta claridad ${!prev ? 'Oscuro seleccionado con fondo negro y letras blancas.' : 'Claro seleccionado con fondo blanco y letras negras.'}`);
            }}
            className="flex items-center gap-2 border-4 border-black bg-white hover:bg-gray-100 text-black font-extrabold px-4 py-3 rounded-lg cursor-pointer min-h-[48px]"
            aria-label="Alternar modo de pantalla de alto contraste"
          >
            {isDarkMode ? <Sun className="w-6 h-6 text-black" /> : <Moon className="w-6 h-6 text-black" />}
            <span className="text-base text-black">Contraste</span>
          </button>

          {/* CONTROL DE ASISTENTE POR VOZ */}
          <button
            onClick={alternarVozFeedback}
            className={`flex items-center gap-2 border-4 border-black font-extrabold px-4 py-3 rounded-lg cursor-pointer min-h-[48px] ${
              audioFeedback ? 'bg-yellow-300 hover:bg-yellow-400 text-black animate-pulse' : 'bg-white hover:bg-gray-100 text-black'
            }`}
            aria-label="Activar o desactivar asistente en voz alta"
            aria-pressed={audioFeedback}
          >
            {audioFeedback ? <Volume2 className="w-6 h-6 text-black" /> : <VolumeX className="w-6 h-6 text-black" />}
            <span className="text-base text-black">{audioFeedback ? "Guía con Voz" : "Modo Silencio"}</span>
          </button>

          {/* SELECCIÓN TIPO DE VOZ COMPAÑERA GLOBAL */}
          {audioFeedback && availableVoices.length > 0 && (
            <div className="flex items-center border-[4px] border-black rounded-lg overflow-hidden bg-white text-black min-h-[48px]">
              <span className="px-3 py-1 font-sans text-xs font-black uppercase border-r-2 border-black bg-gray-100 flex items-center gap-1 text-black">
                🗣️ Voz:
              </span>
              <select
                id="select-voice-global-header"
                value={selectedVoiceURI}
                onChange={(e) => {
                  const uri = e.target.value;
                  setSelectedVoiceURI(uri);
                  localStorage.setItem('ofimatica_voz_uri', uri);
                  localStorage.setItem('voz_narratriz_preferida', uri);
                  
                  // Confirmación oral del cambio de voz
                  setTimeout(() => {
                    reproducirVozGuia("Nueva voz configurada con éxito.");
                  }, 100);
                }}
                className="px-3.5 py-1 text-sm font-extrabold bg-white text-black outline-none cursor-pointer min-h-[40px] max-w-[190px] border-none"
                aria-label="Elegir voz preferida para la narración"
                title="Elegir voz preferida para la narración"
              >
                <option value="">⚙️ Predeterminada</option>
                {availableVoices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name.replace("Microsoft", "").replace("Google", "").trim()}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </header>

      {/* --- BANNER DE ESPECIFICACIÓN DE CONTRASTE ACCESIBLE --- */}
      <section 
        className={`border-b-4 border-black text-center py-4 px-6 font-extrabold text-sm sm:text-base transition-colors ${
          isDarkMode 
            ? 'bg-zinc-900 border-zinc-700 text-yellow-300' 
            : 'bg-yellow-100 text-amber-950'
        }`}
        aria-label="Aviso sobre visualización y simulación de pantalla real"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3 flex-wrap">
          <span>💡</span>
          <span>
            <strong>Pauta de Contraste:</strong> El contraste alto afecta fondos exteriores y textos de navegación. Los marcos prácticos de Word simulados en los ejercicios conservan el fondo blanco con letras negras para imitar el papel físico impreso real.
          </span>
        </div>
      </section>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main id="contenido-principal" className="max-w-4xl mx-auto px-6 py-10 md:py-16 focus:outline-none" role="main" tabIndex={-1}>
        
        {/* =========================================
            VISTA 1: PÁGINA BIENVENIDA / HERO INICIAL 
            ========================================= */}
        {view === 'bienvenida' && (
          <div className="border-[6px] border-black bg-white text-black p-8 md:p-14 rounded-3xl shadow-xl">
            <div className="text-center">
              <span className="text-7xl block mb-6 px-1" role="img" aria-label="Computadora de escritorio clásica">
                💻
              </span>
              <h1 className="font-sans font-black text-4xl md:text-5xl text-black leading-tight mb-6">
                ¡Aprende computación paso a paso de forma cómoda!
              </h1>
              <p className={`text-gray-800 leading-relaxed font-sans font-medium mb-10 ${getFontSizeClass()}`}>
                Esta aplicación está diseñada especialmente para personas con visión reducida.
                Utiliza letras de tamaño ajustable, alto contraste, explicaciones directas muy claras y
                un asistente de voz integrado que le acompañará con paciencia en cada click del camino.
              </p>

              <button
                id="btn-empezar"
                onClick={() => {
                  setView('perfil');
                  reproducirVozGuia("Cargando sección para configurar su nombre de estudiante.");
                }}
                className="inline-flex items-center gap-3 border-4 border-black bg-green-400 text-black hover:bg-green-500 font-black text-2xl px-10 py-5 rounded-2xl cursor-pointer min-h-[64px] transition-transform active:scale-95 shadow-lg"
                aria-label="Registrar mi nombre y configurar mi perfil ahora"
              >
                <Play className="w-8 h-8 fill-black" />
                <span>Empezar mi Curso</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================
            VISTA 2: CONFIGURACIÓN DE PERFIL SIMPLE 
            ========================================= */}
        {view === 'perfil' && (
          <div className="border-[6px] border-black bg-white text-black p-8 md:p-12 rounded-3xl shadow-xl">
            <h2 className="font-sans font-black text-3xl md:text-4xl text-black border-b-4 border-black pb-4 mb-6">
              ¿Quién nos acompaña hoy?
            </h2>

            {/* Formulario de registro básico que guarda a profiles localmente */}
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="input-nombre-perfil" 
                  className={`block font-extrabold text-black mb-3 ${getSubFontSizeClass()}`}
                >
                  Escribe tu primer nombre:
                </label>
                <input
                  id="input-nombre-perfil"
                  type="text"
                  placeholder="Por ejemplo: Maria"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full border-4 border-black rounded-xl p-5 font-sans text-2xl text-black bg-white focus:ring-4 focus:focus-visible:ring-blue-300 outline-none font-bold"
                  autoFocus
                />
              </div>

              {/* Selector de nivel actual */}
              <div>
                <span className={`block font-extrabold text-black mb-3 ${getSubFontSizeClass()}`}>
                  ¿Qué tanta experiencia tienes con la computadora actualmente?
                </span>
                <div className="grid md:grid-cols-3 gap-4">
                  {(['Básico', 'Intermedio', 'Avanzado'] as const).map((niv) => (
                    <button
                      key={niv}
                      type="button"
                      onClick={() => {
                        setNivel(niv);
                        reproducirVozGuia(`Seleccionado nivel ${niv}`);
                      }}
                      className={`border-4 border-black p-4 rounded-xl font-bold text-xl cursor-pointer transition-colors min-h-[56px] text-black ${
                        nivel === niv 
                          ? 'bg-yellow-400 text-black border-black border-[5px]' 
                          : 'bg-white hover:bg-zinc-100'
                      }`}
                      aria-label={`Seleccionar nivel actual ${niv}`}
                      aria-pressed={nivel === niv}
                    >
                      {niv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector de Tipo de Voz que nos acompañará */}
              {availableVoices.length > 0 && (
                <div>
                  <label 
                    htmlFor="select-voz-perfil" 
                    className={`block font-extrabold text-black mb-3 ${getSubFontSizeClass()}`}
                  >
                    🗣️ Elige el tipo de voz de tu asistente acompañante:
                  </label>
                  <select
                    id="select-voz-perfil"
                    value={selectedVoiceURI}
                    onChange={(e) => {
                      const uri = e.target.value;
                      setSelectedVoiceURI(uri);
                      localStorage.setItem('voz_narratriz_preferida', uri);
                      localStorage.setItem('ofimatica_voz_uri', uri);
                      
                      // Confirmación oral del cambio de voz
                      setTimeout(() => {
                        reproducirVozGuia("Hola, he seleccionado esta voz para acompañarte en tu aprendizaje.");
                      }, 100);
                    }}
                    className="w-full border-4 border-black rounded-xl p-4 font-sans text-xl text-black bg-white focus:ring-4 focus:ring-blue-300 outline-none font-extrabold cursor-pointer"
                  >
                    <option value="">⚙️ Voz predeterminada en Español</option>
                    {availableVoices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.name} ({v.lang})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Botón de Guardado */}
              <div className="pt-6">
                <button
                  id="btn-guardar-perfil"
                  onClick={() => {
                    guardarNombreYPerfil(nombre, nivel);
                    setView('dashboard');
                  }}
                  className="w-full flex items-center justify-center border-4 border-black bg-green-400 text-black hover:bg-green-500 font-extrabold text-2xl py-5 rounded-xl cursor-pointer min-h-[64px] transition-transform active:scale-95 shadow-md"
                  aria-label="Guardar mi configuración y pasar a los módulos"
                >
                  <span>Siguiente paso: Elegir qué estudiar</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =========================================
            VISTA 3: DASHBOARD PRINCIPAL (MÓDULOS)
            ========================================= */}
        {view === 'dashboard' && (
          <div className="space-y-8">
            {/* Saludo y nivel actual */}
            <div className="border-4 border-black bg-yellow-300 text-black p-6 md:p-8 rounded-2xl flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xl font-bold uppercase tracking-wider block">Panel de Aprendizaje de:</span>
                <span className="text-3xl font-black block">{nombre || 'Estudiante'}</span>
              </div>
              <div className="border-2 border-black bg-white px-4 py-2 rounded-lg text-black font-extrabold text-lg">
                Curso: <span className="underline underline-offset-4">{nivel}</span>
              </div>
            </div>

            {/* Módulos listados de forma Step-by-step super clara */}
            <div>
              <h2 className="font-sans font-black text-3xl text-black mb-6">
                Elegir el programa a estudiar hoy:
              </h2>

              <div className="space-y-6">
                {MODULOS.map((modulo) => {
                  const completadasNum = getCompletadasPorModulo(modulo.id);
                  const totalNum = LECCIONES.filter(l => l.modulo_id === modulo.id).length;
                  const porcentaje = getModuloProgresoPorcentaje(modulo.id);

                  return (
                    <article
                      key={modulo.id}
                      id={`card-modulo-${modulo.id}`}
                      className="border-4 border-black bg-white text-black p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-zinc-100 text-black flex items-center justify-center rounded-xl border-2 border-black shrink-0 mt-1">
                          {modulo.id === 'word' && <FileText className="w-9 h-9" />}
                          {modulo.id === 'excel' && <Table2 className="w-9 h-9" />}
                          {modulo.id === 'powerpoint' && <Presentation className="w-9 h-9" />}
                          {modulo.id === 'outlook' && <Mail className="w-9 h-9" />}
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-black">
                            {modulo.titulo}
                          </h3>
                          <p className={`text-gray-800 font-medium leading-relaxed mt-2 ${getFontSizeClass()}`}>
                            {modulo.descripcion}
                          </p>

                          {/* Medidor de Progreso */}
                          <div className="mt-4 flex flex-wrap items-center gap-4">
                            <span className="font-sans font-black text-lg text-zinc-800">
                              Progreso: {completadasNum} de {totalNum} lecciones ({porcentaje}%)
                            </span>
                            <div className="w-44 h-5 bg-gray-200 border-2 border-black rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-green-400 border-r border-black" 
                                style={{ width: `${porcentaje}%` }} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        id={`btn-estudiar-${modulo.id}`}
                        onClick={() => irAModulo(modulo.id)}
                        className={`w-full md:w-auto border-4 border-black bg-green-400 text-black hover:bg-green-500 font-black text-xl md:text-2xl px-8 py-4 rounded-xl min-h-[56px] transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2`}
                        aria-label={`Ingresar a estudiar el curso de: ${modulo.titulo}`}
                      >
                        <span>Estudiar</span>
                        <ChevronRight className="w-7 h-7 text-black" />
                      </button>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Ajuste extra */}
            <div className="text-center pt-4">
              <button
                id="btn-atras-perfil"
                onClick={() => {
                  setView('perfil');
                  reproducirVozGuia("Cargando sección de edición de perfil.");
                }}
                className="inline-flex items-center gap-2 border-4 border-black bg-white hover:bg-zinc-100 text-black font-extrabold px-6 py-4 rounded-xl min-h-[56px]"
                aria-label="Regresar y cambiar el nombre o el nivel actual"
              >
                <ArrowLeft className="w-6 h-6" />
                <span>Modificar mi nombre / nivel</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================
            VISTA 4: VISUALIZADOR DE LECCIÓN ACTIVA 
            ========================================= */}
        {view === 'leccion' && selectedModuloId && leccionesFiltradas.length > 0 && (
          <div>
            {/* Cabecera del Navegador de Lección */}
            <div className="mb-6 flex items-center justify-between">
              <button
                id="btn-volver-dashboard"
                onClick={() => {
                  setView('dashboard');
                  reproducirVozGuia("Volviendo al catálogo de módulos escolares.");
                }}
                className="flex items-center gap-2 border-4 border-black bg-white hover:bg-zinc-100 text-black font-extrabold text-lg px-5 py-3 rounded-xl min-h-[48px] cursor-pointer"
                aria-label="Volver atrás al menú principal"
              >
                <Home className="w-6 h-6 text-black" />
                <span>Menú Principal</span>
              </button>

              <div className={`font-bold text-lg ${isDarkMode ? 'text-zinc-200' : 'text-gray-700'}`}>
                Módulo:{' '}
                <span className="underline font-black">
                  {MODULOS.find(m => m.id === selectedModuloId)?.titulo}
                </span>
              </div>
            </div>

            {/* --- MAPA GENERAL DE LECCIONES DEL CURSO CON ATENCIÓN WCAG AAA --- */}
            <div className={`border-4 rounded-3xl p-5 mb-8 shadow-lg transition-colors ${
              isDarkMode ? 'border-zinc-700 bg-zinc-900 text-white' : 'border-black bg-white text-black'
            }`}>
              <div className="flex items-center justify-between border-b-2 border-dashed border-zinc-400 pb-3 mb-4 flex-wrap gap-2">
                <h3 className="font-sans font-black text-xl sm:text-2xl flex items-center gap-2">
                  <span>📋 Mapa del Curso: Lecciones Disponibles</span>
                </h3>
                <span className="text-sm font-extrabold uppercase bg-yellow-300 text-black px-2.5 py-1 rounded-lg border border-black">
                  {leccionesFiltradas.length} Lecciones
                </span>
              </div>
              <p className={`mb-4 font-semibold text-sm ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Haga click en cualquier lección de abajo para saltar directamente a ella, estudiarla o repetirla si desea practicar de nuevo.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {leccionesFiltradas.map((lec, idx) => {
                  const estaraCompletada = progreso[lec.id]?.completado;
                  const esLaActual = idx === currentLessonIndex;
                  
                  return (
                    <button
                      key={lec.id}
                      onClick={() => {
                        setCurrentLessonIndex(idx);
                        reproducirVozGuia(`Cargando Lección número ${idx + 1}: ${lec.titulo}. ${lec.concepto_clave || ''}`);
                        
                        // Desplazar suavemente al inicio del visualizador de la lección activa
                        setTimeout(() => {
                          const element = document.getElementById('inicio-leccion-foco');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            element.focus();
                          }
                        }, 100);
                      }}
                      className={`p-4 rounded-2xl border-4 text-left transition-all duration-150 active:scale-[0.98] cursor-pointer min-h-[56px] flex flex-col justify-between ${
                        esLaActual
                          ? (isDarkMode ? 'border-yellow-400 bg-zinc-950 text-white shadow-md ring-4 ring-yellow-400' : 'border-yellow-400 bg-yellow-50 text-black shadow-md ring-4 ring-yellow-400')
                          : estaraCompletada
                            ? (isDarkMode ? 'border-green-700 bg-emerald-950/20 text-white hover:bg-emerald-950/30' : 'border-green-600 bg-emerald-50 text-black hover:bg-emerald-100')
                            : (isDarkMode ? 'border-zinc-750 bg-zinc-850 text-white hover:bg-zinc-800' : 'border-zinc-300 bg-zinc-50 text-black hover:bg-zinc-150')
                      }`}
                      aria-label={`Lección ${idx + 1}: ${lec.titulo}. Status: ${estaraCompletada ? 'Terminada' : 'Pendiente'}`}
                    >
                      <div>
                        {/* Indicador de posición habitual */}
                        <div className="flex items-center justify-between mb-1.5 flex-wrap gap-1">
                          <span className={`font-mono text-xs font-black px-2 py-0.5 rounded-md border ${
                            esLaActual 
                              ? 'bg-yellow-400 text-black border-yellow-500' 
                              : isDarkMode ? 'bg-zinc-950 text-zinc-300 border-zinc-700' : 'bg-white text-zinc-700 border-zinc-300'
                          }`}>
                            Lección {idx + 1}
                          </span>
                          
                          {/* Status Badge */}
                          <span className={`font-sans text-[11px] font-black uppercase px-2 py-0.5 rounded-md border ${
                            estaraCompletada 
                              ? 'bg-green-400 text-black border-green-500' 
                              : isDarkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-400 shadow-xs' : 'bg-gray-100 text-gray-500 border-gray-300'
                          }`}>
                            {estaraCompletada ? '✅ Terminado' : '⏳ Pendiente'}
                          </span>
                        </div>
                        
                        <span className={`block font-black text-sm leading-tight ${
                          esLaActual ? (isDarkMode ? 'text-yellow-300' : 'text-black') : isDarkMode ? 'text-white' : 'text-zinc-900'
                        }`}>
                          {lec.titulo}
                        </span>
                      </div>
                      
                      {esLaActual && (
                        <div className={`mt-2 text-xs font-bold flex items-center gap-1 ${
                          isDarkMode ? 'text-yellow-400' : 'text-yellow-800'
                        }`}>
                          <span>👉 Estudiando ahora</span>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Anclaje para desplazamiento suave al inicio del visualizador de la lección activa */}
            <div id="inicio-leccion-foco" tabIndex={-1} className="scroll-mt-6 focus:outline-none" />

            {/* Impresión del Componente Reclamado */}
            <LessonContainer
              leccion={leccionesFiltradas[currentLessonIndex]}
              onCompletada={(id) => registrarProgresoLeccion(id)}
              onSiguiente={avanzarSiguienteLeccion}
              onAnterior={retrocederLeccion}
              progresoPrevio={progreso[leccionesFiltradas[currentLessonIndex].id]}
              fontSizeClass={getFontSizeClass()}
              isDarkMode={isDarkMode}
            />
          </div>
        )}

        {/* =========================================
            VISTA 5: FELICITACIONES POR MÓDULO COMPLETADO
            ========================================= */}
        {view === 'felicitaciones' && (
          <div className="border-[6px] border-black bg-white text-black p-8 md:p-14 rounded-3xl text-center shadow-xl">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 border-4 border-black rounded-full mb-6">
              <Award className="w-14 h-14 text-green-700" />
            </div>

            <h2 className="font-sans font-black text-4xl text-black leading-tight mb-4">
              ¡Lo lograste, {nombre || 'Estudiante'}!
            </h2>
            <p className={`text-zinc-800 leading-relaxed font-sans font-medium mb-8 ${getFontSizeClass()}`}>
              Completaste todas las lecciones del programa de{' '}
              <span className="font-bold underline">
                {MODULOS.find(m => m.id === selectedModuloId)?.titulo}
              </span>{' '}
              con extraordinario éxito técnico. ¡Sigue así y el uso de la computadora será pan comido!
            </p>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <button
                id="btn-felicidad-volver"
                onClick={() => {
                  setView('dashboard');
                  reproducirVozGuia("Cargando catálogo principal de lecciones.");
                }}
                className="w-full border-4 border-black bg-green-400 text-black hover:bg-green-500 font-extrabold text-2xl py-5 rounded-xl cursor-pointer min-h-[64px]"
                aria-label="Regresar al menú para ver otros cursos libres de ofimática"
              >
                Tomar otra materia
              </button>
              
              <button
                id="btn-felicidad-reiniciar"
                onClick={() => {
                  setProgreso({});
                  localStorage.removeItem('ofimatica_progreso');
                  setView('dashboard');
                  reproducirVozGuia("Progreso borrado correctamente. Listo para practicar otra vez.");
                }}
                className="w-full border-4 border-black bg-white hover:bg-zinc-100 text-black font-extrabold text-xl py-4 rounded-xl ml-0 cursor-pointer min-h-[56px] flex items-center justify-center gap-2"
                aria-label="Borrar el progreso para volver a practicar las lecciones de nuevo"
              >
                <RotateCcw className="w-5 h-5 text-black" />
                <span>Borrar progreso para re-practicar</span>
              </button>
            </div>
          </div>
        )}

      </main>

      {/* --- PIE DE PÁGINA ACCESIBLE --- */}
      <footer className="border-t-4 border-black bg-white text-black py-8 mt-16 px-6 text-center shadow-inner" role="contentinfo">
        <p className={`text-black font-semibold mb-2 ${getSubFontSizeClass()}`}>
          Plataforma de Estimulación de Ofimática para baja Visión.
        </p>
        <p className="font-mono text-sm text-gray-600">
          Diseño conforme a las Pautas de Accesibilidad al Contenido en la Web (WCAG 2.1) Nivel AAA.
        </p>
      </footer>
    </div>
  );
}
