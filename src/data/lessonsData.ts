import { Modulo, Leccion } from '../types';

export const MODULOS: Modulo[] = [
  {
    id: 'word',
    titulo: 'Escribir y Actas (Word)',
    descripcion: 'Aprende a acomodar la página, redactar actas comunales y cartas formales con letras legibles y elegantes.',
    icono: 'FileText',
  },
  {
    id: 'excel',
    titulo: 'Cuentas y Sede Social (Excel)',
    descripcion: 'Domina las casillas para ordenar listas de vecinos, controlar inventarios y sumar cuentas automáticamente.',
    icono: 'Table2',
  },
  {
    id: 'powerpoint',
    titulo: 'Presentaciones Visuales (PowerPoint)',
    descripcion: 'Dibuja tus ideas en láminas con letras grandes para asambleas y proyectos vecinales.',
    icono: 'Presentation',
  },
  {
    id: 'outlook',
    titulo: 'Correo del Centro Social (Outlook)',
    descripcion: 'Comunícate de manera formal enviando y respondiendo cartas electrónicas de forma segura.',
    icono: 'Mail',
  },
];

export const LECCIONES: Leccion[] = [
  // ==========================================
  // WORD - NIVEL 1: FUNCIONAL (BÁSICO)
  // ==========================================
  {
    id: 'word_b1_l1',
    modulo_id: 'word',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'El Entorno de Trabajo (Perder el miedo a la hoja)',
    descripcion_teorica: 'Al iniciar Word, observará una barra horizontal arriba llena de botones organizada en pestañas llamada Cinta de Opciones, y en el centro una hoja virtual en blanco. El regulador de Zoom en la esquina inferior derecha permite agrandar visualmente el papel sin alterar su tamaño real al imprimir.',
    explicacion_alternativa: 'Word simula su mesa de comedor con una hoja de papel de oficio limpia al centro. El tablero de opciones superior guarda hilos y lápices en cajones rotulados. La lupa de la esquina inferior derecha le permite acercar o alejar el papel para descansar la vista.',
    pasos_a_seguir: [
      'Abra Microsoft Word en su computadora real pulsando su ícono azul con una letra W blanca.',
      'Identifique el papel virtual en blanco con la barra vertical parpadeando llamada cursor de escritura.',
      'Localice la Cinta de Opciones en el borde superior llena de palabras (Inicio, Insertar, etc.).',
      'Vaya a la esquina inferior derecha y presione el signo de suma (+) del Zoom para agrandar visualmente la hoja.'
    ],
    pasos_alternativos: [
      'Si utiliza Word en el celular, explore el menú de edición rápida en la barra inferior.',
      'Ajuste el Zoom pellizcando la pantalla táctil con los dedos para enfocar el renglón.'
    ],
    tips_de_accesibilidad: 'Si le cuesta distinguir las pestañas superiores, presione la tecla Alt en su teclado real. Aparecerán letras de acceso rápido que le indican qué tocar.',
    checklist_validacion: [
      'Abrí Word y visualicé mi papel digital.',
      'Ubicé la Cinta de Opciones arriba.',
      'Encontré el regulador de Zoom en la barra inferior.',
      'Agrité el papel al 120% usando el signo "+".'
    ],
    sugerencias_descubrimiento: [
      "Haga doble click sobre 'Inicio' para replegar los botones y ganar más espacio visual; vuelva a dar doble click para fijarlos en pantalla."
    ],
    concepto_clave: 'Entender el espacio de trabajo básico antes de comenzar a pulsar botones.',
    ejercicio_practico: 'Entrar a Word en el computador físico, ubicar el zoom e inflar la página al 130%.',
    elementos_visuales: [
      { icono: 'cinta', etiqueta: 'Cinta de Opciones', descripcion: 'Soporte de botones superior.' },
      { icono: 'zoom', etiqueta: 'Lupa Zoom', descripcion: 'Esquina de ampliación visual.' }
    ]
  },
  {
    id: 'word_b1_l2',
    modulo_id: 'word',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Escribir y Autocorregir Ortografía',
    descripcion_teorica: 'Word acomoda el texto automáticamente en cascada al llegar al margen derecho. La tecla Enter solo debe pulsarse para cerrar párrafos. Cuando se tipea algo con faltas ortográficas, el programa lo subraya con una ondulación roja. Un clic secundario (derecho) sobre la palabra abrirá sugerencias de reemplazo.',
    explicacion_alternativa: 'Olvídese del pasador de carro de las viejas máquinas de escribir: el texto fluye solo. Si comete un traspié en las letras, Word colocará un cordón rojo abajo; es como un corrector que le avisa con amor para que haga clic derecho en la palabra y elija la opción bien escrita.',
    pasos_a_seguir: [
      'Sitúese en su documento real y teclee despacio: "La asamblea aprobo la cuenta" omitiendo la tilde.',
      'Vea el subrayado ondulado rojo debajo de "aprobo".',
      'Mueva el puntero del mouse justo sobre la palabra roja y presione el botón derecho.',
      'Haga un click izquierdo sobre la palabra correcta "aprobó" en la ventana emergente.',
      'Pulse la tecla Enter al final para saltar de renglón limpiamente.'
    ],
    pasos_alternativos: [
      'Utilice las flechas del teclado para ubicar el cursor en la palabra incorrecta.',
      'Presione la tecla de menú alternativo en su teclado real para invocar la corrección ortográfica de Word.'
    ],
    tips_de_accesibilidad: 'La tecla retroceso (arriba del Enter, con flecha a la izquierda) sirve para deshacer letras erróneas rápidamente sin tocar el mouse.',
    checklist_validacion: [
      'Redacté la frase de prueba en el papel.',
      'Ubiqué la señalización ondulada roja.',
      'Oprimí el botón derecho sobre la palabra.',
      'Actualicé el término usando la sugerencia corregida.',
      'Usé la tecla Enter para descender un renglón.'
    ],
    concepto_clave: 'Aprovechar la revisión ortográfica básica y usar adecuadamente la tecla Enter para separar párrafos.',
    ejercicio_practico: 'Escribir la frase mal tipeada de forma deliberada y sanarla mediante el menú secundario del mouse.',
    elementos_visuales: [
      { icono: 'teclado', etiqueta: 'Tecla Enter y Retroceso', descripcion: 'Foco de separación y borrado.' },
      { icono: 'mouse', etiqueta: 'Clic Derecho', descripcion: 'Acción para invocar soluciones rápidas.' }
    ]
  },
  {
    id: 'word_b1_l3',
    modulo_id: 'word',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Destacar Acuerdos: Formato Esencial',
    descripcion_teorica: 'Para evitar documentos monótonos, alteramos la apariencia del texto. Negrita (N) engrosa el trazo para los títulos, Cursiva (K o I) inclina las letras en pasajes secundarios, y Subrayado (S) añade una línea inferior a los compromisos institucionales. El Selector de Fuente regula el tamaño numérico de las letras.',
    explicacion_alternativa: 'Es como remarcar un cartel comunitario de madera. Los títulos principales se visten de tinta negra gruesa (Negrita) y se agrandan numéricamente con el Selector de Letra para que el transeúnte los visualice desde lejos.',
    pasos_a_seguir: [
      'Teclee en su Word: "ACUERDO COMUNAL 2026: PINTURA DE SEDE".',
      'Sombreé el texto completo manteniendo el click izquierdo apretado y deslizando el cursor encima.',
      'Vaya a la pestaña "Inicio", localice la casilla de número de tamaño de letra y escoja "16".',
      'Haga click en los botones "N" (Negrita) y "S" (Subrayado) del cabezal superior.',
      'Quite el sombreado cliqueando en una zona vacía para contemplar los acuerdos perfectamente legibles.'
    ],
    pasos_alternativos: [
      'Para sombrear sin mouse, pulse Shift y desplácese con las flechas direccionales del teclado real.',
      'Aplique formato veloz usando atajos: Control + N activa la Negrita y Control + S activa el Subrayado.'
    ],
    tips_de_accesibilidad: 'La alineación se ajusta en el bloque Párrafo. El botón "Centrar" (o Control + T) es maravilloso para equilibrar portadas de reglamentos vecinales.',
    checklist_validacion: [
      'Sombreado correcto del título en la hoja virtual.',
      'Modificación del calibre numérico a tamaño 16.',
      'Activación del trazo en Negrita.',
      'Incorporación de la línea de Subrayado inferior.',
      'Acentuación correcta de la legibilidad de la cabecera.'
    ],
    concepto_clave: 'La jerarquía visual aplicada a través de estilos de fuente para comunicar con orden institucional.',
    ejercicio_practico: 'En su Word real, digite el título del acta y aplíquele Negrita, tamaño 16 y alineación centrada.',
    elementos_visuales: [
      { icono: 'fuente', etiqueta: 'Casillero Numérico', descripcion: 'Amplía o reduce el tamaño del carácter.' },
      { icono: 'cinta', etiqueta: 'Botones N, K, S', descripcion: 'Controles superiores de estilo tipográfico.' }
    ]
  },

  // ==========================================
  // WORD - NIVEL 2: ADMINISTRATIVO (INTERMEDIO)
  // ==========================================
  {
    id: 'word_n2_l1',
    modulo_id: 'word',
    orden: 4,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Word',
    titulo: 'Estructurar Índices y Tablas de Contenido Automáticas',
    descripcion_teorica: 'En reglamentos vecinales extensos, teclear índices con puntos y páginas a mano es propenso a desconfigurarse. Word automatiza esto: si rotula los capítulos usando Estilos de Título ("Título 1" o "Título 2") en Inicio, el programa entenderá la jerarquía interna y compilará una Tabla de Contenido en un solo clic, la cual se actualiza sola al desplazar texto.',
    explicacion_alternativa: 'Coloque letreros de madera claros a cada habitación de la sede ("Cocina", "Salón"). Al final, una pizarra matriz en la entrada lee esas señales y lista automáticamente dónde está cada aula. Si traslada una sección, el listado se reajusta pulsando el botón Actualizar.',
    pasos_a_seguir: [
      'En su computadora, escriba: "TÍTULO I: DE LOS SOCIOS" en el primer renglón.',
      'Vaya a la pestaña "Inicio", busque el panel de "Estilos" y haga click en "Título 1" (el formato cambiará a azul y grande).',
      'Baje unas líneas con Enter, declare "TÍTULO II: DE LAS CUOTAS" y asígnele también el estilo "Título 1".',
      'Muévase al principio absoluto del documento, vaya a la pestaña "Referencias" arriba a la izquierda.',
      'Haga click en el botón "Tabla de contenido" y seleccione el primer formato automático disponible de la oferta.'
    ],
    pasos_alternativos: [
      'Si redacta subcapítulos (como "Sección 1.1"), sombréelos y colóqueles "Título 2" para que aniden hacia la derecha.',
      'Haga un clic derecho en medio del índice y presione "Actualizar campos" -> "Actualizar toda la tabla" para recalcular páginas.'
    ],
    tips_de_accesibilidad: 'La jerarquía estructural por estilos es vital para que las personas ciegas que usan lectores de pantalla salten directamente de capítulo en capítulo sin leer cada línea.',
    checklist_validacion: [
      'Redacté diversos enunciados de capítulo en páginas distintas.',
      'Apliqué la marca formal de Estilo "Título 1" a cada título.',
      'Posicioné el cursor en la cabecera o portada del acta.',
      'Fui al menú Referencias e instalé el índice automatizado.',
      'Verifiqué la distribución simétrica de números de página.'
    ],
    concepto_clave: 'Usar estilos para sembrar dependencias jerárquicas y activar tablas de contenido dinámicas.',
    ejercicio_practico: 'Consolidar una maqueta de reglamento doméstico con dos títulos y su índice de referencia formal.',
    elementos_visuales: [
      { icono: 'estilos', etiqueta: 'Vitrina de Estilos', descripcion: 'Panel superior con formatos prediseñados.' },
      { icono: 'indice', etiqueta: 'Tabla de Contenido', descripcion: 'Generador de índices en Referencias.' }
    ]
  },
  {
    id: 'word_n2_l2',
    modulo_id: 'word',
    orden: 5,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Word',
    titulo: 'Diseño de Página: Saltos de Sección y Hojas Horizontales',
    descripcion_teorica: 'El error común al querer que una hoja sea horizontal (para una tabla ancha) es voltear todo el documento. Word lo impide usando "Saltos de Sección". Al separar el documento en secciones independientes, podemos ordenar que solo una hoja central rote horizontalmente, manteniendo las actas verticales.',
    explicacion_alternativa: 'Es como separar los cuadernillos de la junta en carpetas independientes. De esta manera, el reglamento se escribe parado (vertical) en la primera carpeta, pero el plano de obras se dibuja echado (horizontal) en la segunda carpeta sin desordenar la encuadernación.',
    pasos_a_seguir: [
      'En Word real, párese al final del texto de su primera hoja.',
      'Vaya a la pestaña "Disposición" (o "Diseño de página" dependiendo de su versión de Word).',
      'Haga clic en el botón "Saltos" y elija la alternativa "Página siguiente" en el bloque de Saltos de sección.',
      'Con el cursor situado en la nueva página naciente, pulse sobre el botón "Orientación" (al lado de Saltos).',
      'Elija la opción "Horizontal". ¡Observe cómo solo la segunda hoja se voltea, ideal para vaciar censos o tablas anchas!'
    ],
    pasos_alternativos: [
      'Haga clic en "Márgenes" -> "Márgenes personalizados" abajo.',
      'Seleccione "Horizontal" en orientación y escoja "De aquí en adelante" en el menú desplegable inferior para dividir la dirección.'
    ],
    tips_de_accesibilidad: 'La página acostada da un respiro a usuarios que analizan presupuestos complejos, ya que asimila mejor letras de gran calibre y grillas detalladas.',
    checklist_validacion: [
      'Establecí texto regular en mi primera página.',
      'Generé un Salto de Sección con destino "Página Siguiente".',
      'Ubiqué el cursor sobre la sección del Salto creado.',
      'Oprimí Orientación cambiando la dirección de fisonomía a Horizontal.',
      'Verifiqué la alternancia vertical/horizontal en la miniatura.'
    ],
    concepto_clave: 'Dividir documentos extensos en secciones estancas para aplicar geometrías independientes.',
    ejercicio_practico: 'Maquetar un dossier formal que alterne una hoja vertical de carta y una central horizontal para inventario.',
    elementos_visuales: [
      { icono: 'saltos', etiqueta: 'Saltos de Sección', descripcion: 'Divisores en el menú Disposición.' },
      { icono: 'orientar', etiqueta: 'Orientación de Hoja', descripcion: 'Interruptor de sentido vertical u horizontal.' }
    ]
  },
  {
    id: 'word_n2_l3',
    modulo_id: 'word',
    orden: 6,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Word',
    titulo: 'Encabezados y Números de Página Profesional',
    descripcion_teorica: 'Tener membretes oficiales con el logo y números folios continuos al pie de página es clave en la formalidad institucional. Se insertan desde la pestaña Insertar. Al hacer doble clic en el extremo de cualquier borde de hoja, se ingresa al editor flotante de Encabezado/Pie, el cual distribuye el contenido a lo largo de todo el documento.',
    explicacion_alternativa: 'Imagínese estampar la marca legal de la sede social arriba y un folio correlativo abajo en cada una de sus hojas. En vez de tipear "Pág 1" y "Pág 2" a pulso exponiéndose a roturas, la computadora se encarga de estampar las correlaciones de manera precisa.',
    pasos_a_seguir: [
      'Vaya a la barra alta en la pestaña de herramientas de "Insertar".',
      'Pulse el botón "Encabezado" del bloque central y escoja un diseño sencillo para tipear "Junta de Vecinos El Progreso".',
      'Vuelva a "Insertar", haga click en el disparador "Número de página" y elija "Final de la página" -> "Formato simple".',
      'Observe la inserción dinámica del número correspondiente a la hoja.',
      'Cierre el editor oprimiendo la cruz roja "Cerrar encabezado y pie" ubicada en el cabezal superior derecho.'
    ],
    pasos_alternativos: [
      'Abra el área secreta simplemente haciendo un doble click rápido con el mouse en el filo superior de su hoja.',
      'Active la casilla "Primera página diferente" en la barra superior si desea ocultar folios en la portada principal.'
    ],
    tips_de_accesibilidad: 'Use números de página alineados a la derecha u ocultos al interior para amparar el arrastre de los dedos en lecturas físicas sobre escritorios vecinales.',
    checklist_validacion: [
      'Navegué al panel correspondiente superior a través de Insertar.',
      'Registré el membrete vecinal oficial en la cabecera alta.',
      'Inserté el formato correlativo numérico automático por pie de página.',
      'Utilicé la opción de clausura para restablecer la fisonomía de la hoja.',
      'Comprobé que al añadir hojas, los folios se elevan automáticamente.'
    ],
    concepto_clave: 'Implantar información constante y números folios correlativos en los márgenes de resguardo espacial del papel virtual.',
    ejercicio_practico: 'Sellar un membrete con su nombre vecinal en el encabezado alto y encargar el número secuencial automático abajo.',
    elementos_visuales: [
      { icono: 'encabezado', etiqueta: 'Encabezado y Pie', descripcion: 'Bordes grises superiores e inferiores.' },
      { icono: 'numeros', etiqueta: 'Número de Página', descripcion: 'Asignador de cifras secuenciales en Insertar.' }
    ]
  },

  // ==========================================
  // WORD - NIVEL 3: RESOLUCIÓN DE PROBLEMAS (AVANZADO)
  // ==========================================
  {
    id: 'word_n3_l1',
    modulo_id: 'word',
    orden: 7,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Word',
    titulo: 'Auxilio: Sanar Copias ante Cortes de Luz',
    descripcion_teorica: 'Si ocurre un corte de luz o cerramos un documento accidentalmente sin guardar, no todo está perdido. Word dispone de Auto-recuperación interna: borra el pánico almacenando borradores sigilosos en segundo plano cada 10 minutos. Se rescatan desde el panel de resguardo maestro de Información.',
    explicacion_alternativa: 'Es idéntico a que un golpe de viento sople los registros de asamblea por la ventana. No todo está destruido; Word tiene un baúl de reserva donde conserva borradores transitorios con la hora exacta para restaurarlos.',
    pasos_a_seguir: [
      'Inicie su Word real en blanco para actuar de urgencias.',
      'Haga clic en la pestaña azul del menú general de "Archivo" en la esquina de arriba.',
      'Tilde la pestaña de estado denominada "Información".',
      'Active el botón "Administrar documento" (identificado con el dibujo de una hoja y engranaje).',
      'Haga clic izquierdo en "Recuperar documentos sin guardar". Elija el archivo reciente con extensión .asd y púlselo.'
    ],
    pasos_alternativos: [
      'Al iniciar Word tras un apagón, busque el panel "Recuperación de documentos" que asoma en el margen izquierdo.',
      'Escoja la versión temporal resguardada haciendo click y presione el comando Control + G de inmediato para guardarlo formalmente.'
    ],
    tips_de_accesibilidad: 'Configure Word para resguardar copias seguras más rápido: vaya a Archivo -> Opciones -> Guardar, y baje la frecuencia del temporizador de Auto-recuperación de 10 a 5 minutos.',
    checklist_validacion: [
      'Entré a Word con un archivo vacío tras el corte accidental.',
      'Activé el menú Archivo y navegué a Información.',
      'Oprimí el comando de la pestaña Administración de Documentos.',
      'Elegí la opción de restauración de borradores temporales.',
      'Recuperé y guardé firmemente el escrito en una carpeta segura.'
    ],
    concepto_clave: 'Localizar los directorios huérfanos de autorrecuperación para mitigar mermas de actas importantes.',
    ejercicio_practico: 'Rastrear el baúl secreto de documentos transitorios utilizando las Palancas del menú Archivo para consolidar seguridad.',
    elementos_visuales: [
      { icono: 'engranaje', etiqueta: 'Administrar Documento', descripcion: 'Consola de resguardo dentro de Información.' },
      { icono: 'archivo', etiqueta: 'Borrador Temporal (.asd)', descripcion: 'Extensión oculta de recuperación.' }
    ]
  },
  {
    id: 'word_n3_l2',
    modulo_id: 'word',
    orden: 8,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Word',
    titulo: 'Rescatar Pegados Sucios de Textos de Internet',
    descripcion_teorica: 'Al copiar extractos de boletines o noticias municipales desde el navegador web y pegarlos en Word directly, es usual que el texto venga arrastrando fondos negros, letras deformadas, hipervínculos extraños y desajustes rebeldes. Para normalizar estos descalabros de inmediato, Word cuenta con las "Opciones de Pegado" o el botón limpiador de formato.',
    explicacion_alternativa: 'Es igual que entrar a la sede con los zapatos llenos de barro tras una lluvia copiosa. Pegar el texto directamente llena su pulcro salón de manchas de formato. Usar "Pegar solo texto" es como sacudirse los pies en el felpudo para que las letras entren limpias.',
    pasos_a_seguir: [
      'Abra Word y simule copiar texto desde internet o un documento externo.',
      'Al presionar pegar (hacer Control + V), localice la pestañita flotante pequeña de "Pegar" (Ctrl) que asoma abajo del texto.',
      'Haga un click izquierdo en ella y elija el ícono de la tabla con una letra "A" llamado "Mantener solo texto".',
      'Observe el milagro: el texto elimina toda suciedad visual y adopta armoniosamente el calibre limpio de su hoja.',
      'Si ya pegó desastrosamente, tilde el texto sucio y presione la mini-goma de borrar "Borrar todo el formato" arriba en Inicio.'
    ],
    pasos_alternativos: [
      'En lugar de Control + V, haga clic derecho firme en el papel de Word vacío.',
      'En las opciones visuales de pegado que se despliegan en el menú emergente, pulse de inmediato el botón de la "A" grande.'
    ],
    tips_de_accesibilidad: 'La limpieza de formatos remueve los enlaces azules parpadeantes invisibles que vuelven locos a los lectores auditivos de audífono.',
    checklist_validacion: [
      'Incrusté texto copiado de fuente externa.',
      'Identifiqué la burbuja de resguardo flotante de pegado.',
      'Tildé la opción "Mantener solo texto" representada por la letra A.',
      'Removí descalabros de interlineados y fondos negros.',
      'Utilicé la goma de borrar formato en Inicio ante rezagos rebeldes.'
    ],
    concepto_clave: 'Intervenir el portapapeles del computador para amoldar la información de origen a la tipografía de destino.',
    ejercicio_practico: 'Importar un texto sucio y someterlo al tratamiento pulcro de la letra A libre de formatos molestos.',
    elementos_visuales: [
      { icono: 'pegado', etiqueta: 'Burbuja Flotante Ctrl', descripcion: 'Tratamiento dinámico para amoldar textos.' },
      { icono: 'borrador', etiqueta: 'Goma de Borrar Formato', descripcion: 'Herramienta de reseteo en el grupo Fuente.' }
    ]
  },
  {
    id: 'word_n3_l3',
    modulo_id: 'word',
    orden: 9,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Word',
    titulo: 'Despachos Masivos: Combinar Correspondencia',
    descripcion_teorica: 'Cuando la junta directiva necesita enviar citaciones personalizadas con nombre, dirección y deudas a 50 socios diferentes, redactar 50 cartas a mano es agotador. Word soluciona esta molestia con "Combinar correspondencia", vinculando una plantilla fija de carta a una base de datos de Excel para emitir las copias en un solo segundo.',
    explicacion_alternativa: 'Construya una única plantilla con casilleros en blanco ("Estimado/a [Nombre]"). Luego, deje que el robot de Word lea el libro de registros de Excel, pegue cada nombre en los casilleros vacíos y fabrique las 50 cartas personalizadas de manera instantánea y ordenada.',
    pasos_a_seguir: [
      'Abra su Word real y redacte: "CITACIÓN DE ASAMBLEA: Estimado [Socio], se le invita a la cita del viernes".',
      'Vaya a la pestaña "Correspondencia" arriba en la Cinta de Opciones.',
      'Oprima el botón "Seleccionar destinatarios" y elija "Usar una lista existente...".',
      'Examine su archivo Excel real que contiene el registro de sus vecinos y haga click en Abrir.',
      'Sombréelo de descarte en el texto de Word, pulse "Insertar campo combinado" arriba y escoja "Socio". Oprima "Finalizar y combinar" -> "Editar documentos individuales" para ver sus cartas generadas automáticamente.'
    ],
    pasos_alternativos: [
      'Siga la pauta paso a paso con el "Asistente para combinar correspondencia" en el lateral derecho.',
      'Revise los borradores en pantalla con la pestaña "Vista previa de resultados" para confirmar que los nombres se cruzan impecablemente.'
    ],
    tips_de_accesibilidad: 'La alineación de campos combinados debe resguardar holguras espaciales marcadas para que las cartas no se sobrepongan al albergar apellidos excesivamente extensos.',
    checklist_validacion: [
      'Redacté la plantilla o armazón fijo de la correspondencia.',
      'Vinculé con éxito una planilla de Excel externa mediante correspondencia.',
      'Asigné marcadores de campos combinados en las posiciones deseadas.',
      'Efectué la inspección inicial con la vista interactiva previa.',
      'Resolví la combinación de corrido generando el bloque unificado de cartas.'
    ],
    concepto_clave: 'Vincular bases relacionales u hojas calculadas a manuscritos base para compilar lotes personalizados.',
    ejercicio_practico: 'Configurar una plantilla de cobro vecinal cruzada con marcas dinámicas de nombres por correspondencia.',
    elementos_visuales: [
      { icono: 'correo', etiqueta: 'Pestaña Correspondencia', descripcion: 'Ubicación de comandos masivos.' },
      { icono: 'datos', etiqueta: 'Campo Combinado', descripcion: 'Inyecciones dinámicas de la planilla de Excel.' }
    ]
  },

  // ==========================================
  // EXCEL - NIVEL 1: FUNCIONAL (BÁSICO)
  // ==========================================
  {
    id: 'excel_n1_l1',
    modulo_id: 'excel',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'La Sede Social en Cuadrícula (Perder el miedo a Excel)',
    descripcion_teorica: 'Excel no es un procesador de cartas, sino una planilla cuadriculada. Las columnas se identifican con letras (A, B, C...) de manera vertical, y las filas con números horizontales (1, 2, 3...). Al cruce de una columna y una fila se le llama Celda, representada por su coordenadas, por ejemplo, "A1".',
    explicacion_alternativa: 'Mire a Excel como el estillero o casillero de orden de la Sede. Las hileras de vasos van marcadas con letras en vertical, y los estantes de abajo con números. Si le digo que busque los clavos en "B2", usted va derechito al estante 2 de la hilera B sin titubear. ¡Es un mapa impecable!',
    pasos_a_seguir: [
      'Abra su programa Microsoft Excel real (ícono verde con una letra X blanca en su escritorio).',
      'Haga click en "Libro en blanco" y mire el mosaico interminable de casilleros rectangulares.',
      'Haga click en una casilla al azar y fije su mirada arriba a la izquierda: el "Cuadro de nombres" le dirá en qué coordenadas está parado (ej. C3).',
      'Escriba una frase sencilla y presione Enter. El cursor saltará a la celda de abajo inmediatamente.'
    ],
    pasos_alternativos: [
      'Desplácese usando las flechas de dirección de su teclado físico para saltar entre bloques de celdas.',
      'Si se asoma al Excel web, note que las planillas cuadriculadas se manejan idéntico a las de computadora.'
    ],
    tips_de_accesibilidad: 'La celda seleccionada se delinea con un trazo negro firme. Si la vista se le cansa, use el regulador de Zoom en la esquina lateral derecha alta para inflar el tamaño de la cuadrícula.',
    checklist_validacion: [
      'Abrí un libro vacío de Excel.',
      'Identifiqué las Columnas por letra superior.',
      'Identifiqué las Filas por número de contrafuerte.',
      'Hice clic seleccionando la celda B3.',
      'Comprendí la visualización de coordenadas del programa.'
    ],
    concepto_clave: 'Identificar las coordenadas básicas (Celdas) para orientar el ingreso en la planilla de cálculo.',
    ejercicio_practico: 'Moverse a la celda D4 en su Excel real, tipear la palabra "TESORERÍA" y presionar Enter.',
    elementos_visuales: [
      { icono: 'cuadrícula', etiqueta: 'Coordenadas Celda', descripcion: 'Fusión de letra de columna y número de fila.' },
      { icono: 'zoom', etiqueta: 'Zoom Inferior', descripcion: 'Regulador de aumento espacial de grilla.' }
    ]
  },
  {
    id: 'excel_n1_l2',
    modulo_id: 'excel',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'El Inventario de la Sede y Columnas Cortadas',
    descripcion_teorica: 'Al redactar listas largas de inventario en Excel, es usual que las frases largas se asomen a la celda del vecino o se corten de forma desprolija. Esto sucede porque el ancho original viene estandarizado. Para sanar esto de forma impecable, basta con amoldar el ancho de columna haciendo un doble clic rápido en la frontera divisoria superior.',
    explicacion_alternativa: 'Es igual que apilar cajas de cartón en los estantes de la junta. Si pone un cajón muy ancho en una gaveta angosta, este sobresale estorbando el paso de las vecinas. Debemos ensanchar la gaveta lateralmente para que todo el cajón calce de manera segura y holgada.',
    pasos_a_seguir: [
      'En la columna A, escriba en A2: "Mesas de Madera Grandes" y en B2 escriba el número "15".',
      'Observe cómo el texto parece cortado o asomado en la columna de los números.',
      'Dirija su mouse arriba a la franja gris de letras divisoria, justo en la línea frontera entre la letra "A" y la "B". Es cursor se volverá una cruz con dos flechas.',
      'Haga un doble click izquierdo veloz.'
    ],
    pasos_alternativos: [
      'Si prefiere ajustar las medidas sin ratón, arrastre la línea divisoria a pulso hacia la derecha hasta tapizar la frase.',
      'Tilde la celda, vaya a la pestaña Inicio superior y pulse sobre la herramienta "Ajustar texto" si desea que la frase quepa dividiéndose en dos renglones.'
    ],
    tips_de_accesibilidad: 'Cuidar que los enunciados quepan de corrido previene la superposición de datos confidenciales y resguarda la legibilidad para coordinadores vecinales mayores.',
    checklist_validacion: [
      'Completé un escrito extenso descriptivo en la celda A2.',
      'Ubicé la cabecera divisoria gris entre columnas.',
      'Avisté la fisonomía especial de cruz táctil de frontera.',
      'Efectué el doble click para redimensionar automáticamente la fila.',
      'Confirmé que no hay textos recortados o incompletos.'
    ],
    concepto_clave: 'Adecuar la fisonomía bidimensional de la grilla para asegurar la correcta lectura integral de inventarios.',
    ejercicio_practico: 'Crear una lista piloto de 3 insumos de sede y rectificar los cortes aplicando el doble click de frontera.',
    elementos_visuales: [
      { icono: 'ancho', etiqueta: 'Frontera de Columnas', descripcion: 'Lugar divisorio gris de cabecera alta.' },
      { icono: 'ajustar', etiqueta: 'Ajustar Texto', descripcion: 'Opción superior que fragmenta renglones en celdas.' }
    ]
  },
  {
    id: 'excel_n1_l3',
    modulo_id: 'excel',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'Fórmulas de Caja: Sumas y Autosumas Rápidas',
    descripcion_teorica: 'El poder absoluto de Excel radica en calcular solo. Para lograr que una celda resuelva operaciones matemáticas, debemos teclear obligatoriamente su gran llave de arranque: el signo igual (=) al inicio de todo renglón. Sin el igual, Excel considerará su texto como un párrafo común de lectura.',
    explicacion_alternativa: 'Imagínese sentar a la tesorera a resolver el libro de egresos. Si usted solo le escribe la lista "200 + 300", ella la leerá de corrido como lectura. Pero si le da la orden formal: "Suma lo siguiente, es decir =", ella sacará el lápiz en un santiamén dándole el resultado en un segundo.',
    pasos_a_seguir: [
      'En su hoja de Excel real, escriba en A2 el valor "1500" y en A3 el valor "2500" (recaudaciones de cuotas).',
      'Haga click en la celda A4 (donde verá nacer el resultado total).',
      'Digite en su teclado: `=A2+A3` y pulse la tecla Enter.',
      'Contemple el fantástico nacimiento del número "4000".',
      'Si tiene una hilera larga, sombréela completa, vaya a la pestaña Inicio en la esquina derecha alta y pulse el gran botón "Autosuma" (con la letra griega Sigma Σ).'
    ],
    pasos_alternativos: [
      'Pulse la tecla abreviada Alt + Shift + = (o Alt + =) para activar la Autosuma de corrido en su teclado real.',
      'Modifique el valor original de A2 cambiando 1500 por 2000. ¡Sienta el placer de ver cómo el resultado en A4 se recalcula solo!'
    ],
    tips_de_accesibilidad: 'La función Autosuma automatizada reduce a cero la fatiga tipográfica al suprimir tener que tipear coordenadas una a una en actas de contabilidad vecinal.',
    checklist_validacion: [
      'Cargué dos cifras numéricas en celdas consecutivas.',
      'Inicie la declaración en la celda de salida con el signo igual (=).',
      'Acoplé las coordenadas de manera aditiva (=A2+A3).',
      'Oprimí Enter observando el cálculo en vivo.',
      'Sometí a prueba el botón institucional Autosuma.'
    ],
    concepto_clave: 'Activar el motor de cálculo relacional de celdas utilizando el signo igual como interruptor.',
    ejercicio_practico: 'Montar un flujo rudimentario de gastos (agua, luz) y totalizar de forma automatizada usando Autosuma.',
    elementos_visuales: [
      { icono: 'autosuma', etiqueta: 'Botón Autosuma Σ', descripcion: 'Comando de totalización veloz en Inicio.' },
      { icono: 'igual', etiqueta: 'Signo Igual', descripcion: 'La gran llave rítmica que desata los cómputos.' }
    ]
  },

  // ==========================================
  // EXCEL - NIVEL 2: ADMINISTRATIVO (INTERMEDIO)
  // ==========================================
  {
    id: 'excel_n2_l1',
    modulo_id: 'excel',
    orden: 4,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Excel',
    titulo: 'Enlazar Datos con la Fórmula BUSCARV',
    descripcion_teorica: 'Cuando la lista de socios del centro del barrio supera las 200 almas, buscar el teléfono de un vecino de corrido deslizando los ojos hilera por hilera es agotador. Excel posee el ayudante "BUSCARV" (búsqueda vertical). Con esta celda inteligente, al escribir el nombre del socio en una celda base, el programa viaja de inmediato hacia abajo, toma su teléfono correlativo y lo entrega en pantalla.',
    explicacion_alternativa: 'Piense en BUSCARV como un mandadero veloz e incansable de la sede. Usted se sienta cómodamente y le ordena: "Busca a doña María Martínez en el archivador principal, mira qué teléfono tiene asignado en su hilera y dímelo de inmediato". El mandadero tardará una milésima de segundo en darle el dato.',
    pasos_a_seguir: [
      'Monte una tabla simple: Nombres en la Columna A (A2 a A4) y Teléfonos en la Columna B (B2 a B4).',
      'Haga click en una casilla en blanco para consulta (ej. D2) donde ingresará el nombre de la persona que desea buscar.',
      'Haga click en la celda de al lado (E2) y digite: `=BUSCARV(D2; A2:B4; 2; FALSO)` (reemplace puntos y comas por comas si su Excel es en inglés).',
      'Pulse Enter. Visualizará el código transitorio `#N/D` (o `#N/A`), el cual le avisa que la celda de consulta D2 está vacía.',
      'Digite en D2 el nombre exacto de uno de sus vecinos registrados y mire el milagro del número telefónico.'
    ],
    pasos_alternativos: [
      'Si su Excel es moderno o de Office 365, use la fórmula evolucionada `=BUSCARX(D2; A2:A4; B2:B4)`, que no requiere indicar el número de columna.',
      'Utilice el asistente de fórmulas "Insertar Función" (fx) de la barra superior para rellenar los parámetros con ayuda guiada paso a paso.'
    ],
    tips_de_accesibilidad: 'La palabra "FALSO" al final de la fórmula le ordena a Excel que busque solo coincidencias exactas del nombre, evitando cruces con vecinos de nombres homónimos.',
    checklist_validacion: [
      'Establecí una base limpia con nombres a la izquierda y datos a la derecha.',
      'Elegí una coordenada en blanco para teclear la consulta vecinal.',
      'Formulé la sintaxis BUSCARV apuntando a mi base de celdas.',
      'Ingresé la palabra clave FALSO para resguardar la precisión de emparejamiento.',
      'Validé que al ingresar el nombre del socio, Excel devuelva su teléfono exacto.'
    ],
    concepto_clave: 'Emparejar bases dispersas de forma relacional y estructurada usando índices coincidentes y precisos.',
    ejercicio_practico: 'Crear un buscador vecinal de cuotas vencidas aplicando de corrido el algoritmo de búsqueda BUSCARV.',
    elementos_visuales: [
      { icono: 'cros', etiqueta: 'Coordenada de Entrada', descripcion: 'Casillero destinado a digitar el nombre del vecino.' },
      { icono: 'formula', etiqueta: 'Sintaxis BUSCARV', descripcion: 'La fórmula relacional digitada en la barra alta.' }
    ]
  },
  {
    id: 'excel_n2_l2',
    modulo_id: 'excel',
    orden: 5,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Excel',
    titulo: 'Pintar de Forma Inteligente: Formato Condicional',
    descripcion_teorica: 'En un censo masivo de deudas vecinales, analizar cifra por cifra para ver quién está al día y quién debe cuotas desgasta la vista de la directiva de la junta de vecinos. La herramienta "Formato Condicional" soluciona esto de raíz: le ordena a Excel monitorear las cifras y teñir de rojo brillante a los morosos y de verde a los al día, de manera 100% automática.',
    explicacion_alternativa: 'Es como mandar al alguacil de la junta con un marcador fluorescente rojo y verde, indicándole: "Recorre el padrón y raya de inmediato con color rojo a cualquiera que deba más de $5,000 mil pesos". El marcador es digital y se pinta solo en pantalla.',
    pasos_a_seguir: [
      'Seleccione la hilera de celdas que contienen sus montos económicos de deudas.',
      'Vaya a la pestaña "Inicio" del cabezal superior y localice el botón "Formato Condicional" (suele tener una cuadrícula con colores).',
      'Tilde en "Reglas para resaltar celdas" -> "Es mayor que...".',
      'Escriba "0" en la casilla técnica del valor y cambie el relleno preestablecido a "Relleno rojo claro con texto rojo oscuro".',
      'Pulse en Aceptar y mire cómo las deudas se encienden solitas en rojo de alerta.'
    ],
    pasos_alternativos: [
      'Puede aplicar condiciones para textos: elija "Texto que contiene" y tipee "PAGADO" para encintar registros con color verde de aprobación.',
      'Pulse en "Borrar reglas" en el mismo listado maestro para reiniciar a color blanco original de resguardo.'
    ],
    tips_de_accesibilidad: 'Asigne rellenos suaves con textos oscuros para amoldarse a los lineamientos WCAG de contraste visual nítido y de alto relieve que eviten la fatiga.',
    checklist_validacion: [
      'Sometí a selección las cifras de cobros en pantalla.',
      'Ubicé la consola interactiva de Formato Condicional de Inicio.',
      'Definí el umbral aritmético (>0) para desatar la alerta de color.',
      'Configure la apariencia a rojo satinado con textos oscuros.',
      'Comprobé que al variar un saldo, el color se actualice al instante.'
    ],
    concepto_clave: 'Asociar rasgos visuales de realce (colores, fuentes) al valor dinámico del casillero para agilizar auditorías rápidas.',
    ejercicio_practico: 'Diseñar un semáforo vecinal de control de cuotas coloreado íntegramente por condiciones automáticas.',
    elementos_visuales: [
      { icono: 'celda', etiqueta: 'Formato Condicional', descripcion: 'Control interactivo cromático de Inicio.' },
      { icono: 'colores', etiqueta: 'Semáforo de Cuentas', descripcion: 'Tratamiento de verde y rojo para la grilla.' }
    ]
  },
  {
    id: 'excel_n2_l3',
    modulo_id: 'excel',
    orden: 6,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Excel',
    titulo: 'Consolidar balances con Tablas Dinámicas Sencillas',
    descripcion_teorica: 'Al finalizar un proyecto de mejoras, el libro diario de gastos puede poseer cientos de líneas entrelazadas (pan, pintura, herramientas). Sumar una por una en calculadora es ineficiente. Las "Tablas Dinámicas" permiten agrupar miles de líneas archivadas por tipo de gasto, entregando totales acumulados en 3 clics rápidos sin digitar fórmulas.',
    explicacion_alternativa: 'Es idéntico a volcar una bolsa llena de facturas vecinales sueltas en la mesa y que una secretaria robótica de la junta las apile por su tipo y le entregue los totales sumados organizadamente en un santiamén.',
    pasos_a_seguir: [
      'Fije su vista en una tabla con registros simples: Categoría en Columna A y Gasto en Columna B.',
      'Seleccione todo el rango cuadriculado incluyendo los encabezados superiores.',
      'Vaya a la pestaña "Insertar" arriba a la izquierda.',
      'Haga clic en el primer botón de la izquierda llamado "Tabla dinámica" (o PivotTable) y pulse "Aceptar". Se creará una hoja nueva.',
      'En el panel de la derecha, arrastre la casilla "Categoría" al bloque "Filas" y la casilla "Gasto" al bloque "Valores". ¡Habrá agrupado y calculado su balance comunal al instante!'
    ],
    pasos_alternativos: [
      'Haga clic en "Tablas dinámicas recomendadas" en la pestaña Insertar para dejar que Excel diseñe la sintetización de manera automática.',
      'Arrastre campos dentro y fuera del panel interactivo para reconfigurar el balance vecinal visualmente sin arruinar los datos.'
    ],
    tips_de_accesibilidad: 'La tabla dinámica mantiene los contrastes de cuadrícula bien delimitados y permite estructurar balances limpios para presentar en asambleas del barrio de forma legible.',
    checklist_validacion: [
      'Identifiqué las columnas de mi base con títulos claros en el cabezal.',
      'Navegué al panel de Insertar seleccionando la Tabla Dinámica.',
      'Generé el bastidor o esqueleto dinámico en una nueva solapa.',
      'Arrastré la Categoría clasificatoria hacia las Filas.',
      'Instalé la facturada monetaria hacia el sector de Valores.'
    ],
    concepto_clave: 'Girar y estructurar datos dispersos para compilar totales acumulados por criterios de manera ágil.',
    ejercicio_practico: 'Montar un balance básico en su Excel y agrupar los gastos de Sede por departamento usando Tablas Dinámicas.',
    elementos_visuales: [
      { icono: 'dinamica', etiqueta: 'Panel de Campos', descripcion: 'Consola interactiva a la derecha de la grilla.' },
      { icono: 'tabla', etiqueta: 'Agrupamiento de Valores', descripcion: 'Resultado concentrado sumado de corrido.' }
    ]
  },

  // ==========================================
  // EXCEL - NIVEL 3: RESOLUCIÓN DE PROBLEMAS (AVANZADO)
  // ==========================================
  {
    id: 'excel_n3_l1',
    modulo_id: 'excel',
    orden: 7,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Excel',
    titulo: 'Auxilio: Diagnosticar Errores de Códigos Extraños',
    descripcion_teorica: 'Al teclear cuentas en el balance de la junta, ver nacer códigos incomprensibles como `#¡VALOR!`, `#¿NOMBRE?` o una hilera de barritas `# # # # #` suele alarmar a la tesorería. No son daños permanentes ni virus: son gritos de auxilio lógicos que asoman cuando intentamos resolver operaciones imposibles, digitamos mal una fórmula o ensanchamos de menos una columna.',
    explicacion_alternativa: 'Piense en un sobre devuelto por la oficina postal con un sello que raya "Falta de Código Comunal". No significa que el acta de la asamblea esté maldita; solo le avisa que corrija el dígito para despacharla con agilidad. Se arregla editando la información.',
    pasos_a_seguir: [
      'Si ve nacer la hilera de barritas "###", no se asuste. Encoja los hombros, vaya a la frontera de columnas arriba y haga doble click: Excel expandirá el ancho mostrando la gran cifra de inmediato.',
      'Si observa el código `#¡VALOR!`, haga doble click en su celda y revise si entre los sumandos se metió una celda de texto escrita (como colocar "1500 + Cuotas"). Bórrelo y tipee solo el número.',
      'Si visualiza el código `#¿NOMBRE?`, verifique arriba de todo en la barra de fórmulas si escribió mal la función (ej. teclear `=SUMEE` en vez de `=SUMA`).',
      'Corrija las letras desfasadas, pulse Enter y recobre sus balances financieros limpios de inmediato.'
    ],
    pasos_alternativos: [
      'Al tildar la celda dañada, observe el pequeño rombo amarillo flotante que asoma al lateral.',
      'Haga clic sobre él y lea el dictamen de ayuda vecinal del software ("Fórmula con referencia vacía" o "Divisibilidad imposible") para corregir guiado.'
    ],
    tips_de_accesibilidad: 'La corrección analítica sistemática previene el desvío fraudulento de decimales en contabilidades vecinales y resta estrés de gestión a tesoreros mayores.',
    checklist_validacion: [
      'Ubiqué la presencia del código extraño en mi monitor real.',
      'Enquicié la grilla destrabando las leyendas numéricas ###.',
      'Eliminé textos de los rangos aritméticos mitigando el error de Valor.',
      'Alineé la ortografía ortodoxa de las funciones subsanando el error de Nombre.',
      'Recobré los totales de las asambleas con éxito.'
    ],
    concepto_clave: 'Decodificar la taxonomía de los reportes lógicos del software para amparar flujos aritméticos saludables.',
    ejercicio_practico: 'Forzar voluntariamente el error NAME tipeando `=SUMMMA(10;20)` en su PC y enmendarlo con presteza.',
    elementos_visuales: [
      { icono: 'alerta', etiqueta: 'Rombo de Advertencia', descripcion: 'Guía complementaria emergente útil de Excel.' },
      { icono: 'interroga', etiqueta: 'Error Arrojado', descripcion: 'Texto descriptivo precedido por el hashtag de resguardo.' }
    ]
  },
  {
    id: 'excel_n3_l2',
    modulo_id: 'excel',
    orden: 8,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Excel',
    titulo: 'Sumas y Conteos Condicionales: SUMAR.SI',
    descripcion_teorica: 'A veces no queremos sumar todo el pozo de aportes de la planilla de corrido, sino que requerimos asilar partidas específicas (por ejemplo, sumar únicamente el dinero acumulado correspondientes a la calle "O\'Higgins" o contar cuántos socios están al día). Excel lo asimila de corrido usando las funciones lógicas `=SUMAR.SI` y `=CONTAR.SI` respectivamente.',
    explicacion_alternativa: 'Es igual que pasar lista en la junta y ordenarle al auditor vecinal: "Recorre y suma solo el dinero de los aportes de las familias de la calle O\'Higgins, y salta a las demás porque no corresponden a este cobro". El robot hace la discriminación por usted.',
    pasos_a_seguir: [
      'Ordene sus datos en Excel: Calle del Socio en la Columna A, y Aporte en la Columna B.',
      'Haga click en una celda libre para el reporte de caja.',
      'Digite en su teclado: `=SUMAR.SI(A2:A10; "O\'Higgins"; B2:B10)` y pulse Enter.',
      'Observe cómo Excel se encarga de discriminar: sólo suma los montos de la columna B si al lado dice "O\'Higgins".',
      'Si requiere contar cuántos vecinos de esa calle asistieron, use la fórmula `=CONTAR.SI(A2:A10; "O\'Higgins").`'
    ],
    pasos_alternativos: [
      'Tipee las llamadas de criterio apuntando a una celda de empalme en blanco (ej. `=SUMAR.SI(A2:A10; D2; B2:B10)`), para que al cambiar el escrito en D2 se recalculen los totales de calles alternas automáticamente.',
      'Use barras de función fx si prefiere arrastrar rangos asistidos visualmente.'
    ],
    tips_de_accesibilidad: 'La discriminación de condiciones automatizada minimiza la fatiga mental de analistas al filtrar padrones municipales de alta densidad de manera digital y segura.',
    checklist_validacion: [
      'Estructuré registros con atributos de pertenencia espacial (Calles).',
      'Cargué aportes asignados correlativos.',
      'Initié la función con el gatillo `=SUMAR.SI`.',
      'Encapsulé el criterio diferenciador usando comillas dobles.',
      'Verifiqué la consistencia aritmética de la cuenta resultante.'
    ],
    concepto_clave: 'Filtrar lógicamente rangos de celdas según criterios para computar consolidados parciales sobre balances.',
    ejercicio_practico: 'Delinear una planilla que cuente de corrido los deudores activos aplicando el algoritmo CONTAR.SI.',
    elementos_visuales: [
      { icono: 'cros', etiqueta: 'Rango de Criterio', descripcion: 'Sector donde el programa rastrea los nombres de calles.' },
      { icono: 'suma', etiqueta: 'Suma de Resultados', descripcion: 'Valor que amasa las cuotas correctas.' }
    ]
  },
  {
    id: 'excel_n3_l3',
    modulo_id: 'excel',
    orden: 9,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Excel',
    titulo: 'Seguridad: Proteger Celdas para evitar Borrados',
    descripcion_teorica: 'El desvelo constante de los encargados financieros es pasar el Excel de balances a otros directores y que, por un desliz táctil, estos borren o alteren las complejas fórmulas que tanto costó programar. Excel soluciona esto bloqueando parcialmente el tablero: permite definir qué celdas pueden escribir los invitados y blinda con contraseña las casillas clave.',
    explicacion_alternativa: 'Es idéntico a guardar el gran libro físico de actas de la junta bajo candado dentro de una vitrina de vidrio. Todos los vecinos pueden acercarse a leer las cifras a través del cristal, pero solo usted de manera personal abre la vitrina para actualizar los registros.',
    pasos_a_seguir: [
      'En Excel, por defecto todas las celdas se bloquean al proteger la hoja. Primero, seleccione las celdas de entrada libres donde los vecinos sí pueden escribir datos.',
      'Haga un click derecho e ingrese a "Formato de celdas", vaya a la solapa de "Proteger" en el costado y desmarque la casilla "Bloqueada" (para que estas queden libres).',
      'Vaya a la pestaña "Revisar" de la Cinta superior.',
      'Pulse sobre el botón "Proteger hoja" (identificado con un candado amarillo).',
      'Deje las alternativas por defecto, asigne una clave sencilla si desea y ruede en Aceptar. ¡Fórmulas resguardadas de imprevistos de corrido!'
    ],
    pasos_alternativos: [
      'Si desea remover candados, navegue al mismo sector de Revisar y pulse sobre "Desproteger hoja" para volver a editar libremente.',
      'Use la opción de resguardo "Proteger libro" para evitar que vecinos traviesos borren solapas completas de la contabilidad.'
    ],
    tips_de_accesibilidad: 'Asigne claves fáciles (ej. "sede2026") de modo que si hay rotaciones de directivas vecinales sigan teniendo el mando de manera cómoda y sin bloqueos.',
    checklist_validacion: [
      'Desmarqué el candado de las celdas de variables de socios.',
      'Navegué al menú alto localizando la pestaña de Revisar.',
      'Oprimí el comando de Proteger Hoja.',
      'Encargué una contraseña piloto de resguardo.',
      'Intenté borrar una celda con fórmula vecinal confirmando el rechazo seguro.'
    ],
    concepto_clave: 'Reglar permisos de acceso analítico sobre celdas para resguardar la consistencia estructural de reportes financieros.',
    ejercicio_practico: 'Proteger un balance de sede, cerciorándose de que los casilleros de totales corporativos se bloqueen perfectamente contra borrados.',
    elementos_visuales: [
      { icono: 'candado', etiqueta: 'Cierre de Hoja', descripcion: 'Tratamiento de protección en la solapa Revisar.' },
      { icono: 'vitrina', etiqueta: 'Celdas de Entrada', descripcion: 'Casilleros descuajerados exentos del bloqueo.' }
    ]
  },

  // ==========================================
  // POWERPOINT - NIVEL 1: FUNCIONAL (BÁSICO)
  // ==========================================
  {
    id: 'powerpoint_n1_l1',
    modulo_id: 'powerpoint',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'El Entorno de PowerPoint (Perder el miedo al lienzo)',
    descripcion_teorica: 'PowerPoint no es para escribir textos largos, sino de láminas visuales llamadas "Diapositivas". A la izquierda verá las láminas ordenadas en miniatura; en el centro está el gran lienzo de diseño, y abajo a la derecha, el botón que simula una copa pequeña o pantalla, que sirve para Proyectar en pantalla gigante.',
    explicacion_alternativa: 'Piense en PowerPoint como un cuaderno de bitácora vecinal. Cada lámina es un cartón blanco limpio para dibujar afiches. Para exponer en una asamblea masiva, encendemos el cañón de luz pulsando el botón de Proyectar virtual.',
    pasos_a_seguir: [
      'Abra su programa PowerPoint real en su computador (ícono naranja con la letra P blanca).',
      'Haga clic en la miniatura blanca de "Presentación en blanco".',
      'Descubra a la izquierda la columna de miniaturas de sus láminas.',
      'Identifique en el centro los cajones de texto punteados para escribir.',
      'Para ver el resultado en pantalla completa, oprima la tecla F5 en su teclado físico o el botón de la pequeña copa de presentación abajo a la derecha.'
    ],
    pasos_alternativos: [
      'Si se asoma en su teléfono móvil, use la fisonomía horizontal de juego para diseñar cómodamente.',
      'Pulse Esc en su teclado real para cancelar la proyección a pantalla completa y regresar al taller.'
    ],
    tips_de_accesibilidad: 'La fisonomía de los cuadros prediseñados de PowerPoint viene estandarizada con contrastes seguros. No remueva las márgenes iniciales si está dando los primeros pasos.',
    checklist_validacion: [
      'Cargué el programa virtual de PowerPoint en mi monitor.',
      'Inicié la tarea sobre una carátula limpia.',
      'Vislumbré el panel de diapositivas mini del margen izquierdo.',
      'Reconocí las cajitas de texto centrales para ingresar títulos.',
      'Oprimí F5 desatando la pantalla gigante vecinal.'
    ],
    concepto_clave: 'Concebir el diseño por láminas secuenciales y la proyección en pantalla completa sobre apoyos didácticos.',
    ejercicio_practico: 'Entrar a PowerPoint en su PC física, tipear "REUNIÓN DE JUNTA" en la portada y correr la copa protectora.',
    elementos_visuales: [
      { icono: 'minia', etiqueta: 'Tira de Miniaturas', descripcion: 'Columna con el índice de páginas del lateral izquierdo.' },
      { icono: 'copa', etiqueta: 'Modo Presentación', descripcion: 'Ícono de la copita inferior derecha para proyectar.' }
    ]
  },
  {
    id: 'powerpoint_n1_l2',
    modulo_id: 'powerpoint',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'Letras Gigantes para Asambleas del Barrio',
    descripcion_teorica: 'En las reuniones de vecinos, usar letras pequeñas es el error más recurrente: los asistentes de las filas de atrás no pueden leer el balance de gastos. PowerPoint soluciona esto con "Cuadros de texto". Al seleccionarlos, podemos agrandar la tipografía sobre calibres audaces (>36 puntos) para resguardar la lectura de todos.',
    explicacion_alternativa: 'Es idéntico a pintar carteles camineros vecinales. Si dibuja las letras de la rendición con bolígrafo común fino, nadie de los vecinos de atrás verá las cuentas claras. Use tiza gorda y rotuladores gigantes para que el fondo del salón asimile los detalles de corrido.',
    pasos_a_seguir: [
      'Haga un click izquierdo en el cajón de texto del lienzo de Excel que reza "Haga clic para agregar título".',
      'Digite en mayúsculas: "BALANCE VECINAL: EXCELENTES NOTICIAS".',
      'Sombréelo pasando el mouse presionado por encima del texto.',
      'Vaya a Inicio, y en el casillero numérico de letra, aumente el número a 40 o 44 puntos.',
      'Haga click en "Centrar" y mueva el cajón sujetándolo del borde si desea reposicionarlo.'
    ],
    pasos_alternativos: [
      'Si el espacio se agota, agrande el cajón estirándolo de los pequeños círculos blancos de los rincones del recuadro.',
      'Para agregar más bloques sueltos del acta, vaya a Insertar -> Cuadro de texto y dibuje un rectángulo sobre el lienzo.'
    ],
    tips_de_accesibilidad: 'Contraste estricto: use fondo blanco liso con letras negras carbón. Evite pintar fondos floreados o movedizos que agiten la concentración de vecinos con visión reducida.',
    checklist_validacion: [
      'Activé el cajón de texto de la lámina.',
      'Redacté las cuotas de la sede social en formato claro.',
      'Aumenté el calibre a un número gigante mayor a 36.',
      'Centré la visualización tipográfica.',
      'Confirmé que no queden oraciones recortadas ni encimadas.'
    ],
    concepto_clave: 'Maximizar el tamaño del cuerpo tipográfico para garantizar la igualdad de lectura de los vecinos.',
    ejercicio_practico: 'Sellar un cartel de bienvenida en PowerPoint real con un calibre de letra mayor a 40 para una asamblea.',
    elementos_visuales: [
      { icono: 'cuadro', etiqueta: 'Cajón de Texto', descripcion: 'Caja punteada que deforma y hospeda letras.' },
      { icono: 'fuente', etiqueta: 'Cuerpo 44', descripcion: 'Altura gigante de letra legible en el cabezal.' }
    ]
  },
  {
    id: 'powerpoint_n1_l3',
    modulo_id: 'powerpoint',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'Insertar Fotos de la Sede y Ajustes de Imagen',
    descripcion_teorica: 'Una lámina colmada exclusivamente de textos aburre a los vecinos. En PowerPoint, complementamos los discursos insertando fotos reales del avance de obras. Se ingresan desde la pestaña Insertar. Al cargarse, podemos amoldar su tamaño tomándolas de los nodos laterales para que encajen estéticamente.',
    explicacion_alternativa: 'Es idéntico a pegar fotos de las baldosas reparadas de la sede con cinta adhesiva sobre una cartulina grande de la junta. No las encime sobre los balances de cuentas: use una tijera virtual para adaptarlas de forma prolija al espacio disponible.',
    pasos_a_seguir: [
      'Vaya al cabezal superior y haga click en la pestaña "Insertar".',
      'Pulse sobre el botón "Imágenes" -> "Este dispositivo..." (para buscar archivos en su computador real).',
      'Escoja una foto cargada de resguardo en su PC que grafíque los avances y haga click en Insertar.',
      'Al ver que asoma gigante tapando textos, tome la foto de una esquina redonda blanca inferior y arrástrela hacia adentro.',
      'Ubíquela al costado derecho del lienzo para lograr un equilibrio visual agradable.'
    ],
    pasos_alternativos: [
      'Haga click en "Herramientas de imagen" -> "Recortar" arriba para recortar excedentes del pasto o fondos.',
      'Si no tiene fotos, pulse en "Formas" para trazar flechas explicativas o rectángulos de colores institucionales.'
    ],
    tips_de_accesibilidad: 'Asigne un Texto Alternativo descriptivo a sus fotos: haga click derecho en la foto, elija "Editar texto alternativo" e ingrese "Foto de la vereda pavimentada de la sede social" para que los lectores parlantes cobren sentido.',
    checklist_validacion: [
      'Accedí a la Cinta de Opciones mediante la pestaña Insertar.',
      'Ejecuté el disparador de carga de Imágenes.',
      'Inserté el archivo gráfico piloto en la diapositiva.',
      'Adecué el tamaño redimensionando desde los rincones redondos.',
      'Sincronicé la foto al margen derecho para evitar sobreposiciones.'
    ],
    concepto_clave: 'Enriquecer la explicación oral integrando soportes directos (fotos) ajustados proporcionalmente al lienzo.',
    ejercicio_practico: 'Lanzar un afiche en PowerPoint real incorporando una foto de mejoras y recortándole sus márgenes excedentes.',
    elementos_visuales: [
      { icono: 'insertar', etiqueta: 'Pestaña Insertar', descripcion: 'Puerta hacia fotos, gráficos y formas.' },
      { icono: 'esquinas', etiqueta: 'Nodos Redondos', descripcion: 'Puntos blancos de arrastre de redimensión.' }
    ]
  },

  // ==========================================
  // POWERPOINT - NIVEL 2: ADMINISTRATIVO (INTERMEDIO)
  // ==========================================
  {
    id: 'powerpoint_n2_l1',
    modulo_id: 'powerpoint',
    orden: 4,
    nivel: 'Nivel 2: Administrativo',
    programa: 'PowerPoint',
    titulo: 'Logos Uniformes: El Patrón de Diapositivas',
    descripcion_teorica: 'Al crear muchas diapositivas, pegar repetidamente el logotipo vecinal o escribir el nombre del Centro Social en cada una es lento y queda desalineado al pasar de página. PowerPoint soluciona esto con el "Patrón de Diapositivas" (Master Slide): una lámina arquitectónica oculta. Todo texto, fondo o logo que peguemos en ella quedará grabado en la plantilla original, replicándose simétricamente en todas las láminas nuevas automáticamente.',
    explicacion_alternativa: 'Es idéntico a encargar un sello de goma de tinta reglamentada con los membretes de la oficina. En vez de tomar hoja por hoja de la cartulina vecinal y dibujar el sello con pincel exponiéndose a torcerlo, estampa el patrón central una única vez. En pantalla, toda lámina nacerá con la fisonomía oficial estampada.',
    pasos_a_seguir: [
      'Inicie PowerPoint con su documento en su PC real.',
      'Vaya a la franja superior de pestañas y haga click en "Vista".',
      'Localice el subgrupo de opciones "Vistas patrón" y pulse "Patrón de diapositivas". La pantalla cambiará al esqueleto técnico.',
      'Suba en la tira de láminas de la izquierda hasta arriba y escoja la diapositiva grande rotulada "1" (La Madre).',
      'Vaya a Insertar -> Formas, escoja una figura pequeña, píntela de amarillo y colóquela en un extremo superior. Oprima la cruz roja alta "Cerrar Vista Patrón". ¡Revise cómo todas sus láminas adoptan la firma!'
    ],
    pasos_alternativos: [
      'Use el Patrón para obligar a que las letras de título sean siempre gruesas de calibre 40, bloqueando desajustes de otros expositores.',
      'Si desea fondos permanentes de alto contraste, pulse click derecho en la lámina madre, elija Formato de Fondo y asigne un tono suave uniforme.'
    ],
    tips_de_accesibilidad: 'La consistencia en la fisonomía del lienzo evita que las pupilas del vecino tengan que reajustarse en cada salto de página, facilitando la comprensión.',
    checklist_validacion: [
      'Cargué el panel Vista en el cinturón de herramientas.',
      'Ingresé exitosamente al esqueleto de Patrón de Diapositivas.',
      'Identifiqué la lámina madre número 1 arriba en la tira izquierda.',
      'Incrusté el elemento identificativo en un extremo libre del patrón.',
      'Clausuré el editor confirmando que todas las láminas replican el escudo.'
    ],
    concepto_clave: 'Intervenir la matriz modelo de PowerPoint para unificar relieves de diseño y heráldica institucional de forma inalterable.',
    ejercicio_practico: 'Sellar por Patrón el membrete uniformado del Centro Social en un archivo académico de PowerPoint real.',
    elementos_visuales: [
      { icono: 'patron', etiqueta: 'Vista Patrón', descripcion: 'Frontera de andamios de diapositivas en Vista.' },
      { icono: 'madre', etiqueta: 'Lámina Madre 1', descripcion: 'El molde primario jerárquico de la tira izquierda.' }
    ]
  },
  {
    id: 'powerpoint_n2_l2',
    modulo_id: 'powerpoint',
    orden: 5,
    nivel: 'Nivel 2: Administrativo',
    programa: 'PowerPoint',
    titulo: 'Animaciones Sutiles para evitar Distracciones',
    descripcion_teorica: 'Pegar un listado completo con cinco acuerdos de un solo golpe distrae la atención: los vecinos leen el final del papel mientras usted recién explica el punto uno. Las "Animaciones" solucionan esto, reteniendo los puntos ocultos para hacerlos aparecer uno a uno en pantalla en vivo conforme usted pulsa un click con el dedo.',
    explicacion_alternativa: 'Es idéntico a colgar una persiana de madera gruesa sobre el pizarrón vecinal. Al explicar las cuentas, desliza la persiana levemente hacia abajo dejando ver sólo lo que se debate hoy, evitando que el murmullo de la sala disperse la concentración.',
    pasos_a_seguir: [
      'En una diapositiva escriba una lista de tres puntos (ej. "1. Limpieza", "2. Pintura", "3. Cierre").',
      'Haga un sombreado o click sobre el marco entero que retiene la lista.',
      'Dirija su mirada arriba en las pestañas superiores y pulse "Animaciones".',
      'Visualizará estrellas verdes. Haga click sobre la estrella de aparición sutil llamada "Desvanecer" (o "Aparecer").',
      'Observe la aparición de números (1, 2, 3) al costado. Presione F5 para proyectar y apriete click: los puntos asomarán al ritmo de su voz.'
    ],
    pasos_alternativos: [
      'Evite usar las estrellas amarillas (énfasis) o rojas (salidas) en exceso, ya que generan mareos en auditorios de personas mayores.',
      'Vaya a "Panel de animación" a la derecha para alterar la velocidad de entrada si desea saltos más calmos.'
    ],
    tips_de_accesibilidad: 'La llegada por goteo o dosificada de ideas previene la fatiga informativa y asiste formidablemente a vecinos que asimilan datos con más pausa.',
    checklist_validacion: [
      'Redacté la lista de actas en un cuadro singular.',
      'Tildé la caja de texto que engloba los puntos del balance.',
      'Accedí a la Cinta de herramientas mediante Animaciones.',
      'Asigné la estrella verde de Desvanecer al agrupamiento.',
      'Proyecté a pantalla completa ensayando la llegada sincronizada de letras.'
    ],
    concepto_clave: 'Sincronizar el despliegue gráfico de elementos con el ritmo fonético de la ponencia de secretaría.',
    ejercicio_practico: 'Sellar un listado corporativo autoadministrado de acuerdos dinámicos en su PowerPoint de PC real.',
    elementos_visuales: [
      { icono: 'estrella', etiqueta: 'Estrella Verde', descripcion: 'Herramientas de animación de entrada limpias.' },
      { icono: 'panel', etiqueta: 'Panel de Animaciones', descripcion: 'Consola de velocidad lateral derecha.' }
    ]
  },

  // ==========================================
  // POWERPOINT - NIVEL 3: RESOLUCIÓN DE PROBLEMAS (AVANZADO)
  // ==========================================
  {
    id: 'powerpoint_n3_l1',
    modulo_id: 'powerpoint',
    orden: 6,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'PowerPoint',
    titulo: 'Auxilio: Adaptar Diapositivas al Proyector de la Sede',
    descripcion_teorica: 'Un momento frustrante en reuniones es conectar el computador al proyector de la junta y ver que las diapositivas se ven deformadas, ensanchadas a los lados o con franjas negras muertas. Esto sucede porque el formato viene diseñado por defecto para pantallas modernas panorámicas (16:9), mientras que el proyector de la junta es antiguo y cuadrado (4:3). Ajustar este parámetro nos salvará la reunión.',
    explicacion_alternativa: 'Es idéntico a imprimir un cartel caminero en papel de carta regular y, al querer calzarlo en el portarretratos cuadrado de la sede, tener que doblar y ocultar márgenes de forma descuidada. Cambiar la fisonomía a "Estándar" u "Oficio" en PowerPoint arregla el descalabro.',
    pasos_a_seguir: [
      'Con su PowerPoint abierto en su computador real, vaya a la pestaña superior llamada "Diseño".',
      'Localice en el extremo derecho de la franja superior el botón "Tamaño de diapositiva".',
      'Haga un click izquierdo en él y escoja la opción "Estándar (4:3)" si el proyector de su junta es cuadrado.',
      'Se abrirá un cartel de resguardo flotante técnico en su PC; tilde la opción "Asegurar el ajuste".',
      'Observe cómo todo el balance de letras y fotos se encasilla ordenado y sin recortes en la nueva proporción.'
    ],
    pasos_alternativos: [
      'Si va a proyectar en una televisión plasma moderna en su sede, elija del mismo botón la alternativa "Panorámica (16:9)".',
      'Personalice las proporciones dándole tamaño de hoja Carta si deseara imprimir la diapositiva en rústicos folletos vecinales.'
    ],
    tips_de_accesibilidad: 'Centrar los textos al medio y dejar márgenes libres de un grosor de dos dedos evita que imperfecciones del telón recorten palabras de los balances.',
    checklist_validacion: [
      'Ingresé al panel técnico a través de la pestaña Diseño.',
      'Localicé en el extremo derecho superior el selector de Tamaño de diapositiva.',
      'Definí la dimensión 4:3 en base a las proporciones del telón.',
      'Activé el ajuste de textos consolidando proporciones.',
      'Comprobé en la miniatura el encuadre exacto sin deformidades.'
    ],
    concepto_clave: 'Alinear la fisonomía bidimensional del software a los rangos dimensionales de los soportes ópticos físicos.',
    ejercicio_practico: 'Convertir un archivo comicial vecinal de panorámico a formato estándar y validar la redistribución del balance.',
    elementos_visuales: [
      { icono: 'diseño', etiqueta: 'Pestaña Diseño', descripcion: 'Frontera de vestimenta y relieves de la hoja.' },
      { icono: 'aspecto', etiqueta: 'Selector de Proporciones', descripcion: 'Calibrador de 4:3 o 16:9 en el extremo superior.' }
    ]
  },
  {
    id: 'powerpoint_n3_l2',
    modulo_id: 'powerpoint',
    orden: 7,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'PowerPoint',
    titulo: 'Insertar Videos Educativos del Terreno',
    descripcion_teorica: 'Para evidenciar el progreso de un proyecto de urbanización ante la asamblea, nada supera un registro audiovisual real. PowerPoint permite incrustar archivos de video directamente en sus láminas para proyectarlos con sonido ante toda la asamblea vecinal.',
    explicacion_alternativa: 'En lugar de interrumpir la asamblea de vecinos para encender un televisor o sacar un teléfono y mostrárselo a los asistentes, incorpore el archivo de video de las obras viales dentro del afiche digital. Al llegar a la lámina, el video arranca con un solo clic.',
    pasos_a_seguir: [
      'Párese sobre su diapositiva vacía de PowerPoint de su PC física.',
      'Vaya a la franja de herramientas de arriba y pulse "Insertar".',
      'Localice en el extremo derecho del cabezal alto el grupo de botones "Multimedia" y haga click en "Video".',
      'Escoja la opción "Este dispositivo", navegue a su archivo vecinal grabado y pulse Insertar.',
      'Estire el video de un nodo redondo de la esquina del recuadro para que cubra todo el lienzo. Presione la barra Play flotante de abajo para testear la fluidez.'
    ],
    pasos_alternativos: [
      'Si no tiene el video descargado, escoja "Videos en línea..." e incruste el enlace de YouTube de la municipalidad.',
      'Configure en el menú superior de video que este reproduzca "Automáticamente" al cambiar a la hoja.'
    ],
    tips_de_accesibilidad: 'Verifique que los parlantes de su computador real estén conectados y calibrados al 100% de antemano para prever rezagos acústicos en vecinos mayores.',
    checklist_validacion: [
      'Accedí al menú Insertar en la Cinta superior.',
      'Navegué al sector multimedia localizando el disparador de Video.',
      'Importé el archivo multimedia de manera exitosa desde el disco.',
      'Adecué el tamaño del video en equilibrio con el marco.',
      'Testée la reproducción acústica y de corrido pulsando el Play.'
    ],
    concepto_clave: 'Enlazar flujos de reproducción audiovisual integrados en la secuencia de proyección comicial.',
    ejercicio_practico: 'Pegar un video piloto de avances en PowerPoint y ensayar su reproducción automática en pantalla completa.',
    elementos_visuales: [
      { icono: 'video', etiqueta: 'Botón Multimedia Video', descripcion: 'Inyección de archivos visuales en Insertar.' },
      { icono: 'play', etiqueta: 'Barra de Reproducción', descripcion: 'Ajustes de play y volumen al pie del visor.' }
    ]
  },

  // ==========================================
  // OUTLOOK - NIVEL 1: FUNCIONAL (BÁSICO)
  // ==========================================
  {
    id: 'outlook_n1_l1',
    modulo_id: 'outlook',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Bandeja de Entrada y Navegación (Perder el miedo a Outlook)',
    descripcion_teorica: 'Outlook es la casilla postal cibernética. En el panel izquierdo de navegación se encuentran las carpetas (Bandeja de Entrada hospeda las cartas nuevas que llegan, y Enviados retiene las copias despachadas). El panel del medio expone la lista de correspondencia, y el derecho muestra el contenido de la carta seleccionada.',
    explicacion_alternativa: 'Mire a Outlook como el buzón de correo comunal colgado en la puerta del centro social. Las cartas nuevas caen a la "Bandeja de Entrada" (recibidas). El listado del medio es el montón de sobres en la mesa, y abrirlos es hacer un clic izquierdo suave para leerlos en el tablón derecho.',
    pasos_a_seguir: [
      'Abra su programa Outlook real o acceda al portal web oficial.',
      'Localice en la parte de la izquierda la solapa llamada "Bandeja de Entrada" (Inbox).',
      'Mire el catálogo central de cartas vecinales. Note que las cartas en letra gruesa o con un círculo azul son "No leídas".',
      'Haga un click izquierdo sobre un correo nuevo y lea el contenido en el panel grande del costado derecho.',
      'Descubra la carpeta "Elementos enviados" (Sent) para recordar actas que mandó ayer.'
    ],
    pasos_alternativos: [
      'Use el buscador superior de Outlook tipeando palabras como "Subvención" para encontrar cartas perdidas en un santiamén.',
      'Si visualiza bandejas tituladas como "Prioritarios" y "Otros", note que Outlook separa lo vecinal urgente de los folletos municipales.'
    ],
    tips_de_accesibilidad: 'La visualización de carpetas de Outlook se puede agrandar usando la lupa de pantalla o los selectores tipográficos de su navegador web para agilizar su lectura.',
    checklist_validacion: [
      'Abrí mi programa de Outlook.',
      'Identifiqué las carpetas principales del margen izquierdo.',
      'Localicé la Bandeja de Entrada donde llegan las solicitudes vecinales.',
      'Hice un click izquierdo en un correo para desplegado.',
      'Distinguí visualmente correos leídos de no leídos.'
    ],
    concepto_clave: 'Comprender la geografía tripartita del correo electrónico para recepcionar correspondencias vecinales de manera ágil.',
    ejercicio_practico: 'Entrar a su Outlook, abrir un correo del listado central y clasificar las zonas descritas.',
    elementos_visuales: [
      { icono: 'bandeja', etiqueta: 'Bandeja de Entrada', descripcion: 'Contenedor de correspondencias nuevas.' },
      { icono: 'vistas', etiqueta: 'Panel de Lectura', descripcion: 'Sección del margen derecho que expone la carta abierta.' }
    ]
  },
  {
    id: 'outlook_n1_l2',
    modulo_id: 'outlook',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Escribir y Despachar un Mensaje Formal',
    descripcion_teorica: 'Para redactar correspondencia vecinal, usamos el botón "Correo Nuevo". Debemos declarar obligatoriamente tres campos para que llegue a destino: "Para" (dirección exacta del destinatario), "Asunto" (título conciso de la carta), y el gran "Cuerpo" o espacio de redacción abajo.',
    explicacion_alternativa: 'Es igual que despachar un sobre de papel por correo general. "Para" representa escribir la dirección física de la casa del cartero de forma precisa, y "Asunto" es el rótulo rápido externo que lee el cartero para saber de qué trata el sobre vecinal.',
    pasos_a_seguir: [
      'En Outlook real de su PC, haga click en el gran botón "Correo nuevo" (arriba a la izquierda, con un dibujo de un sobre o signo más).',
      'Tipee en la casilla "Para" el correo exacto de destino: "alcaldia@municipalidad.cl" (cuidado con los puntos y el @).',
      'Haga click en la hilera del medio "Agregar un asunto" y tipee: "SOLICITUD DE REPARACIÓN DE LUMINARIAS SEDE".',
      'Haga un click en el cajón de abajo y redacte el saludo protocolar: "Estimado Alcalde, mediante la presente vecinal...".',
      'Verifique las letras de corrido y presione el gran botón azul "Enviar" de la esquina inferior de redacción.'
    ],
    pasos_alternativos: [
      'Use la casilla "CC" (Con Copia) para enviarle una copia idéntica del escrito al tesorero de su junta para resguardo administrativo.',
      'Si desea cancelar el envío antes de despacharlo, pulse sobre "Descartar" y bórrelo de por vida.'
    ],
    tips_de_accesibilidad: 'La barra de edición de Outlook le permite teñir el texto de la correspondencia en un color oscuro accesible para que sea agradable de leer ante fondos blancos.',
    checklist_validacion: [
      'Oprimí el comando Correo Nuevo abriendo el sobre digital.',
      'Formulé correctamente la casilla Para de destino.',
      'Añadí un Asunto conciso en mayúsculas de resguardo.',
      'Escribí el saludo protocolar en las franjas del Cuerpo.',
      'Hice el despacho formal oprimiendo el botón Enviar.'
    ],
    concepto_clave: 'Estructurar correos con propósitos claros (Asunto) orientados a direcciones unívocas (Para).',
    ejercicio_practico: 'Establecer una carta piloto dirigida al presidente de la junta solicitando insumos y enviarla formalmente.',
    elementos_visuales: [
      { icono: 'nuevo', etiqueta: 'Correo Nuevo', descripcion: 'Lanzador de correspondencias en la esquina alta.' },
      { icono: 'enviar', etiqueta: 'Botón Enviar', descripcion: 'Opcionalidad azul inferior de despacho definitivo.' }
    ]
  },
  {
    id: 'outlook_n1_l3',
    modulo_id: 'outlook',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Adjuntar Actas y Documentos Formales',
    descripcion_teorica: 'Para remitir un acta comunal digitalizada o la hoja financiera en Excel a la alcaldía, no la tipeamos dentro del texto del correo: la enviamos como "Archivo adjunto". El botón estrella para esto es el "Clip de oficina", que permite seleccionar y subir documentos resguardados de nuestra computadora.',
    explicacion_alternativa: 'Es idéntico a tomar el sobre de la correspondencia municipal y meter adentro un plano de veredas o fotos sacadas con la cámara. El clip es el gancho metálico físico que sujeta esos documentos al papel principal para que no se caigan en el camino.',
    pasos_a_seguir: [
      'Inicie la redacción de un Correo Nuevo en su programa Outlook real.',
      'Delinee el Para y el Asunto de forma habitual en la parte superior.',
      'Mire la Cinta de comandos superior y pulse sobre el ícono que representa un "Clip de papel" (llamado Adjuntar archivo).',
      'Haga click en "Examinar este equipo...", navegue a su carpeta de Documentos y tilde su archivo de Acta vecinal.',
      'Pulse en Aceptar. Observe cómo se sube una pequeña barrita con el ícono y peso del archivo antes de despachar.'
    ],
    pasos_alternativos: [
      'Para adjuntar fotos, puede simplemente arrastrar la imagen desde su escritorio y soltarla arriba del cajón de redacción del correo.',
      'Si adjuntó un archivo erróneo, tilde la flechita chica al costado de la barra y presione "Quitar adjunto" de inmediato.'
    ],
    tips_de_accesibilidad: 'Evite enviar adjuntos excesivamente pesados (como videos directos de más de 20 Megabytes) que puedan atorar casillas municipales con conexiones inestables.',
    checklist_validacion: [
      'Abrí la consola de redacción para un nuevo correo electrónico.',
      'Activé la herramienta de carga representada por el Clip.',
      'Busqué el archivo de Acta vecinal en mis carpetas del computador real.',
      'Comprobé que asome el listado del adjunto cargado debajo de la casilla de Asunto.',
      'Efectué el despacho pulcro de la carta con su adjunto vecinal.'
    ],
    concepto_clave: 'Incrustar documentos o archivos externos de forma dependiente a la correspondencia por correo electrónico.',
    ejercicio_practico: 'Adjuntar una hoja modificada de sumas vecinales en un correo piloto utilizando el botón Clip de Outlook real.',
    elementos_visuales: [
      { icono: 'clip', etiqueta: 'Ícono Clip', descripcion: 'Tratamiento de adjuntos en Outlook superior.' },
      { icono: 'archivo', etiqueta: 'Archivo Cargado', descripcion: 'Barra que asocia el nombre y el peso del elemento.' }
    ]
  },

  // ==========================================
  // OUTLOOK - NIVEL 2: ADMINISTRATIVO (INTERMEDIO)
  // ==========================================
  {
    id: 'outlook_n2_l1',
    modulo_id: 'outlook',
    orden: 4,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Outlook',
    titulo: 'Secretaría Automática: Fuera de la Oficina',
    descripcion_teorica: 'Durante vacaciones o cierres de la sede social por receso, los vecinos envían cartas y quedan con la amarga incertidumbre de si fueron leídos o ignorados. Outlook posee la función "Respuestas Automáticas" (Auto-Reply). Al activarla, el servidor se convierte en nuestra contestadora: responde de inmediato a todo correo con una nota previamente escrita.',
    explicacion_alternativa: 'Es idéntico a colgar un cartel solemne de madera en la reja delantera de la sede que avise: "Por receso la junta estará cerrada hasta el 10 de marzo. Emergencias llamar al presidente". En la computadora, Outlook se encarga de leerle el cartel a cada correo que toque la bandeja.',
    pasos_a_seguir: [
      'Abra su correo Outlook real de la junta en su monitor.',
      'Pulse el ícono de la rueda o "Engranaje" de Configuración en la esquina superior derecha.',
      'Tipee en la búsqueda técnica de ajustes "Respuestas automáticas" (o vaya a Correo -> Respuestas automáticas).',
      'Active el interruptor que reza "Activar respuestas automáticas" (el interruptor se prenderá de azul).',
      'Redacte en el cajón de texto: "ESTIMADO VECINO: LA SEDE COMUNAL ESTÁ EN RECESO HASTA MARZO. LLAME AL 9XXXXXX SINO". Presione Guardar.'
    ],
    pasos_alternativos: [
      'Compruebe fijando un rango de plazos: marque "Enviar respuestas solo durante este período" para que la contestadora se apague sola al iniciar el retorno.',
      'Active la casilla "Enviar respuestas solo a mis contactos" si prefiere que correos con folletería de empresas no reciban el escrito.'
    ],
    tips_de_accesibilidad: 'Redactar notas breves, sencillas de digerir y con números telefónicos ampliados beneficia la asimilación acústica de coordinadores del barrio.',
    checklist_validacion: [
      'Ingresé al panel interactivo de Configuración de Outlook.',
      'Navegué al módulo de respuestas automáticas de la cuenta.',
      'Arranqué la contestadora electrónica activando el gatillo azul.',
      'Redacté las indicaciones con números telefónicos directos.',
      'Oprimí Guardar asegurando el servicio de correo automático.'
    ],
    concepto_clave: 'Asignar un desencadenador para responder correspondencias imprevistas durante periodos de descanso.',
    ejercicio_practico: 'Establecer una contestadora de auto-respuesta por receso navideño vecinal en su Outlook real.',
    elementos_visuales: [
      { icono: 'grana', etiqueta: 'Ajustes Engranaje', descripcion: 'Lanzador superior de configuraciones en la cuenta.' },
      { icono: 'contestador', etiqueta: 'Pauta de Aviso', descripcion: 'Panel donde se redacta el cartel de receso.' }
    ]
  },
  {
    id: 'outlook_n2_l2',
    modulo_id: 'outlook',
    orden: 5,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Outlook',
    titulo: 'Organizar la Agenda: Calendario de la Sede',
    descripcion_teorica: 'Llevar los compromisos vecinales en la memoria o en papeles sueltos es riesgoso: se exponen a perderse. Outlook incorpora un "Calendario Virtual de Alta Precisión" integrado al correo electrónico. Aquí podemos agendar el día del próximo bingo comunal o la visita formal del alcalde, configurando un timbre o alerta acústica en la PC.',
    explicacion_alternativa: 'Es idéntico a colgar los grandes almanaques de pared en la repisa de la sede, marcando con una gran cruz de marcador las elecciones de mesa directiva. El almanaque es virtual, emite avisos sonoros por el parlante y les envía notificaciones a los directivos registrados.',
    pasos_a_seguir: [
      'Fije su mirada en la columna o extremo izquierdo de su Outlook real.',
      'Pulse sobre el ícono que representa un "Calendario" de escritorio (el pequeño casillero mensual).',
      'Observe la cuadratura del mes del Centro Social. Haga doble click en el cuadro del viernes de la semana entrante.',
      'Tipee el motivo oficial: "ASAMBLEA GENERAL EXTRAORDINARIA DE DIRECTORES".',
      'Ajuste el bloque horario (ej. de 18:00 a 19:30 horas) y pulse sobre el botón "Guardar" o "Enviar".'
    ],
    pasos_alternativos: [
      'Pulse en "Nuevo evento" arriba para invocar la ficha comicial rápidamente.',
      'Invite a la tesorera escribiendo su correo en la casilla "Invitar a personas" para que Outlook le despache el evento con campana a ella.'
    ],
    tips_de_accesibilidad: 'La campana acústica emitirá un pitido en su monitor real 15 minutos antes de la reunión, sirviéndole de recordatorio a coordinadores con olvidos recurrentes.',
    checklist_validacion: [
      'Accedí a la vista técnica de Calendario de mi cuenta.',
      'Efectué el doble click cargando un casillero diario de la agenda.',
      'Escribí el título de la asamblea en mayúsculas de resguardo.',
      'Alineé las horas de partida y cierre de la vecinal.',
      'Oprimí Guardar asegurando el hito en la bitácora electrónica.'
    ],
    concepto_clave: 'Registrar hitos y compromisos vecinales sobre una cuadrícula cronológica con sistemas de recordatorios de audio.',
    ejercicio_practico: 'Agendar el bingo del Centro Social para el próximo fin de semana integrando recordatorios acústicos en el Outlook real.',
    elementos_visuales: [
      { icono: 'calendario', etiqueta: 'Casillero Mensual', descripcion: 'Tratamiento de visualización de bitácora.' },
      { icono: 'alarma', etiqueta: 'Almendra Horaria', descripcion: 'Franja de color que ocupa el bloque de la asamblea.' }
    ]
  },

  // ==========================================
  // OUTLOOK - NIVEL 3: RESOLUCIÓN DE PROBLEMAS (AVANZADO)
  // ==========================================
  {
    id: 'outlook_n3_l1',
    modulo_id: 'outlook',
    orden: 6,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Outlook',
    titulo: 'Auxilio: Correo Atorado en Bandeja de Salida',
    descripcion_teorica: 'Un dolor de cabeza recurrente al enviar correspondencias pesadas (con videos largos de aniversario o muchas fotos juntas) del Centro Social es ver que el correo se queda cargando eternamente y se "atora" en la "Bandeja de Salida" (Outbox). Al quedar atrapado allí, bloquea toda la tubería digital del correo impidiendo el despacho de siguientes cartas. Debemos irrumpir, borrar o reubicar el archivo obstructor para destrabar la cuenta de corrido.',
    explicacion_alternativa: 'Se asemeja a que un vecino intente introducir una caja de cartón gigante llena de ladrillos por el buzón metálico empotrado de la sede. Como la caja se atasca en la boca, las cartas livianas de los demás vecinos no pueden caer. La solución es destrabar la boca del buzón vecinal retirando el paquete pesado.',
    pasos_a_seguir: [
      'Vaya al panel izquierdo de carpetas en su Outlook real de su PC.',
      'Identifique la carpeta llamada "Bandeja de Salida" (Outbox) (suele asomar con un número entre paréntesis que indica atorados).',
      'Haga click izquierdo suave en ella: verá expuesto el correo gigante que está obstruyendo el paso.',
      'Haga un click derecho firme sobre el correo obstructor y seleccione "Eliminar" (o presione Suprimir en su teclado físico).',
      'Verifique que la Bandeja de Salida quede vacía y envíe una carta de saludo sencilla para constatar que el canal de salida está destrabado.'
    ],
    pasos_alternativos: [
      'Si no quiere borrar el mensaje, haga doble click sobre él en la Bandeja de Salida para suspender el envío y abrir el editor.',
      'Haga clic en la flechita del clip de video pesado, elija "Quitar adjunto", y vuelva a despachar el texto livianamente.'
    ],
    tips_de_accesibilidad: 'Utilizar enlaces a la nube como OneDrive para enviar álbumes de fotos previene atoros sistemáticos y asegura el tránsito ante conexiones rurales de internet.',
    checklist_validacion: [
      'Detecté la anomalía de bloqueo de despachos en la cuenta.',
      'Abrí el contenedor especial Bandeja de Salida en el panel lateral.',
      'Identifiqué el escrito obstructor pesado por su peso.',
      'Efectué la demolición o borrado del mensaje atorado.',
      'Testée la tubería depurada realizando un envío de prueba.'
    ],
    concepto_clave: 'Localizar e intervenir los depósitos transitorios de despacho de Outlook ante congestiones por archivos excesivamente robustos.',
    ejercicio_practico: 'Explorar la carpeta Bandeja de Salida de Outlook real en su PC reconociendo los pasos de saneamiento financiero.',
    elementos_visuales: [
      { icono: 'outbox', etiqueta: 'Bandeja de Salida', descripcion: 'Casillero transitorio de atoramiento técnico.' },
      { icono: 'roto', etiqueta: 'Fichero Pesado', descripcion: 'Adjunto de video sobredimensionado de la junta.' }
    ]
  },
  {
    id: 'outlook_n3_l2',
    modulo_id: 'outlook',
    orden: 7,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Outlook',
    titulo: 'Auxilio: Almacenamiento Saturado al 100%',
    descripcion_teorica: 'El correo electrónico municipal o corporativo de la junta de vecinos no es infinito. Al recibir cotizaciones con adjuntos de años pasados de corrido, la barra de almacenamiento se llena al 100% de su capacidad. Cuando esto ocurre, Outlook se bloquea por completo: rebota todo correo entrante y arroja un cartel de alerta de "Buzón Saturado". Resolverlo consiste en filtrar correos pesados antiguos para borrarlos.',
    explicacion_alternativa: 'Es idéntico a que el gabinete de metal de la secretaría de la junta se llene totalmente de cartas y carpetas de actas de hace diez años. Como las gavetas están reventadas, el cartero no puede meter cartas nuevas y estas rebotan al correo principal. La solución es archivar lo antiguo pesado o sacarlo al basurero.',
    pasos_a_seguir: [
      'Inicie su Outlook real en su computadora física.',
      'Dirija su mirada a la barra de búsqueda alta de corrido.',
      'Digite en el buscador técnico: `tieneadjunto:sí` o use los filtros dinámicos de "Filtrar por" -> "Tiene archivos adjuntos".',
      'Haga clic en el botón "Ordenar por" arriba de su lista y escoja la alternativa de ordenar por "Tamaño" (de mayor a menor).',
      'Sombréé con su mouse las cartas de folletos o fotos pesadas de años viejos que ya rindió, haga click derecho y pulse "Eliminar" de por vida.'
    ],
    pasos_alternativos: [
      'Diríjase a la solapa "Elementos eliminados" en el lateral de carpetas y pulse Vaciar Carpeta para de verdad recobrar el espacio.',
      'Vaya a Configuración -> General -> Almacenamiento, y mire la barra de color para verificar cuánto espacio libre recuperó.'
    ],
    tips_de_accesibilidad: 'La limpieza periódica de folletines publicitarios remueve el "spam" molesto facilitando un recorrido nítido por la bandeja de entrada para vecinas con poca práctica.',
    checklist_validacion: [
      'Reconocí el aviso técnico o bloqueo de Almacenamiento Saturado.',
      'Utilicé filtros dinámicos para aislar correos con adjuntos.',
      'Clasifiqué el listado central ordenándolo de mayor a menor tamaño.',
      'Despaché al basurero correos pesados que ya caducaron históricamente.',
      'Vacié la Bandeja de Elementos Eliminados de manera rotunda.'
    ],
    concepto_clave: 'Monitorear la capacidad de persistencia del servidor limpiando y filtrando adjuntos de gran peso para renovar el buzón de correo.',
    ejercicio_practico: 'Rastrear correos antiguos con adjuntos pesados en su Outlook de PC real y ensayar el archivado masivo seguro.',
    elementos_visuales: [
      { icono: 'almacenar', etiqueta: 'Barra de Gigabytes', descripcion: 'Medidor de capacidad en los ajustes de cuenta.' },
      { icono: 'filtro', etiqueta: 'Ordenar por Tamaño', descripcion: 'Tratamiento de descarte de correos pesados.' }
    ]
  }
];
