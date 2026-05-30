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
  // WORD - NIVEL 1: FUNCIONAL
  // ==========================================
  {
    id: 'word_b1_l1',
    modulo_id: 'word',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'El Entorno de Trabajo (Perder el miedo a la pantalla)',
    descripcion_teorica: 'Imagine que entra por primera vez a un gran salón comunitario de la Junta de Vecinos. A primera vista, puede llamar la atención el gran tablero colgado al fondo con múltiples herramientas y avisos ordenados por temas; eso en la computadora se llama Cinta de Opciones. En el centro de la mesa hay una hoja en blanco lista para ser llenada con sus palabras de oficina, y abajo a la derecha de la mesa hay una lupa que le permite agrandar el tamaño de visual del papel sin alterar el tamaño de la letra real al imprimir: la barra de Zoom. En Word, perder el miedo consiste en entender que esta ventana digital simula exactamente su mesa de trabajo física, organizada y segura.',
    explicacion_alternativa: 'Piense en Word como su mesa de comedor antes de empezar una manualidad. El cabezal alto lleno de botones organizados en cajones se llama Cinta de Opciones (como un cajón de hilos ordenados). El espacio central es su mesa limpia para el papel de oficio, y la regla de deslizar abajo a la derecha es la barra de la lupa Zoom para acercar o alejar el papel según lo cansada que sienta su vista. ¡Nada se va a romper por mirar o tocar!',
    pasos_a_seguir: [
      'Deje su teléfono sobre la mesa para ir leyendo esta guía y sitúese ante su computadora real.',
      'Encienda la computadora y abra el programa Microsoft Word real pulsando su ícono azul con una letra W blanca.',
      'Fije su mirada en la parte superior de la pantalla de su PC: allí observará la Cinta de Opciones llena de palabras como Inicio, Insertar y Disposición.',
      'Mire el centro de la pantalla de su PC: es la hoja de papel virtual en blanco, con una barrita negra parpadeando llamada cursor de escritura.',
      'Dirija sus ojos a la esquina inferior derecha de la pantalla: allí se encuentra el regulador de Zoom. Haga click sobre el signo "+" para agrandar visualmente la hoja virtual cómodamente.'
    ],
    pasos_alternativos: [
      'Tenga su teléfono a la mano con esta guía y diríjase a su pantalla física de la computadora.',
      'Abra un documento en blanco en su programa Word real.',
      'Busque en la hilera alta de botones la palabra "Disposición" o "Inicio" para convencerse de que no hay peligro. Púlsela.',
      'Presione y revise que el botón de Zoom abajo a la derecha esté ajustado para que vea la hoja gigante y cómoda.'
    ],
    tips_de_accesibilidad: 'Si le cuesta distinguir visualmente las pestañas superiores en la pantalla de su PC, presione una sola vez la tecla Alt en su teclado real. Aparecerán de inmediato letras de acceso directo grandes en color negro para que se guíe con facilidad sin forzar los ojos.',
    checklist_validacion: [
      'He abierto Word en mi computadora real y encontré el papel virtual y limpio en blanco.',
      'Logré distinguir la Cinta de Opciones en el borde superior de la pantalla.',
      'Identifiqué la barra de Zoom en la esquina inferior derecha de la pantalla de mi PC.',
      'Presioné el botón de suma (+) de la lupa de Zoom para agrandar la hoja virtual cómodamente.'
    ],
    sugerencias_descubrimiento: [
      "¡Pruebe a cambiar el Zoom a lo más chiquito!: Presione el botón '-' del Zoom varias veces. Verá que la hoja se vuelve enana como una estampilla de correos. Esto sirve para ver toda la página a lo lejos, pero ¡regrese al signo '+' para tener plena visual ultra-cómoda!",
      "Haga doble click sobre la pestaña 'Inicio': Verá que toda la barra de botones alta desaparece para darle más espacio a la hoja en blanco. No se asuste. Vuelva a hacer doble click sobre 'Inicio' y reaparecerá fija en su lugar. En oficina esto se llama colapsar la Cinta de Opciones."
    ],
    concepto_clave: 'Identificar las partes de la ventana (Cinta de opciones, la hoja en blanco y la barra de zoom) para comprender dónde está parado en el programa.',
    ejercicio_practico: 'Abrir Word en su PC real, ubicar visualmente las 3 zonas clave descritas y utilizar la lupa de aumento para sentirse cómoda antes de teclear.',
    elementos_visuales: [
      {
        icono: 'Cinta de opciones',
        etiqueta: 'Cinta de Opciones',
        descripcion: 'Franja horizontal con pestañas y botones arriba de la hoja.'
      },
      {
        icono: 'Zoom',
        etiqueta: 'Control de Zoom',
        descripcion: 'Barra reguladora con signos "-" y "+" en la esquina inferior derecha.'
      }
    ]
  },
  {
    id: 'word_b1_l2',
    modulo_id: 'word',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Escribir y Corregir en la Página',
    descripcion_teorica: 'En una máquina de escribir clásica de oficina, cada renglón requería que empujáramos manualmente la palanca lateral para retornar el papel. En Word de la computadora, las palabras caen solas en cascada y fluyen automáticamente hacia la siguiente línea al llegar al borde físico de su papel virtual. Solo debemos usar la tecla Enter cuando decidimos conscientemente terminar un párrafo completo para abrir uno nuevo o para separar secciones del documento. Además, si digitamos una palabra con mala ortografía, la computadora colocará un subrayado ondulado rojo de alerta; bastará con hacer un Clic derecho sobre error para que se despliegue un recuadro inteligente que ofrece la palabra correcta lista para ser insertada.',
    explicacion_alternativa: 'Escribir en la computadora es más dócil que en papel físico. No se preocupe de estar presionando el pasador al final de cada línea; el texto se acomoda solo como el agua en un jarro. Solo pulse el botón Enter para dejar un espacio limpio entre diferentes asuntos o párrafos. Y si ve una línea roja ondulada abajo de un nombre, no se asuste: es Word avisándole que revise las letras haciendo un Clic derecho sobre error para corregir la falta en un segundo.',
    pasos_a_seguir: [
      'Deje su celular para consulta y coloque sus manos sobre su teclado de la PC.',
      'Escriba despacio la frase: "La asamblea comunal aprobo la pintura" escribiendo aprobo sin tilde para provocar la alerta.',
      'Observe que Word marca la palabra con una línea ondulada roja por falta de ortografía de inmediato.',
      'Coloque la punta del mouse justo sobre la palabra marcada y presione el botón derecho en un Clic derecho sobre error.',
      'En el menú del recuadro que se despliega en pantalla, haga un click de confirmación izquierdo sobre la sugerencia corregida: "aprobó".',
      'Presione la tecla Enter una o dos veces al final para descender renglones de forma limpia e ingresar los firmantes.'
    ],
    pasos_alternativos: [
      'Deje este teléfono a la vista y trabaje en Word.',
      'Redacte un saludo como "Estimada Alcaldesa" y presione la tecla Enter física.',
      'Escriba la palabra "telephono" mal escrita adrede.',
      'Haga un Clic derecho sobre error en Word y corríjala a "teléfono" pulsando la sugerencia.'
    ],
    tips_de_accesibilidad: 'Para borrar letras completas de forma veloz si cometió un error tipográfico, localice la tecla Retroceso (ubicada arriba del Enter, con una flecha que apunta a la izquierda o la palabra Bksp). No necesita usar el mouse para borrar.',
    checklist_validacion: [
      'Logré escribir la frase completa en el teclado físico de mi PC.',
      'Word detectó el error ortográfico y lo subrayó con ondulaciones rojas en pantalla.',
      'Presioné de manera exitosa el botón secundario del mouse sobre la palabra con error.',
      'Cambié con éxito el texto mal escrito por la sugerencia corregida en Word.',
      'Oprimí Enter para saltar de forma limpia a un nuevo renglón.'
    ],
    sugerencias_descubrimiento: [
      "¡Conozca la diferencia con la Barra Espaciadora!: Escriba algo y hunda la barra inferior ancha repetidamente. Verá cómo se crean espacios horizontales. Recuerde: ¡Nunca use la barra para bajar de renglón! Solo hunda el botón Enter.",
      "Pruebe con la tecla de Mayús o Shift: Manténgala hundida mientras presiona una vocal. ¿Observa cómo se pinta en mayúscula temporal? Es maravillosa para nombres propios."
    ],
    concepto_clave: 'El uso correcto de la tecla Enter para separar párrafos (no para avanzar renglones) y cómo reaccionar a las advertencias de ortografía de Word.',
    ejercicio_practico: 'Redactar una justificación formal dirigida a la municipalidad cometiendo un error intencional para aprender a corregirlo con el mouse.',
    elementos_visuales: [
      {
        icono: 'Tecla Enter',
        etiqueta: 'Tecla Enter',
        descripcion: 'La tecla más gruesa en el costado derecho de su teclado, con una flecha que dobla a la izquierda.'
      },
      {
        icono: 'Clic derecho sobre error',
        etiqueta: 'Clic Derecho en Error',
        descripcion: 'Presionar el botón secundario del mouse sobre una palabra con subrayado rojo.'
      }
    ]
  },
  {
    id: 'word_b1_l3',
    modulo_id: 'word',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Dar Formato Esencial (Resaltar acuerdos clave)',
    descripcion_teorica: 'Un documento que tiene el mismo tamaño y grosor de letra en todas sus líneas cansa la vista de los vecinos y dificulta encontrar los datos críticos. En secretariado, se usa Negrita para ensanchar los títulos claves con tinta electrónica gruesa, Cursiva para inclinar las letras en aclaraciones, y Subrayado para remarcar acuerdos formales abajo. Podemos además ajustar la escala de las letras usando el Selector tamaño de letra arriba en la pantalla para que los encabezados destaquen de manera jerárquica.',
    explicacion_alternativa: 'Es como poner un cartel formal en la plaza comunal. Los títulos de los acuerdos van en letras enormes usando el Selector tamaño de letra y con tinta bien negra presionando la Negrita. Si quiere que una frase destaque, use el Subrayado para ponerle una línea clara abajo de modo que cualquier vecino lo entienda.',
    pasos_a_seguir: [
      'Abra Word y escriba la frase: "ACTA DE ACUERDOS DE LA JUNTA DE VECINOS".',
      'Sombreé todo el texto manteniendo presionado el botón izquierdo del mouse y pasándolo encima de las palabras.',
      'Localice en la parte de arriba el casillero numérico de Selector tamaño de letra y seleccione el número 16.',
      'Vea cómo el título se agranda. Enseguida, haga click sobre el botón que tiene la Negrita y luego la del Subrayado.',
      'Haga click en una parte en blanco del documento para apreciar cómo se destaca su acuerdo vecinal de forma sumamente nítida.'
    ],
    pasos_alternativos: [
      'Escriba "CARTA COMUNITARIA" y sombréelo manteniendo Shift y usando las flechas.',
      'Mantenga presionado el botón Control en el teclado de su PC e hunda la letra N para aplicar Negrita.',
      'Mantenga Control y hunda la S para aplicar Subrayado sin usar el mouse.'
    ],
    tips_de_accesibilidad: 'Usar los atajos del teclado real Control + N y Control + S le evita buscar los diminutos íconos con el mouse, lo cual mejora el rendimiento y descansa los músculos del cuello.',
    checklist_validacion: [
      'Logré sombrear por completo el texto del título usando el mouse de mi PC.',
      'Establecí la altura del texto en número 16 usando el selector de tamaño.',
      'Apliqué Negrita con éxito para que las letras se vean oscuras e intensas.',
      'Activé el Subrayado para delinear la parte inferior de mi título.'
    ],
    sugerencias_descubrimiento: [
      "¡Pruebe usar la Cursiva!: Busque arriba el botón que lleva una 'K' algo inclinada. Al presionarlo con un título sombreado, este se ladea con gracia. Se usa para comentarios menores.",
      "Explore la paleta de colores: Al lado de la Negrita y Cursiva, busque la letra 'A' con una línea roja abajo. Presione la pequeña flecha a su lado para teñir sus letras de un color Azul o Verde Oficial."
    ],
    concepto_clave: 'Ajustar las letras de los títulos clave de un documento oficial usando los botones Negrita, Cursiva, Subrayado y el Tamaño de Letra.',
    ejercicio_practico: 'Escribir un encabezado oficial vecinal, elevar su tamaño a 16 y aplicarle resaltado de Negrita y Subrayado en su computadora.',
    elementos_visuales: [
      {
        icono: 'Botón Negrita N',
        etiqueta: 'Botón Negrita (N)',
        descripcion: 'Estilo de letra gruesa y oscura para resaltar títulos.'
      },
      {
        icono: 'Botón Cursiva K',
        etiqueta: 'Botón Cursiva (K)',
        descripcion: 'Incline las letras sutilmente para anotaciones extra.'
      },
      {
        icono: 'Botón Subrayado S',
        etiqueta: 'Botón Subrayado (S)',
        descripcion: 'Dibuja una línea horizontal debajo del texto.'
      },
      {
        icono: 'Selector tamaño de letra',
        etiqueta: 'Tamaño de Letra',
        descripcion: 'Recuadro con números para agrandar o achicar las letras del papel.'
      }
    ]
  },
  {
    id: 'word_b1_l4',
    modulo_id: 'word',
    orden: 4,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Organizar con Viñetas y Listas',
    descripcion_teorica: 'Las listas extensas escritas todo de corrido son difíciles de leer para los ojos cansados o de baja visión. Word cuenta con los botones de Viñetas o Numeración para que la computadora ordene automáticamente cada renglón de forma vertical, agregando pequeños círculos o números consecutivos de soporte a la izquierda. Al usar estas herramientas, Word se encarga de dar sangría al texto, logrando un balance de lectura excelente conforme al manual de oficina.',
    explicacion_alternativa: 'Es igual a organizar el reparto de tareas en una cartulina. Si escribe un vecino detrás de otro, el papel se ve enredado. Al presionar el botón Viñetas colocará un puntito de apoyo a la izquierda de cada renglón. Y si usa Numeración, colocará de forma automática el 1, 2 y 3 sin que usted deba teclearlos uno por uno.',
    pasos_a_seguir: [
      'Escriba las siguientes tres ideas una debajo de otra usando Enter en su Word real: "Revisión de cuentas", "Aprobación de la rifa" y "Puntos varios".',
      'Deslice su mouse sosteniendo el click izquierdo para sombrear las tres líneas de corrido.',
      'Dirija su vista a la Cinta de Opciones arriba en Inicio y pulse sobre el ícono de Numeración que muestra los números 1, 2, 3.',
      'Observe cómo la computadora los separa, aplicando un margen amplio y ordenado de forma rápida.',
      'Sitúe el cursor al final de "rifa", de un Enter y mire cómo aparece automáticamente el número correlativo siguiente.'
    ],
    pasos_alternativos: [
      'Agregue dos renglones con nombres de su comunidad de vecinos.',
      'Sombréelos y pulse el botón de Viñetas que está arriba con tres puntitos verticales.',
      'Compruebe cómo se dibuja el círculo de manera automática separando los registros.'
    ],
    tips_de_accesibilidad: 'Si tiene dificultades para apuntar a los botones pequeños de numeración, puede escribir simplemente el número "1." seguido de un espacio antes de su texto. Word entenderá la acción e iniciará la lista automática por su cuenta.',
    checklist_validacion: [
      'Ingresé los tres puntos del orden del día en renglones separados.',
      'Sombreé la lista completa de forma fluida.',
      'Oprimí el botón de Numeración y visualicé los números correlativos aplicados.',
      'Oprimí Enter al final de la lista comprobando que Word genera el siguiente número de forma automática.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe a cambiar de punto a estrella: Al oprimir la flecha pegada a Viñetas se abrirá una vitrina de símbolos. Puede elegir cuadrados, estrellas o flechas para personalizar el listado a su conveniencia.",
      "Cancele la lista automática: Si presiona Enter dos veces seguidas de forma firme en un renglón vacío, comprobará cómo el siguiente número desaparece devolviéndole el cursor normal de oficina."
    ],
    concepto_clave: 'Crear listas estructuradas con viñetas de puntos (para inventarios o asistencia) y listas numeradas para detallar acuerdos cronológicos o reglamentos.',
    ejercicio_practico: 'Elaborar la agenda de la próxima reunión semanal usando listas numeradas automáticas para estructurar el orden del día.',
    elementos_visuales: [
      {
        icono: 'Botón Viñetas',
        etiqueta: 'Botón de Viñetas',
        descripcion: 'Ordenador de listas con pequeños puntos negros laterales a cada elemento.'
      },
      {
        icono: 'Botón Numeración',
        etiqueta: 'Botón de Numeración',
        descripcion: 'Genera una secuencia numeral automática vertical.'
      }
    ]
  },
  {
    id: 'word_b1_l5',
    modulo_id: 'word',
    orden: 5,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Guardar y No Perder el Trabajo',
    descripcion_teorica: 'Mientras teclea en Word, todo lo redactado permanece en una memoria virtual temporal. Si la computadora se apaga de golpe, todo ese avance se perderá. Para archivar el texto de manera segura, debemos recurrir inicialmente al menú Ventana Guardar Como, que nos permite elegir un destino con alto contraste y visibilidad (como el Escritorio) y asignarle un nombre descriptivo al archivo. Posteriormente, solo pulsamos el acceso rápido del Disco de guardar para registrar cada línea nueva con absoluta tranquilidad.',
    explicacion_alternativa: 'Es igual a guardar sus actas en un cajón clasificado de oficina. La primera vez, use el botón Ventana Guardar Como, que es como crear un portafolio de cartón nuevo, rotularlo con un marcador claro y decidir que lo guardará en el cajón de "Escritorio" para tenerlo a mano. En adelante, conforme escriba más páginas, solo presione el botón de la imagen del Disco de guardar rápido arriba a la izquierda.',
    pasos_a_seguir: [
      'Haga click sobre la palabra azul "Archivo" situada en la esquina y columna más izquierda arriba de la pantalla de su PC.',
      'De las opciones del menú vertical, busque y pulse sobre Ventana Guardar Como.',
      'Haga un click sobre el botón "Examinar" o "Este equipo" para abrir la ventana de directorios.',
      'Al lado izquierdo de esa ventana, busque la palabra que dice "Escritorio" y púlsela (así el archivo se guardará directo en el fondo de su pantalla real).',
      'Abajo, en el recuadro blanco "Nombre de archivo:", borre con retroceso y escriba: "Clases_Word_Comunitario".',
      'Pulse el botón de confirmación "Guardar". ¡Su trabajo se encuentra archivado en la memoria segura!'
    ],
    pasos_alternativos: [
      'Sostenga fija la tecla de Control y presione el botón G de su teclado físico en Word.',
      'Saldrá de inmediato la ventana de guardar si el documento es nuevo.',
      'Seleccione "Escritorio" con el mouse, escriba un título para el acta y dé clic en Guardar.'
    ],
    tips_de_accesibilidad: 'La combinación de teclas Control + G es un salvavidas rápido en secretariado. Presiónela al final de cada párrafo escrito para resguardar su esfuerzo sin tener que mover el mouse hasta la Cinta de Opciones.',
    checklist_validacion: [
      'Accedí al menú archivo y seleccioné la opción Guardar Como en mi PC.',
      'Configuré la ruta destino eligiendo con éxito la carpeta Escritorio.',
      'Redacté un nombre descriptivo y sin espacios molestos en el cajón de textos.',
      'Oprimí el botón de confirmación final de Windows salvaguardando mi documento.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe a cambiar el tipo de guardado a PDF: Al guardar un acuerdo, debajo del nombre de archivo, hay un menú que reza 'Tipo: Documento de Word'. Selecciónelo, use la flecha abajo para elegir 'PDF'. Al oprimir guardar, se generará una copa oficial fija apta para enviarse por whastapp sin que nadie la modifique.",
      "Busque su archivo: Cierre Word por completo de la pantalla, busque el ícono con el título 'Clases_Word_Comunitario' directo en el fondo de pantalla de su PC e ingrese haciéndole doble click para reabrirlo."
    ],
    concepto_clave: 'Comprender de forma definitiva la diferencia entre "Guardar" y "Guardar como...", seleccionando la carpeta destino (Escritorio o Documentos) y nombrando el archivo adecuadamente.',
    ejercicio_practico: 'Guardar su acta terminada dándolo un nombre claro y ubicándola directo en la pantalla del Escritorio para verla fácil al encender la PC.',
    elementos_visuales: [
      {
        icono: 'Disco de guardar',
        etiqueta: 'Botón Guardar',
        descripcion: 'Icono pequeño que parece un disquete cuadrado arriba a la izquierda del programa.'
      },
      {
        icono: 'Ventana Guardar Como',
        etiqueta: 'Menú Guardar Como',
        descripcion: 'Menú especial que permite decidir el nombre y el destino del archivo en su PC.'
      }
    ]
  },
  {
    id: 'word_b1_l6',
    modulo_id: 'word',
    orden: 6,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'El Formato de Párrafo e Interlineado',
    descripcion_teorica: 'Un bloque de letras muy comprimido fatiga inmediatamente la visión reducida. El formato de párrafo le permite decidir cómo se ordena el texto en pantalla usando los Botones de alineación: usamos "Centrado" para estilizar títulos de convocatorias, "Izquierda" para correspondencia normal de notas y "Justificado" para enmarcar rectángulos perfectos idénticos a los de una escritura notarial. De igual forma, modificamos el espacio vertical con el Botón Interlineado para dejar hileras blancas de descompresión entre renglones, logrando un descanso asombroso para la vista.',
    explicacion_alternativa: 'Es como organizar hileras de maceteros en las repisas comunitarias. Podemos tirarlos a la izquierda, ponerlos al centro ordenados usando los Botones de alineación o extenderlos bien parejos de lado a lado. Además, si nota que las letras se amontonan de tal forma que le cuesta leer en su pantalla real, pulse el botón de la imagen Botón Interlineado que aleja los renglones permitiendo un respiro para ojos cansados.',
    pasos_a_seguir: [
      'Sombreé el párrafo de redacción en pantalla arrastrando de corrido su mouse real sobre las letras.',
      'Busque en la sección Inicio arriba el grupo "Párrafo" y posicione el mouse sobre los Botones de alineación. Pulse el botón "Justificar" (el que tiene renglones cuadraditos simétricos).',
      'Vea cómo los bordes cobran simetría perfecta a la izquierda y derecha semejando un libro impreso.',
      'Al lado de esos botones, pulse el Botón Interlineado (icono con flechitas celestes arriba y abajo junto a unas barras).',
      'Haga click en la opción de calibre "1.5" de la lista desplegada. ¡Observe cómo su texto se estira de alto dejando aire cómodo para leerlo fácilmente!'
    ],
    pasos_alternativos: [
      'Escriba tres líneas de un acta vecinal.',
      'Sombréelas y recurra al menú Inicio superior en el sector de alineamiento.',
      'Pulse el botón de centrar para ver cómo todo salta al medio de la pantalla dándole porte de poema o encabezado.'
    ],
    tips_de_accesibilidad: 'Manejar un interlineado de "1.5" o "2.0" (Doble) es la medida recomendada por los manuales internacionales de accesibilidad para personas con presbicia o visión parcial, ya que evita que el ojo se pierda de línea al saltar de renglón.',
    checklist_validacion: [
      'Sombreé el párrafo central de mi carta en Word.',
      'Apliqué la alineación Justificado encuadrando de forma formal ambos extremos del párrafo.',
      'Ubiqué el disparador de Interlineado en la barra superior de herramientas.',
      'Configuré el interlineado a calibre 1.5 y verifiqué la óptima separación visual de las oraciones.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe un interlineado doble (2.0): Aplíquelo a un texto extenso. ¿Observa el inmenso espaciado en blanco que queda entre palabras? Es fantástico para imprimir borradores donde se quiere escribir correcciones a lápiz entre medio.",
      "Explore la alineación a la derecha: Sombreé la fecha y firma solamente, y pulse el botón de 'Alinear a la derecha'. Mire cómo salta al costado extremo, que es la colocación protocolar idónea para iniciar cartas dirigidas al municipio."
    ],
    concepto_clave: 'Controlar la alineación del texto (Izquierda, Centrado, Justificado) y regular el interlineado (espacio vertical entre líneas de caracteres) para asegurar legibilidad.',
    ejercicio_practico: 'Ajustar el cuerpo de una circular vecinal para que quede alineada de forma Justificada con un espaciado interlineal ancho de calibre 1.5.',
    elementos_visuales: [
      {
        icono: 'Botones de alineación',
        etiqueta: 'Botones de Alineación',
        descripcion: 'Botones con barras horizontales iguales que mueven el texto a la izquierda, centro o lo cuadran (Justificar).'
      },
      {
        icono: 'Botón Interlineado',
        etiqueta: 'Botón de Interlineado',
        descripcion: 'Símbolo con dos flechas opuestas verticales y barras para separar renglones.'
      }
    ]
  },
  {
    id: 'word_b1_l7',
    modulo_id: 'word',
    orden: 7,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Ajustar Papel Carta y Oficio con Márgenes',
    descripcion_teorica: 'En Word podemos decidir el tamaño exacto del papel antes de imprimir, evitando que el texto quede fuera de la hoja física. Las dos dimensiones más empleadas en administración comunal son Carta (más corto y ancho, idóneo para notas sencillas) y Oficio (más largo, ideal para contratos oficiales y actas largas). De igual manera, podemos ajustar los márgenes de los bordes para dejar el espacio en blanco necesario para que la impresora real no corte las letras en el papel.',
    explicacion_alternativa: 'Es igual que elegir entre papel de block corto o block de oficio de secretariado antes de sentarse a escribir. Si escribe una carta larga en una hoja corta sin ajustar el tamaño en Word, sus palabras se saldrán del papel impreso. Cambiamos el tamaño a "Carta" o "Oficio" en la barra de herramientas para garantizar una copia impecable y económica.',
    pasos_a_seguir: [
      'Dirija su mirada a la Cinta de Opciones en el borde superior de la pantalla.',
      'Haga un click izquierdo en la pestaña "Disposición" (en algunas computadoras se llama "Formato" o "Diseño de Página").',
      'Localice el botón con la etiqueta "Tamaño" y haga un click izquierdo sobre él.',
      'Seleccione "Carta" en el listado para correspondencia normal, o "Oficio" (o Legal) si el acta es extremadamente larga u oficial.',
      'Haga click en la opción de "Márgenes" al lado del botón de Tamaño, y pulse sobre el formato "Normal" para asegurar un margen amplio y cómodo para su lectura.'
    ],
    pasos_alternativos: [
      'Pulse la pestaña "Disposición" en el menú horizontal de arriba de su Word.',
      'Haga click en "Tamaño" y luego pulse sobre el formato de papel que corresponda a sus hojas físicas en la bandeja.',
      'Haga click en "Márgenes" y escoja la opción "Estrecho" si quiere exprimir al máximo el espacio de la hoja.'
    ],
    tips_de_accesibilidad: 'Si le resulta confuso elegir la opción correcta, deje activado el tamaño Carta con margen Normal. Es el estándar de oficina que no forzará los sensores de ninguna impresora ni recortará renglones.',
    checklist_validacion: [
      'Accedí a la pestaña Disposición o Formato superior en mi PC de escritorio.',
      'Seleccioné el botón Tamaño de papel virtual.',
      'Concluí el cambio de dimensiones eligiendo Carta u Oficio según el caso.',
      'Configuré los márgenes en Normal para asegurar aire de lectura.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe la Orientación Horizontal: Al lado del botón Tamaño, busque el botón 'Orientación' y cámbielo de vertical a 'Horizontal'. Verá que el papel virtual gira por completo como un afiche. ¡Pruébelo y regréselo a Vertical al terminar!",
      "Explore el Margen Personalizado: Al final del listado de márgenes, pulse en 'Márgenes personalizados...'. Podrá digitar a mano cuántos centímetros exactos quiere dejar arriba, abajo y a los lados."
    ],
    concepto_clave: 'Configurar las dimensiones físicas y los bordes limpios de la hoja virtual ("Carta" u "Oficio") para garantizar una correcta correspondencia de impresión.',
    ejercicio_practico: 'Cambiar el tamaño de la hoja en Word real a formato Oficio y ajustar los márgenes a tipo Normal, visualizando cómo se extiende el lienzo de trabajo.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Disposición',
        descripcion: 'Menú superior donde se agrupan las herramientas de estructura de página.'
      },
      {
        icono: 'alineación',
        etiqueta: 'Botón de Tamaño',
        descripcion: 'Menú que permite elegir entre hojas Carta, Oficio o formatos especiales.'
      },
      {
        icono: 'interlineado',
        etiqueta: 'Botón de Márgenes',
        descripcion: 'Permite achicar o ensanchar el marco blanco del contorno del papel.'
      }
    ]
  },
  {
    id: 'word_b1_l8',
    modulo_id: 'word',
    orden: 8,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Insertar el Logo o Firma Digital en el Acta',
    descripcion_teorica: 'Una nota formal dirigida al alcalde gana credibilidad institucional instantánea al lucir el logo de nuestra Junta de Vecinos o el timbre redondo digitalizado del Centro Social en el encabezado. Word nos permite colocar cualquier fotografía o archivo de imagen guardado en el disco duro mediante la pestaña Insertar. Así, reemplazamos el engorroso proceso de timbrar con tinta física de almohadilla hoja por hoja por un elegante membrete digital en segundos.',
    explicacion_alternativa: 'Piense en este paso como pegar un escudo adhesivo o estampar el timbre de goma comunal en la parte superior de un sobre de correspondencia. En vez de recurrir al sello físico manchando sus dedos, le ordena a Word que traiga una foto de su firma o timbre directo desde las carpetas de su computadora y la pegue con suavidad en la posición que desee.',
    pasos_a_seguir: [
      'Haga un click izquierdo al inicio del documento, antes de la primera letra, para situar allí el cursor de escritura.',
      'Vaya a la Cinta de Opciones en la sección superior y presione la pestaña "Insertar" (al lado de Inicio).',
      'Haga un click en el botón con la etiqueta "Imágenes" y escoja la opción "Este dispositivo..." (o "Desde un archivo...").',
      'En el panel de búsqueda que se abre, localice la carpeta "Imágenes" y seleccione la imagen de prueba haciendo doble click sobre ella.',
      'Sostenga con el mouse cualquiera de las esquinas de la imagen insertada (los puntos redondos blancos de los bordes) y arrástrelos hacia el centro para reducir su tamaño.'
    ],
    pasos_alternativos: [
      'Haga click en la pestaña "Insertar" en la hilera superior.',
      'Busque el botón "Formas" en vez de imágenes, seleccione un rectángulo o círculo presionándolo, y arrastre el mouse sobre la hoja en blanco para dibujar un recuadro. Esto simula el logo de manera provisoria.'
    ],
    tips_de_accesibilidad: 'Siempre agregue "Texto Alternativo" a las imágenes para que los lectores de pantalla puedan describirle la imagen en voz alta a personas con ceguera o baja visión. Haga click derecho en la foto dentro de Word y elija "Editar texto alternativo".',
    checklist_validacion: [
      'Accedí a la pestaña Insertar en mi computadora real.',
      'Abrí la galería de imágenes del computador mediante el comando correspondiente.',
      'Pegué una imagen o un logo en el encabezado de mi carta vecinal.',
      'Ajusté la escala de la imagen tirando de las esquinas con cuidado de no descuadrar su proporción.'
    ],
    sugerencias_descubrimiento: [
      "Ajustar Texto: Haga click en la imagen, presione el ícono flotante lateral de un arco negro (Ajustar Texto) y elija 'Estrecho' o 'Delante del texto'. ¡Podrá moverla libremente con el mouse por todo el papel!",
      "Efectos de Imagen: Con la imagen seleccionada, mueva la vista a la pestaña 'Formato de Imagen' arriba y aplíquele una sombra ligera u bordes suaves de alto contraste."
    ],
    concepto_clave: 'Colocar elementos gráficos digitalizados (timbre institucional, firmas manuscritas, escudos vecinales) dentro de documentos de oficina para dotarlos de formalidad.',
    ejercicio_practico: 'Insertar un logo o una imagen decorativa en el encabezado de su correspondencia ordinaria vecinal y redimensionarla armónicamente.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Insertar',
        descripcion: 'Sección para incorporar elementos externos como imágenes, formas o tablas.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Botón de Imágenes',
        descripcion: 'Desplegable que examina las carpetas de su computadora para importar archivos gráficos.'
      },
      {
        icono: 'clic',
        etiqueta: 'Puntos de Selección',
        descripcion: 'Pequeños círculos en los extremos de la imagen que regulan su escala y proporción.'
      }
    ]
  },
  {
    id: 'word_b1_l9',
    modulo_id: 'word',
    orden: 9,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Tablas de Asistencia y Planificación',
    descripcion_teorica: 'Una tabla es una cuadrícula de filas y columnas integrada para tabular información de forma compacta y legible. En el quehacer vecinal, las tablas de Word son ideales para desglosar la directiva (Presidente, Tesorera, Secretaria) o registrar listas de asistencia con nombres y firmas en el acta comicial, logrando una presentación institucional óptima.',
    explicacion_alternativa: 'Es igual que dibujar una grilla con regla y marcador en una pizarra blanca de la sede. Divide el espacio útil de la hoja en casillas donde a la izquierda ponemos "Nombre" y a la derecha colocamos el "Cargo" o la "Firma". En Word no necesitamos reglas; la computadora dibuja todas las divisiones de forma mágica indicándole cuántos casilleros queremos.',
    pasos_a_seguir: [
      'Haga click en la parte baja de su acta cargada en Word real para situar allí la nueva tabla comicial.',
      'Haga un click izquierdo en la pestaña "Insertar" del menú superior.',
      'Presione sobre el botón "Tabla". Al hacerlo, verá deslizarse un menú interactivo lleno de cuadritos blancos.',
      'Desplace su mouse sobre los cuadritos para pintar una cuadrícula de 3 columnas (hacia el lado) y 4 filas (hacia abajo). Haga un click izquierdo para confirmar.',
      'Escriba en la primera casilla de arriba: "Nombre", use la tecla de tabulación (Tab) al lado de la letra Q para saltar de casillero y escriba "Cargo", y en la siguiente "Firma".',
      'Rellene las hileras de abajo con los nombres de sus compañeros de mesa.'
    ],
    pasos_alternativos: [
      'Pulse "Insertar", para mayor firmeza haga click en "Tabla" y escoja la opción manual "Insertar tabla...".',
      'Escriba en el recuadro que sale el número "3" en número de columnas y "4" en número de filas, y pulse Aceptar.'
    ],
    tips_de_accesibilidad: 'Procure rellenar siempre los encabezados de la primera fila en Negrita de modo que cualquier vecino que necesite leer el documento con tecnologías de apoyo pueda ubicarse con total facilidad.',
    checklist_validacion: [
      'Presioné el botón Tabla en la pestaña Insertar de Word.',
      'Diseñé una matriz de 3 columnas por 4 filas seleccionando las celdas con el ratón.',
      'Asigné encabezados lógicos en la primera línea de la tabla.',
      'Inserté información en cada casilla utilizando la tecla Tabulación para saltar de manera ágil.'
    ],
    sugerencias_descubrimiento: [
      "Estilos de Tabla: Haga un click sobre su tabla y vaya a la pestaña 'Diseño de tabla' arriba. Elija una plantilla de color de alto contraste con hileras sombreadas alternas, queda sumamente profesional.",
      "Insertar Filas Rápidas: Sitúe el cursor en la última casilla abajo a la derecha de la tabla y pulse la tecla Tab. ¡Vea cómo Word le regala un renglón nuevo idéntico!"
    ],
    concepto_clave: 'Crear e introducir cuadrículas organizativas de filas y columnas para resumir cargos, horarios y asambleas de forma solemne.',
    ejercicio_practico: 'Insertar una tabla de 3 columnas por 4 filas en Word para catalogar la directiva vecinal de su Centro Social.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Insertar',
        descripcion: 'Ubicación superior de las alternativas de objetos.'
      },
      {
        icono: 'viñeta',
        etiqueta: 'Selector de Filas y Columnas',
        descripcion: 'Panel desplegable de cuadritos para dibujar visualmente las tablas.'
      },
      {
        icono: 'enter',
        etiqueta: 'Tecla Tabulación',
        descripcion: 'Tecla con dos flechas encontradas a la izquierda del teclado para saltar de celda velozmente.'
      }
    ]
  },
  {
    id: 'word_b1_l10',
    modulo_id: 'word',
    orden: 10,
    nivel: 'Nivel 1: Funcional',
    programa: 'Word',
    titulo: 'Revisar e Imprimir la Carta en Papel Físico',
    descripcion_teorica: 'El proceso final en todo trabajo de secretariado es transferir nuestra carta oficial desde la pantalla virtual de Word hacia una hoja de papel física real mediante la impresora. Word incorpora una sección de "Vista Previa" sumamente útil de alto contraste donde podemos constatar exactamente cómo lucirá la carta impresa y cuántas hojas ocupará antes de gastar tinta innecesariamente, lo que protege el presupuesto comunal.',
    explicacion_alternativa: 'Es el momento en que abrimos la bandeja y retiramos nuestra correspondencia recién impresa. Al presionar "Imprimir", la computadora le envía las instrucciones a su impresora y esta plasma con tinta real cada letra. La Vista Previa le ayuda a evitar los borradores fallidos y las hojas arrugadas.',
    pasos_a_seguir: [
      'En la esquina superior izquierda de su pantalla de Word, busque y presione el botón azul "Archivo".',
      'Desplace su mouse a lo largo del menú vertical y seleccione haciendo un click izquierdo en "Imprimir".',
      'Observe la enorme "Vista Previa" en el costado derecho de la pantalla: es una simulación perfecta de su hoja con su redacción tal como saldrá impresa.',
      'Confirme en el casillero numérico "Copias:" cuántas hojas físicas de esta carta requiere (por ejemplo: "2" para dejar una de respaldo en el archivador).',
      'Encienda su impresora comunal real, asegúrese de que tenga papel Carta, y haga un click izquierdo en el gran botón "Imprimir".'
    ],
    pasos_alternativos: [
      'Haga uso del atajo veloz de teclado: mantenga presionado el botón "Control" e hunda la letra "P" en su teclado real para saltar directo a la pantalla de impresión.',
      'Revise la composición general en la vista preliminar y active el botón principal Imprimir.'
    ],
    tips_de_accesibilidad: 'Si la tipografía de su carta final se ve excesivamente pequeña para los vecinos mayores en la Vista Previa, regrese, sombreé el texto con Control+E y eleve el tamaño de letra utilizando el selector numérico antes de enviar la orden física.',
    checklist_validacion: [
      'Ingresé al panel administrativo Archivo de Word.',
      'Activé el panel de impresión visual en pantalla.',
      'Inspeccioné la conformación del texto en la Vista Previa resguardando los márgenes.',
      'Verifiqué que los parámetros de copia concuerden antes de mandar a rodar el papel.'
    ],
    sugerencias_descubrimiento: [
      "Imprimir a Doble Cara: Debajo de la impresora seleccionada, busque el menú 'Imprimir a una sola cara' y cámbielo por 'Imprimir a doble cara'. Esto reducirá a la mitad el gasto de papel.",
      "Elegir Páginas Específicas: En el recuadro 'Páginas' puede escribir por ejemplo '1-2' para imprimir solo las primeras oraciones y evitar gastar hojas anexas de firmas."
    ],
    concepto_clave: 'Inspeccionar visualmente las plantillas terminadas utilizando la Vista Previa y accionar el envío físico o conversión digital a papel.',
    ejercicio_practico: 'Lanzar el comando de impresión en su PC real utilizando Vista Previa para revisar la composición de la correspondencia.',
    elementos_visuales: [
      {
        icono: 'disco',
        etiqueta: 'Pestaña Archivo',
        descripcion: 'Punto de partida de la configuración de guardado e impresión.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Vista Previa de Impresión',
        descripcion: 'Panel que simula el resultado estético final sobre papel real.'
      },
      {
        icono: 'enter',
        etiqueta: 'Botón Imprimir',
        descripcion: 'El disparador redondo superior que envía los comandos a la impresora de oficina.'
      }
    ]
  },

  // ==========================================
  // EXCEL - NIVEL 1: FUNCIONAL
  // ==========================================
  {
    id: 'excel_n1_l1',
    modulo_id: 'excel',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'La Sede Social en Cuadrícula',
    descripcion_teorica: 'Excel no es una hoja de papel en blanco, es una cuadrícula compuesta por miles de cajoncitos llamados "Celdas". Imagínela como el casillero organizador de madera que tenemos en la junta vecinal para guardar cartas por orden alfabético. Las columnas verticales se identifican por letras (A, B, C...) y las filas horizontales por números (1, 2, 3...). La esquina superior izquierda donde se cruza la columna A y la fila 1 se llama de manera única celda "A1".',
    explicacion_alternativa: 'Piense en Excel como el plano ordenado de calles de un vecindario municipal. Si busca la dirección "Calle B con número de casa 2", sabe exactamente a dónde caminar. En Excel, la celda "B2" es la combinación perfecta entre la columna B y la fila de altura número 2.',
    pasos_a_seguir: [
      'Abra esta instrucción en su teléfono móvil y encienda Excel real en su computadora.',
      'Haga un click izquierdo en el primer recuadro arriba a la izquierda. Verá que se demarca con un borde verde grueso. Esa es la celda A1.',
      'Use la flecha derecha de su teclado real para moverse al cuadro del lado. Ahora está situado en la celda "B1".',
      'Use la flecha abajo para descender un espacio. Acaba de estacionarse en la celda "B2".'
    ],
    pasos_alternativos: [
      'Lea los pasos desde su celular y practique directamente en el programa Excel de su PC.',
      'Haga click en cualquier parte del centro de la cuadrícula.',
      'Mire la esquina superior izquierda de Excel (arriba de las letras). Ahí hay un recuadro blanco que le dice exactamente el nombre del cajón en el que está parado (ej: C5 o D10).'
    ],
    tips_de_accesibilidad: 'Para personas con baja visión, se puede activar una cuadrícula más gruesa. Seleccione toda la hoja con "Control + E", vaya a bordes y aplique "Todos los bordes" para demarcar con tinta negra gruesa cada separación.',
    checklist_validacion: [
      'He abierto un libro o documento de Excel nuevo en mi PC real.',
      'Logré posicionarme en la celda A1 haciendo un click arriba a la izquierda.',
      'Utilicé las flechas de dirección del teclado físico para moverme entre casillas.',
      'Identifiqué con éxito el cambio de nombre de celda en la parte superior.'
    ],
    sugerencias_descubrimiento: [
      "¡Sombree un conjunto de celdas (un Rango) para experimentar!: Presione el botón izquierdo del mouse en 'A1' y, sin soltarlo, muévalo hacia abajo y la derecha hasta llegar a 'C3'. Verá cómo se tiñen de celeste claro varios cajones juntos. Esto se llama un 'Rango' en Excel, y sirve para colorear o borrar muchas cosas de un solo golpe.",
      "Pruebe a agrandar el ancho de la columna A: Coloque su puntero del mouse justo en la línea divisoria vertical que separa el encabezado de la letra 'A' y el de la 'B' (arriba del todo). Verá que su mouse cambia para ser una cruz con dos flechas horizontales. Haga click izquierdo y arrástrelo hacia la derecha. ¡Qué divertido! ¡Vea cómo la columna A se ensancha tanto como una calle real! Esto le servirá para poner nombres muy largos sin que se encimen.",
      "Escriba un texto muy largo en 'A1': Escriba por ejemplo 'Lista de Vecinos Presentes de la Junta'. Notará que el texto pasa por encima de la columna B. Ahora haga click en 'B1' y escriba el número '1'. ¡Mire cómo se corta el texto largo anterior! Esto demuestra que la celda tiene límites virtuales, y por eso ensanchar la columna en el paso anterior le ayuda tanto a organizar el inventario."
    ]
  },
  {
    id: 'excel_n1_l2',
    modulo_id: 'excel',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'El Inventario de Recursos Vecinales',
    descripcion_teorica: 'Para organizar un inventario claro de los bienes de nuestra sede social (como sillas, mesas, tazas y parlantes), debemos ordenar los datos en columnas separadas. Al hacer esto, cada fila representa un recurso individual en orden alfabético o de valor. Escribimos la categoría arriba del todo en la celda para estructurar el reporte de forma administrativa impecable.',
    explicacion_alternativa: 'Es igual que armar una lista de compras en una libreta de papel cuadriculado: en la primera columna escribe los nombres de los productos ("Sillas", "Té") y al lado, en la columna derecha, escribe cuántas unidades hay disponibles ("50", "200"). El papel digital almacena todo de forma permanente sin borrones.',
    pasos_a_seguir: [
      'Consulte la guía en su teléfono móvil y trabaje en el programa Excel real de su computadora.',
      'En la celda A1 escriba el título de la columna: "RECURSO" y pulse Enter.',
      'Abajo, en las celdas A2, A3 y A4, escriba hacia abajo: "Sillas", "Mesas" y "Tazas" (presionando Enter después de escribir cada una).',
      'Haga click en la celda B1 y escriba el título de la columna: "CANTIDAD".',
      'Abajo, en las celdas B2, B3 y B4 escriba respectivamente los números: "50", "12" y "80".'
    ],
    pasos_alternativos: [
      'Mantenga esta guía en su celular y complete la práctica en el Excel real de su PC.',
      'Coloque en la fila de arriba los encabezados "ARTÍCULO" en la casilla A1 y "CANTIDAD" en la casilla B1.',
      'Escriba hacia abajo los materiales comunales de su oficina y al lado sus respectivos valores numéricos.'
    ],
    tips_de_accesibilidad: 'Para que el texto de su inventario sea plenamente visible para ojos cansados, puede presionar el botón "Zoom" de aumento (abajo a la derecha en la ventana de Excel) o mantener presionada la tecla "Control" y mover la rueda del mouse hacia adelante para ampliar la cuadrícula gigante.',
    checklist_validacion: [
      'Creé los encabezados Claros "RECURSO" y "CANTIDAD" en la fila superior.',
      'Completé una lista vertical con tres o más bienes reales de la junta de vecinos.',
      'Coloqué las cantidades correspondientes alineadas al lado de cada producto.',
      'Utilicé la ampliación visual (Zoom) para revisar los datos con confort.'
    ],
    sugerencias_descubrimiento: [
      "¡Experimente con las opciones de 'Alineación' de celdas!: Por defecto, Excel coloca los textos al lado izquierdo y los números al lado derecho de cada cajonera virtual. Seleccione las celdas B2, B3 y B4 de sus cantidades, vaya a la pestaña Inicio en la parte superior y pulse el botón de 'Centrar'. ¡Admire el orden! Ahora los números están exactamente en el centro del casillero.",
      "Pruebe a pintar el casillero (Relleno de celda): Resalte la celda A1 de sus encabezados con un click de mouse. Busque arriba en la barra de herramientas el ícono que parece un 'Tarrito de Pintura' cayendo. Pulse la flechita lateral y seleccione un color Celeste Claro o de Alto Contraste Amarillo. ¿Se da cuenta cómo de inmediato nuestra base de datos parece un cuadro oficial?"
    ]
  },
  {
    id: 'excel_n1_l3',
    modulo_id: 'excel',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'Suma y Presupuesto de Actividades',
    descripcion_teorica: 'El momento clave en administración vecinal es sumar el presupuesto total de un bingo de beneficencia o de los gastos mensuales. En lugar de usar una calculadora de mano exponiéndose a errores de digitación, le enseñamos a Excel a sumar de forma mágica. Toda operación matemática requiere colocar el signo igual "=" al principio para activar el procesador numérico automático.',
    explicacion_alternativa: 'Imagine que el signo igual es un cartero especial al que le encarga una tarea en la municipalidad. Si solo grita los números por la ventana, el cartero se va de largo. Al poner el "=" primero en la celda, el cartero se detiene, toma su orden ("50 + 25") y le entrega la respuesta de forma instantánea.',
    pasos_a_seguir: [
      'Siga estas explicaciones desde su teléfono y acomódese frente a su computadora.',
      'Haga click en la casilla vacía B5 de su hoja de cálculo actual.',
      'Busque en su teclado físico la tecla para poner el signo igual "=" (normalmente requiere sostener la tecla Shift y presionar el número 0 de arriba).',
      'Escriba de recorrido: "= 50 + 12 + 80" para sumar el inventario vecinal anterior.',
      'Presione la tecla "Enter" en su teclado real y vea cómo aparece de forma mágica la cifra de la suma final: "142".'
    ],
    pasos_alternativos: [
      'Use su teléfono para la lectura de la guía y el Excel real de su PC para trabajar.',
      'Seleccione la casilla donde quiere ver el total presupuestado.',
      'Escriba el signo "=" seguido de los números a calcular sumando con el símbolo más (+) de su teclado.',
      'Pulse Enter con decisión para que la computadora resuelva la operación matemática.'
    ],
    tips_de_accesibilidad: 'Si tiene problemas para localizar el símbolo "+" o "=" en su teclado real, puede solicitarle al narrador integrado de Windows que lea los caracteres por pantalla o utilizar un teclado con letras de alto contraste negro sobre blanco.',
    checklist_validacion: [
      'Me ubiqué en una casilla vacía de la hoja de cálculo en mi computadora.',
      'Puse obligatoriamente el signo "=" al inicio para preparar el cálculo inteligente.',
      'Escribí los números correctos separados por el símbolo "+".',
      'Presioné la tecla Enter y validé que la suma es resuelta por la computadora.'
    ],
    sugerencias_descubrimiento: [
      "¡Experimente la fórmula inteligente de Excel sumando las celdas directamente!: En la celda B5, pulse dos veces para borrar y escriba en su lugar: `=B2+B3+B4`. Al presionar Enter, el resultado vuelve a dar 142 de forma mágica. ¿La ventaja? Si cambia el inventario real en B2 de de Sillas escribiendo '60' en vez de '50' en su PC, oiga cómo el total en B5 ¡se recalcula automáticamente a 152 sin que usted meta mano!.",
      "Pruebe con la fórmula más avanzada de todas: `=SUMA(B2:B4)`. Póngala en B5 y pulse Enter. Los dos puntos ':' le indican a la computadora: 'Suma desde el cajón B2 hasta el cajón B4, pasándole por encima a todo lo que esté en medio'. Es la clave que emplean los contadores para calcular listas de más de cien vecinos en un segundo."
    ]
  },
  {
    id: 'excel_n1_l4',
    modulo_id: 'excel',
    orden: 4,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'Filtros Rápidos en Listas de Vecinos',
    descripcion_teorica: 'Cuando la lista de vecinos de la sede social supera las cincuenta personas, buscar manualmente quiénes pertenecen a un comité específico o quiénes tienen sus cuotas al día se vuelve sumamente tedioso. Excel nos ofrece los "Filtros Rápidos". Estos actúan como un colador de cocina inteligente: ocultan temporalmente las filas que no cumplen el criterio buscado (por ejemplo, los vecinos de otra calle) y nos muestran únicamente lo solicitado, sin borrar ningún dato del disco duro.',
    explicacion_alternativa: 'Es igual que buscar las fichas de los vecinos que viven en la calle "O\'Higgins" en una caja archivadora real. En vez de mirar papel por papel, le pide a Excel que agrupe y le muestre de golpe solo las personas de esa calle. Al terminar, quita el "colador" y la lista completa vuelve a aparecer intacta en su pantalla de forma idéntica.',
    pasos_a_seguir: [
      'Posicione su mirada en la primera fila de Excel real donde escribió "NOMBRE", "CALLE" y "ESTADO" en la parte superior.',
      'Haga un click izquierdo en el encabezado de la columna "CALLE" para seleccionarla.',
      'Diríjase a la pestaña "Datos" en la Cinta de Opciones alta.',
      'Siga de largo y haga click en el gran botón que simula un "Embudo de Filtro". Verá aparecer pequeñas flechas grises apuntando hacia abajo en cada encabezado.',
      'Haga click en la flechita gris al lado de "CALLE", desmarque la opción "(Seleccionar todo)" de la lista, marque únicamente su calle ("O\'Higgins") y pulse el botón Aceptar.'
    ],
    pasos_alternativos: [
      'Sitúese en la pestaña "Inicio" de Excel real en su computadora.',
      'Busque en el extremo derecho de las herramientas el botón que reza "Ordenar y filtrar" (con una lupa y un embudo).',
      'Haga click en "Filtro". Aparecerán flechas de selección en la primera fila de la planilla para colará la lista fácilmente.'
    ],
    tips_de_accesibilidad: 'La combinación de teclas "Control + Shift + L" activa o desactiva los filtros en Excel instantáneamente, evitándole esforzar el mouse en la barra alta. Es un atajo de alta eficiencia para directores con cansancio visual.',
    checklist_validacion: [
      'Puse un encabezado ordenado sobre cada columna de datos en Excel.',
      'Activé los menús flotantes presionando el botón "Filtro" (ícono del embudo).',
      'Desplegué el listado de opciones de una columna haciendo click en su flecha.',
      'Filtré los registros seleccionando un solo valor específico con éxito.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe a limpiar el filtro: Cuando termine de examinar la calle seleccionada, vuelva a oprimir la flechita con forma de embudo y elija 'Borrar filtro de CALLE'. Verá que los demás vecinos reaparecen en fila al instante.",
      "Ordene de la A a la Z: Presione la misma flechita en la columna de nombres y seleccione 'Ordenar de A a Z'. Excel acomodará los vecinos por orden alfabético de manera impecable y automática."
    ],
    concepto_clave: 'Usar filtros en las cabeceras de columnas para aislar, agrupar y visualizar conjuntos de datos de forma temporal.',
    ejercicio_practico: 'Establecer filtros en una lista de asistencia comunal de Excel para agrupar únicamente a los socios activos en una asamblea real.',
    elementos_visuales: [
      {
        icono: 'embudo',
        etiqueta: 'Botón de Filtro',
        descripcion: 'Forma de embudo arriba en la barra de herramientas que enciende las opciones de colado.'
      },
      {
        icono: 'interlineado',
        etiqueta: 'Flechas de Despliegue',
        descripcion: 'Menús que aparecen en las celdas de encabezado para elegir qué registros exhibir.'
      }
    ]
  },
  {
    id: 'excel_n1_l5',
    modulo_id: 'excel',
    orden: 5,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'Gráficos de Contabilidad Sencillos',
    descripcion_teorica: 'Un reporte financiero de la sede lleno de números puede ser difícil de explicar en una reunión vecinal ruidosa. Los ojos humanos perciben mucho mejor las proporciones visuales. Excel nos permite transformar una pequeña tabla de ingresos y egresos de caja en un "Gráfico de Barras" o un "Gráfico Circular" de alto contraste en un segundo. Así, mostramos a toda la asamblea de forma solemne qué actividades aportaron más fondos al centro social.',
    explicacion_alternativa: 'Es como dibujar una torta de cumpleaños en la pizarra de la junta de vecinos: la porción de chocolate más grande representa el dinero recaudado en el bingo comicial, y la porción pequeña es lo que costaron las bebidas. En la computadora la torta se dibuja perfecta y con colores luminosos pulsando el botón de Gráfico, lo que evita que tenga que usar escuadras.',
    pasos_a_seguir: [
      'En un libro de Excel real, escriba en la columna A: "Bingo" (celda A2), "Rifa" (A3) y "Cuotas" (A4).',
      'Al lado, en la columna B, escriba el valor recaudado de cada uno: "400" (B2), "150" (B3) y "200" (B4).',
      'Sombreé todo el rango arrastrando el mouse desde la celda A1 hasta la casilla B4.',
      'Vaya a la pestaña "Insertar" en la Cinta de Opciones superior de Excel.',
      'Localice el sector "Gráficos" y haga un click izquierdo sobre el botón con forma de "Gráfico Circular" o "Gráfico de Columnas". Seleccione la primera ilustración sencilla que se le ofrezca.'
    ],
    pasos_alternativos: [
      'Sombreé su pequeña tabla de cuentas con el mouse de forma fluida.',
      'Presione el botón "Gráficos recomendados" que está en la pestaña Insertar de Excel.',
      'La computadora le mostrará plantillas completas listas; elija una de barras simples con fondo claro y pulse Aceptar.'
    ],
    tips_de_accesibilidad: 'Use gráficos con etiquetas de datos numéricas escritas directamente en cada barra para que las personas con problemas de daltonismo o poca percepción del color entiendan la proporción exacta sin perderse por las gamas de colores.',
    checklist_validacion: [
      'Registré dos columnas claras: una para los nombres y otra para los valores numéricos.',
      'Sombreé por completo la base de datos excluyendo celdas vacías innecesarias.',
      'Fui a la sección de Insertar superior de Excel real.',
      'Creé el gráfico ajustando su despliegue y comprobando que sea claro para todas las edades.'
    ],
    sugerencias_descubrimiento: [
      "Cambie el título del gráfico: Haga un doble click en las letras que dicen 'Título del gráfico' arriba de las barras. Borre y tipee 'Ingresos del Semestre 1'. Quedará listo para pegarlo en su acta municipal.",
      "Pruebe el Gráfico de Torta o Queso: Borre el gráfico seleccionado presionando Suprimir, vuelva a sombrear las celdas e intente insertar un 'Gráfico Circular'. Es el más entretenido de mirar."
    ],
    concepto_clave: 'Convertir matrices de datos estructurados de Excel en gráficos circulares o de barras que representen visualmente las proporciones financieras.',
    ejercicio_practico: 'Crear un reporte en Excel y graficar los gastos de reparación de la techumbre de la sede para que los vecinos vean con claridad el desembolso real.',
    elementos_visuales: [
      {
        icono: 'gráfico',
        etiqueta: 'Sector Gráficos',
        descripcion: 'Colección de botones arriba que grafican valores numéricos de forma colorida.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Barras Resultantes',
        descripcion: 'Formas geométricas de colores que escalan de altura de acuerdo a lo que digitó.'
      }
    ]
  },
  {
    id: 'excel_n1_l6',
    modulo_id: 'excel',
    orden: 6,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'Formatear Celdas y Bordes de Alto Contraste',
    descripcion_teorica: 'Por defecto, la fina cuadrícula gris de Excel en pantalla es solo una guía virtual visual y no se imprime en papel físico, dejando que el reporte luzca flotante y desordenado al salir de la máquina. El formato de celdas nos permite trazar "Bordes" de tinta gruesa negra alrededor de los números para encuadrarlos administrativamente, ensanchar el tamaño de letra de los totales y teñir con rellenos suaves de alto contraste los renglones de encabezado.',
    explicacion_alternativa: 'Es igual que tomar un plumón marcador negro y una regla de madera clásica sobre la cartulina de su sede para delinear los casilleros del bingo de modo que sea legible desde el fondo de la asamblea. En Excel, seleccionamos las casillas del inventario y le ordenamos poner bordes gruesos para que el listado no parezca flotar.',
    pasos_a_seguir: [
      'Sombreé su tabla de inventario completa en Excel real arrastrando el mouse sobre ella.',
      'En la Cinta de Opciones, pestaña "Inicio", busque el botón "Bordes" (pequeño recuadro dividido en cuatro que está al lado de la letra Negrita).',
      'Haga click en su flechita, recorra la lista de opciones y elija "Todos los bordes". ¡Vea cómo toda la cuadrícula cobra una línea negra sólida de inmediato!',
      'Haga click en la fila 1 de sus títulos para sombrearlos únicamente, y presione el ícono "Relleno" (el bote de pintura volcando color).',
      'Elija un color con alto contraste cómodo para su vista (como amarillo claro o verde pálido) para resaltar la cabecera.'
    ],
    pasos_alternativos: [
      'Seleccione las celdas de totales presupuestarios de la directiva comicial.',
      'Haga click derecho en medio del sombreado y escoja la opción "Formato de celdas...".',
      'Haga click en la pestaña "Borde", presione el estilo de línea doble que usan habitualmente los auditores para contabilidad y pulse Aceptar.'
    ],
    tips_de_accesibilidad: 'Pauta de Contraste: Para resguardar las normas de accesibilidad inclusive con cambios de contraste de claro a oscuro del navegador exterior, recuerde que las cuadrículas internas del área de trabajo virtual de Excel mantendrán fondo blanco y letras oscuras simulando hojas físicas impresas. El cambio de contraste oscuro afecta a las márgenes exteriores de navegación del programa.',
    checklist_validacion: [
      'Presioné el botón "Bordes" en la pestaña Inicio de Excel real.',
      'Escogí "Todos los bordes" para blindar el dibujo de líneas negras al imprimir.',
      'Pinté los encabezados superiores usando un tono de relleno suave y formal.',
      'Apliqué Negrita a las sumas finales dándoles relevancia en el balance.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe el Estilo Moneda ($): Seleccione las casillas que tienen números. En la misma pestaña Inicio, busque el ícono de un signo Peso '$' al centro y púlselo. ¡Verá que Excel agrega el signo '$' y puntos de miles automáticamente como en los bancos!",
      "Aumentar decimales: Al lado de ese signo de dinero, localice los íconos con flechas azules apuntando a ceros; púlselo para quitar o agregar centavos virtuales al balance."
    ],
    concepto_clave: 'Aplicar bordes físicos, fuentes de alto contraste y rellenos de color para dotar a la cuadrícula de una jerarquía de lectura legible de uso administrativo.',
    ejercicio_practico: 'Establecer bordes dobles y fondo amarillo de cabecera a una planilla real de egresos comunales en su PC de escritorio.',
    elementos_visuales: [
      {
        icono: 'viñeta',
        etiqueta: 'Selector Bordes',
        descripcion: 'Cajoncito con líneas que dibuja las grillas virtuales en color negro sólido.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Bote de Relleno',
        descripcion: 'Pinta el fondo de los casilleros seleccionados para agrupar visualmente datos.'
      }
    ]
  },
  {
    id: 'excel_n1_l7',
    modulo_id: 'excel',
    orden: 7,
    nivel: 'Nivel 1: Funcional',
    programa: 'Excel',
    titulo: 'Imprimir la Planilla y Organizar Márgenes',
    descripcion_teorica: 'Las planillas de Excel son infinitamente anchas hacia el costado derecho de la pantalla, lo que provoca que, al enviarlas a imprimir sin configurar nada, un cuadro de inventario completo salga cortado a la mitad en dos hojas físicas arruinando la presentación vecinal. Para corregirlo, aprendemos a orientar el papel físico virtual en posición "Horizontal" y regular los márgenes visuales desde la Vista Previa de impresión antes de gastar valioso papel de la sede.',
    explicacion_alternativa: 'Es igual que colocar una regla y girar la hoja de su cuaderno a lo ancho antes de dibujar un croquis costoso. Al cambiar la orientación a Horizontal en Excel virtual, le ordena al programa que aproveche al máximo el espacio de la impresora real reduciendo drásticamente el número de hojas impresas de un solo golpe.',
    pasos_a_seguir: [
      'Vaya a la Cinta de Opciones de Excel real en su computadora.',
      'Haga un click izquierdo en la pestaña "Disposición de página" (también llamada "Formato" o "Diseño" en algunas versiones).',
      'Haga click en "Orientación" y seleccione la opción "Horizontal" (la hoja virtual girará recostada de lado).',
      'En la esquina superior izquierda, pulse el botón "Archivo" y luego seleccione haciendo click en la opción "Imprimir".',
      'Observe el panel derecho con la gran Vista Previa de Impresión: es una simulación exacta en blanco y negro de cómo se acomodan sus inventarios vecinales sobre la hoja física.'
    ],
    pasos_alternativos: [
      'Utilice el atajo físico abreviador de Excel: pulse juntas las teclas "Control + P" en su teclado real.',
      'Mire a ver si todo el inventario de gastos cabe en una sola hoja virtual en la Vista Previa.',
      'Si se corta alguna columna al final, encienda la escala de ajuste rápido seleccionando "Ajustar todas las columnas en una página".'
    ],
    tips_de_accesibilidad: 'La función "Ajustar todas las columnas en una página" disminuye levemente la letra, por lo que es idónea para evitar saltos. Si la tipografía le resulta muy pequeña, retome el zoom regular virtual de la pantalla de su PC y elimine columnas vacías duplicando su espacio útil.',
    checklist_validacion: [
      'Accedí a la pestaña "Disposición de página" en Excel de escritorio.',
      'Giré el lienzo virtual a Horizontal aprovechando el ancho disponible.',
      'Puse en marcha la ventana de impresión (Control + P) para examinar la distribución general.',
      'Verifiqué que no queden columnas cortadas o remanentes huérfanos al borde.'
    ],
    sugerencias_descubrimiento: [
      "Imprimir en PDF: En el listado de impresoras del panel, seleccione la que dice 'Microsoft Print to PDF' y pulse Imprimir. Excel no expulsará papel, sino que generará un plano digital impecable para enviar por correo.",
      "Reduzca los márgenes físicos: En el menú de impresión lateral, localice 'Márgenes normales' y cámbielo por 'Márgenes estrechos'. ¡Mire cómo la superficie imprimible se amplía de golpe!"
    ],
    concepto_clave: 'Girar la orientación del lienzo virtual a modo Horizontal y utilizar el escalado rápido de página de Excel para garantizar impresiones íntegras libres de cortes.',
    ejercicio_practico: 'Convertir una hoja de gastos extendidos de su Centro Social a horizontal en Excel, comprobando su integridad estética en la Vista Previa preliminar.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Disposición',
        descripcion: 'Menú superior de diseño donde reside el control de giro de la hoja.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Ajuste de Escala',
        descripcion: 'Control que escala toda la información para asegurar que quepa dentro de la hoja física.'
      }
    ]
  },

  // ==========================================
  // POWERPOINT - NIVEL 1: FUNCIONAL
  // ==========================================
  {
    id: 'powerpoint_n1_l1',
    modulo_id: 'powerpoint',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'El Entorno de las Láminas (Perder el miedo a PowerPoint)',
    descripcion_teorica: 'PowerPoint no es para escribir cartas kilométricas en hileras apretadas. El alma del programa son las "Diapositivas" o "Láminas", que actúan de idéntica manera que los carteles gigantes que sostienen los manifestantes en la plaza o las cartulinas de exposición de la antigua escuela. Al encender el software, vemos una Cinta de Opciones alta muy simple, una columna izquierda con un listado miniatura de nuestras láminas en secuencia, y un gran lienzo central con recuadros punteados listos para que pinchemos y digitemos títulos gigantes.',
    explicacion_alternativa: 'Imagine que tiene un fardo de cartulinas de colores guardado bajo llave en el armario de la sede social. Cada lámina gigante que saque representará una hoja de PowerPoint. Si escribe demasiadas cosas con letra chiquita, los vecinos del fondo de la asamblea no leerán nada. Mantenga la lámina limpia, con pocas palabras y letras inmensas para hablarle de frente a su comunidad.',
    pasos_a_seguir: [
      'Sitúese con tranquilidad frente a su computador de mesa real y mantenga este celular al lado suyo.',
      'Abra el programa Microsoft PowerPoint real (el ícono representativo de color naranja rojizo con una letra "P" blanca).',
      'Seleccione "Presentación en blanco" haciendo un click izquierdo de ratón en la plantilla de bienvenida.',
      'Contemple la fisonomía de la pantalla física de su PC: en el centro hay un enorme lienzo blanco con el rótulo "Haga clic para agregar título".',
      'Haga un click con su dedo guiando el mouse en medio de ese recuadro de título y observe el nacimiento del cursor parpadeante listo para teclear.'
    ],
    pasos_alternativos: [
      'Use su teléfono para entender la secuencia y active el programa PowerPoint en su máquina física.',
      'Cree un archivo en blanco y presione en Inicio.',
      'Observe a la izquierda de su monitor una miniatura numerada con el entero "1". Eso prueba que cuenta con su primera lámina lista en la secuencia.'
    ],
    tips_de_accesibilidad: 'Si le cuesta guiar el cursor por los marcos flotantes de título, oprima la tecla "Tabulación" o "Enter" en su teclado real: el foco seleccionará de forma automática el casillero principal agrandando el contorno para que escriba sin forzar los dedos.',
    checklist_validacion: [
      'Inicié la herramienta oficial de PowerPoint en mi computador real.',
      'Accedí a un borrador o plantilla limpio de presentación en blanco.',
      'Distinguí la columna lateral izquierda de secuencias y el lienzo central.',
      'Hice un click izquierdo en el recuadro punteado activando las letras de título.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe crear una hoja nueva: En la pestaña de Inicio en la barra superior, busque un botón grande con una estrella que reza 'Nueva diapositiva'. Púlselo. Verá nacer la número '2' en la hilera izquierda al instante. ¡Dibuja tantas láminas como la asamblea necesite!",
      "Cambie el Zoom cómodo: Al igual que en Word y Excel, use la lupa con '-' y '+' abajo a la derecha de la pantalla de su PC para acomodar la visual de su cartel."
    ],
    concepto_clave: 'Identificar la estructura básica de PowerPoint que consta de miniaturas secuenciales a la izquierda y el área interactiva de la lámina activa en el centro.',
    ejercicio_practico: 'Entrar a PowerPoint en su PC real, ubicar las zonas clave e iniciar un título comunitario para perder el miedo al programa.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Cinta de Herramientas',
        descripcion: 'Fila superior donde se controlan las láminas, letras y efectos visuales.'
      },
      {
        icono: 'viñeta',
        etiqueta: 'Miniaturas de Diapositivas',
        descripcion: 'Esquema tipo rollo fotográfico a la izquierda para ver el orden de la presentación de la junta.'
      }
    ]
  },
  {
    id: 'powerpoint_n1_l2',
    modulo_id: 'powerpoint',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'Letras Gigantes para Asambleas Vecinales',
    descripcion_teorica: 'El error más habitual en las directivas comunitarias es llenar las diapositivas de textos interminables comprimidos en letra tamaño 12. Las personas adultas mayores sentadas en las últimas bancas de la asamblea no verán absolutamente nada creadas las diapositivas bajo ese formato. PowerPoint está concebido para usar fuentes de "Tamaño 40" o superior. El texto debe resumirse en títulos contundentes de pocas palabras de alto contraste (fondo claro con letras negras sólidas), lo que garantiza que todo el salón capte el mensaje.',
    explicacion_alternativa: 'Es igual que armar carteles de señalética de las calles municipales. Si los hace con letras microscópicas, ningún auto se enterará del cruce del camino. Utilice letras inmensas como titulares de periódicos: ponga el nombre del proyecto o asamblea grande, y guarde los detalles de redacción para decirlos de viva voz con el micrófono real.',
    pasos_a_seguir: [
      'Tome su mouse con el computador de mesa real encendido frente al PowerPoint activo.',
      'Haga un click izquierdo en el recuadro de título central de su primera diapositiva.',
      'Escriba la convocatoria formal en letras mayúsculas: "BALANCE GRAL. DE CUENTAS SOCIOVEDI".',
      'Sombreé todo lo escrito arrastrando el mouse de manera firme encima de la frase.',
      'Vaya a la pestaña "Inicio" arriba, busque el casillero numérico selector y cámbielo al tamaño gigante "44" o "48".',
      'Presione el botón "N" de Negrita para espesar la tipografía y hacerla ultra-legible para todos.'
    ],
    pasos_alternativos: [
      'Haga click dentro del cajón pre-rotulado de su lámina activa.',
      'Escriba un concepto breve como: "Bingo Junta Vecinal 2026".',
      'Sombréelo de corrido usando su teclado con Control + E en su PC física y eleve la altura del texto a tamaño gran escala con los botones de aumento rápido.'
    ],
    tips_de_accesibilidad: 'Pauta de Contraste: Al diseñar las diapositivas, mantenga un alto contraste impecable. Use fondos blancos con textos negros o azul oscuro intenso. Jamás coloree diapositivas con letras amarillas sobre fondos blancos, ya que anula la legibilidad para personas de baja visión.',
    checklist_validacion: [
      'Redacté un concepto directo y descriptivo en la primera diapositiva de mi PC.',
      'Sombreé con fluidez las letras de mi titular comicial.',
      'Establecí el tamaño del texto en calibre 44 o superior para asambleas.',
      'Apliqué el formato Negrita engrosando la letra contra el fondo claro.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe con la fuente 'Inter' o 'Arial Black': Con las letras sombreadas, vaya a la caja de fuentes superior (al lado del tamaño). Elija una tipografía gruesa sin adornos en los bordes como 'Arial Black' o 'Impact'. ¡Se leerá espléndida desde lejos!",
      "Achique el cuadro de texto: Haga click sobre una de las líneas del contorno del cuadro y arrástrelo hacia adentro de la pantalla. Verá que puede acomodar dónde flota su titular en el lienzo blanco virtual."
    ],
    concepto_clave: 'Utilizar fuentes de alta escala, tipografías sans-serif de alto contraste y formatos de negrita sólidos para garantizar la máxima accesibilidad en recintos amplios.',
    ejercicio_practico: 'Establecer la primera lámina de presentación de su junta recreacional con letras pretenciosas de calibre 48 y alto contraste en PowerPoint.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Caja de Fuentes',
        descripcion: 'Desplegable de estilo de letras que ayuda a escoger formas sans-serif legibles.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Tamaño del Texto',
        descripcion: 'Contador numérico de escala para agrandar o achicar las letras del proyecto vecinal.'
      }
    ]
  },
  {
    id: 'powerpoint_n1_l3',
    modulo_id: 'powerpoint',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'Insertar Fotos del Centro Social y Organigramas',
    descripcion_teorica: 'Una imagen real de los vecinos pintando la fachada de la sede comunal transmite mucha más fuerza y convicción que mil cifras escritas. PowerPoint nos da la facilidad de acomodar y pegar archivos de imágenes en segundos. Podemos usar la sección superior Insertar e incorporar imágenes o formas organizativas llamadas Organigramas (SmartArt) para detallar quién es el Presidente, Tesorera y Secretaria de forma gráfica y solemne.',
    explicacion_alternativa: 'Piense en este paso como recortar una foto de la asamblea comicial vecinal impresa y pegarla ordenadamente con pegamento blanco en la mitad de su papel de cartulina para que la miren los vecinos. En PowerPoint no ensucia la mesa; le ordena al programa buscar la foto del álbum y la pega de forma impecable dándole contornos estéticos.',
    pasos_a_seguir: [
      'Abra su PowerPoint real en el computador de mesa y vaya a una diapositiva nueva y en blanco.',
      'Haga un click izquierdo en la pestaña "Insertar" arriba en la Cinta de Opciones.',
      'Oprima el botón etiquetado como "Imágenes" y presione la opción "Este dispositivo..." (o "Desde un archivo...").',
      'Inspeccione la carpeta "Imágenes" de su PC real, elija cualquier archivo fotográfico de prueba y pulse "Insertar".',
      'Haga click derecho en la foto de Word o PowerPoint, use ajustar texto o simplemente manipule los puntos blancos de las esquinas con el mouse arrastrándolos hacia el centro de la pantalla para encuadrar la escala.'
    ],
    pasos_alternativos: [
      'Pulse sobre Insertar en la Cinta de Opciones.',
      'Para bosquejar un croquis rápido, presione en el botón "SmartArt" (dibujos explicativos con flechas) de PowerPoint.',
      'Elija el diseño "Jerarquía" (Organigrama superior para la Directiva Vecinal) y rellene los cajoncitos con los nombres de la directiva.'
    ],
    tips_de_accesibilidad: 'Del mismo modo que en Word, la accesibilidad exige que añada "Texto alternativo" si expone las diapositivas en actas digitales de la junta, asegurando que las personas ciegas cuenten con narraciones sintéticas por pantalla.',
    checklist_validacion: [
      'Activé el panel de importación interactiva a través de la pestaña Insertar.',
      'Pegué de forma exitosa una imagen o diagrama organizativo dentro del lienzo.',
      'Manipulé los puntos de borde blanco regulando el tamaño de la foto sin deformidades.',
      'Aseguré que la composición de la foto deje el texto legible del título.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe un SmartArt de Ciclo: Diseñe un SmartArt de tipo 'Ciclo' para detallar los 3 pasos de postulación a un fondo municipal (1. Completar ficha, 2. Cotizar pintura, 3. Entregar recibo). Los vecinos lo memorizarán muy fácil.",
      "Ajustar orden de imagen: Al insertar formas, haga click derecho sobre una de ellas y pulse 'Enviar al fondo'. Verá cómo los textos grandes que quedaban escondidos saltan al frente flotantes sobre su foto."
    ],
    concepto_clave: 'Importar archivos gráficos, diagramas organizativos y regular su colocación espacial para crear diapositivas dinámicas de uso corporativo y comunal.',
    ejercicio_practico: 'Pegar un organigrama SmartArt con la directiva actual de su Centro Social y acomodarlo junto a una foto de la sede en su monitor de escritorio.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Insertar',
        descripcion: 'Sección alta que reúne herramientas de fotos, formas, diagramas y tablas.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Organigrama SmartArt',
        descripcion: 'Plantillas prediseñadas que interconectan cajoneras administrativas de directiva.'
      }
    ]
  },
  {
    id: 'powerpoint_n1_l4',
    modulo_id: 'powerpoint',
    orden: 4,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'Transiciones de Alto Contraste legibles',
    descripcion_teorica: 'Cuando transita de una lámina a la siguiente durante la presentación con proyector de la junta, el salto brusco de pantalla blanca puede molestar o desconcentrar a las personas mayores con visión delicada o foto-sensibilidad. PowerPoint incorpora las "Transiciones", que son efectos fluidos que suavizan los cambios de página (como un fundido gradual de tinta que desvanece la lámina anterior y hace nacer sutilmente la nueva). Esto dota a su presentación de una atmósfera solemne y profesional admirable.',
    explicacion_alternativa: 'Es idéntico a pasar con suavidad la página en un álbum gigante de cuentos con fotos para niños. En lugar de dar un tirón fuerte arriesgándose a rasgar el papel, hace resbalar la hoja de manera fluida y suave ante la vista de los vecinos. En PowerPoint, seleccionamos la transición "Desvanecer" para que el paso de temas sea una caricia visual.',
    pasos_a_seguir: [
      'En el monitor de su PC, desplomado el listado de miniaturas de la izquierda, haga click izquierdo sobre la lámina número 1.',
      'Desplace su puntero del mouse a la Cinta de Opciones alta y presione en la pestaña "Transiciones" (ubicada al lado de Animaciones).',
      'Observe el mostrador de efectos y haga un click izquierdo firme en la opción con la etiqueta "Desvanecer" (en inglés Fade).',
      'Haga un click en la miniatura de la lámina número 2 a la izquierda de la pantalla, y vuelva a presionar el botón "Desvanecer".',
      'Haga click en "Vista previa" en la esquina de la barra para deleitarse con la suave fusión visual aplicada a sus diapositivas.'
    ],
    pasos_alternativos: [
      'Pulse la pestaña "Transiciones" en PowerPoint real en su computadora.',
      'Active el efecto suave de transición "Empujar" para que las láminas suban verticalmente como una asamblea dinámica.',
      'Haga click en "Aplicar a todas" a la derecha de la barra para que todas las láminas adopten el mismo efecto de desplazamiento al instante.'
    ],
    tips_de_accesibilidad: 'Evite a toda costa usar transiciones extravagantes o ruidosas como "Remolino", "Origami" o "Bucle", ya que pueden causar desorientación visual inmediata en vecinos mayores o provocar migrañas de alto impacto óptico.',
    checklist_validacion: [
      'Me posicioné sobre la lámina inicial en la columna de secuencias de la izquierda.',
      'Accedí a la barra alta dedicada al formato de "Transiciones".',
      'Escogí el efecto "Desvanecer" mitigando saltos de alto impacto lumínico.',
      'Seleccioné el disparador para reproducir o revisar la vista previa del fundido.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe ajustar la Duración: Al costado derecho del menú de Transiciones, busque un casillero que dice 'Duración' y muestra por ejemplo '01.00'. Súbalo a '02.00' pulsando las flechas. Verá que la lámina tarda dos segundos completos en desvanecerse, logrando un suspenso muy distinguido.",
      "Explore el sonido: Al lado de la duración, verá el casillero 'Sonido: [Sin sonido]'. Pruebe aplicar 'Click' para simular un obturador de cámara real, ¡pero recuerde mantenerlo silenciado para correspondencia formal!"
    ],
    concepto_clave: 'Enlazar las diapositivas de PowerPoint mediante fundidos de desvanecimiento para mitigar el cansancio óptico provocado por destellos bruscos de brillo.',
    ejercicio_practico: 'Aplicar la transición Desvanecer a todo el fardo secuencial de láminas de su proyecto en PowerPoint real.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Transiciones',
        descripcion: 'Comisión de botones destinados a amortiguar e hilvanar los saltos de láminas.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Efecto Desvanecer',
        descripcion: 'La transición más recomendada por los asesores de accesibilidad para mitigar la foto-sensibilidad.'
      }
    ]
  },
  {
    id: 'powerpoint_n1_l5',
    modulo_id: 'powerpoint',
    orden: 5,
    nivel: 'Nivel 1: Funcional',
    programa: 'PowerPoint',
    titulo: 'Proyectar y Presentar con Éxito en la Junta',
    descripcion_teorica: 'El momento culminante de nuestro esfuerzo administrativo en secretariado es la proyección real del proyecto de asfalto de calles ante la Junta de Vecinos. En vez de mostrar la presentación con las miniaturas de PowerPoint y todos los botones apretados alrededor, lo que luce informal, debemos prender la "Presentación a Pantalla Completa". Esta función borra todas las barras de control y despliega únicamente nuestro cartel en la superficie del proyector o televisor vecinal gigante.',
    explicacion_alternativa: 'Es igual que apagar las ampolletas del salón comunitario y prender el telón blanco. Al presionar el botón de Presentación, la computadora se disfraza de cine real: oculta todas las herramientas de trabajo y deja brillar su cartel vecinal gigante enfrente sin ninguna barrita de por medio.',
    pasos_a_seguir: [
      'Fije su mirada en la Cinta de Opciones alta del programa PowerPoint real en su PC.',
      'Haga un click izquierdo en la pestaña "Presentación con diapositivas" (al lado de Grabar).',
      'Haga un click sobre el botón "Desde el principio" que luce un reproductor pequeño.',
      '¡Asómbrese! Todo el monitor físico se cubrirá con su lámina comunal eliminando las barritas laterales de edición.',
      'Use la barra espaciadora o las flechas de dirección de su teclado real para avanzar entre páginas cómodamente, u oprima la tecla "Escape" (Esc, arriba a la izquierda del teclado) para apagar la proyección.'
    ],
    pasos_alternativos: [
      'Presione la tecla veloz tradicional en su teclado real: hunda el botón "F5" ubicado en la hilera superior física.',
      'Compruebe la proyección a pantalla completa del balance vecinal.',
      'Haga un simple click con el botón izquierdo de su mouse real sobre la pantalla para avanzar las láminas paso a paso.'
    ],
    tips_de_accesibilidad: 'Si expone en una asamblea ante vecinos con dificultades auditivas, puede activar los "Subtítulos en tiempo real" integrados en PowerPoint para que el programa escuche su voz por micrófono real y dibuje las palabras de forma automática en el contorno del telón.',
    checklist_validacion: [
      'Completé un conjunto mínimo de dos diapositivas accesibles con textos legibles.',
      'Localicé la pestaña de Presentación con Diapositivas en la Cinta de Opciones.',
      'Inicié la pantalla completa desde la lámina 1 con total solvencia.',
      'Utilicé con soltura las teclas de dirección o espacio para transitar las láminas físicas.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe usar el puntero láser virtual: Durante la pantalla completa, haga click derecho sobre la diapositiva, seleccione 'Opciones de puntero' y elija 'Puntero láser'. Su mouse se convertirá en un deslumbrante punto rojo de alto contraste para guiar la mirada de sus vecinos.",
      "Explore el rotulador virtual: En el mismo menú click derecho, escoja 'Pluma'. Podrá rayar e integrar anotaciones escritas a mano directamente encima del balance en el proyector real, ¡las que puede borrar al finalizar la presentación!"
    ],
    concepto_clave: 'Ejecutar la proyección a pantalla completa de la secuencia para conferir formalidad administrativa e interactuar con el público mediante teclados de dirección.',
    ejercicio_practico: 'Proyectar a pantalla completa su balance semestral en la computadora usando la tecla F5 y avanzar la secuencia fluidamente.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Icono Pantalla',
        descripcion: 'Pequeño atril de proyección abajo a la derecha de la barra de estado que lanza la pantalla completa.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Pila Láser Comunitaria',
        descripcion: 'Simulador láser del mouse para remarcar los presupuestos desde lejos.'
      }
    ]
  },

  // ==========================================
  // OUTLOOK - NIVEL 1: FUNCIONAL
  // ==========================================
  {
    id: 'outlook_n1_l1',
    modulo_id: 'outlook',
    orden: 1,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Entrar y Navegar por el Correo del Centro Social',
    descripcion_teorica: 'El correo electrónico (Email) es el cartero digital moderno que conecta a nuestra Junta de Vecinos con el resto del mundo. Microsoft Outlook es la oficina postal que organiza su correspondencia virtual. La pantalla o Entorno de Outlook se compone de tres franjas clave: a la izquierda, las "Carpetas" (recibidos, enviados); al medio, el listado de correos llegados clasificados por fecha; y a la derecha, el enorme "Panel de Lectura" donde podemos revisar de forma cómoda lo que reza cada carta sin tener que abrir ningún archivo adjunto.',
    explicacion_alternativa: 'Imagínese un estante de madera con casilleros en la entrada de la sede comunal. A la izquierda está la bandeja donde el cartero deja las cartas nuevas ("Bandeja de Entrada"). Al medio, la correspondencia del día con nombres grandes de remitentes, y a la derecha, la carta ya abierta estirada sobre el escritorio para que la lea con su lupa cómoda.',
    pasos_a_seguir: [
      'Ubíquese ante su computadora real de oficina de la junta con su navegador de internet encendido.',
      'Escriba en la barra de direcciones o pulse el portal de Outlook real e inicie sesión con la clave secreta de la directiva comicial.',
      'Haga un click izquierdo sobre la carpeta con la etiqueta "Bandeja de Entrada" (Inbox) al lado izquierdo de la ventana.',
      'Siga deslizando sus ojos sobre el listado del medio y seleccione con un click el primer correo recibido que encuentre.',
      'Mire el costado derecho del monitor de su PC: allí se desplegará el texto completo de la correspondencia lista para su cómoda lectura.'
    ],
    pasos_alternativos: [
      'Abra su servicio Outlook real de prueba directamente en el computador o celular.',
      'Haga click sobre el ícono de sobre cerrado que representa sus mensajes pendientes.',
      'Examine qué vecinos le enviaron escritos y visualice las letras cómodamente ampliadas en el panel derecho sin tocar nada extraño.'
    ],
    tips_de_accesibilidad: 'Si tiene problemas para leer los correos en pantallas chicas, busque arriba en las herramientas de lectura de Outlook el botón "Lector Inmersivo". Al pulsarlo, el programa extraerá el texto, lo colocará en letra gigante de altísimo contraste negro sobre blanco, y ¡leerá la correspondencia vecinal en voz alta por los parlantes real de su PC!',
    checklist_validacion: [
      'Inicié sesión de manera segura en la casilla oficial de Outlook.',
      'Identifiqué la Bandeja de Entrada con los registros de correspondencia comunal.',
      'Hice click sobre un correo específico en el panel central de forma fluida.',
      'Revisé el contenido desplegado en el panel de lectura derecho sin forzar la vista.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe marcar como 'No leído': Si leyó un correo de la municipalidad pero quiere dejarlo pendiente para procesarlo mañana con calma en la sede, haga click derecho sobre él en el listado y elija 'Marcar como no leído'. Volverá a ponerse en negrita gruesa.",
      "Ajuste la densidad de la lista: Busque el ícono de engranaje arriba (Configuración) y en 'Densidad' elija 'Espaciosa'. Verá que los renglones se dilatan dándole más aire y comodidad visual para apuntar con el ratón."
    ],
    concepto_clave: 'Identificar las tres áreas cardinales de Microsoft Outlook (Carpetas, Correo y Lectura) para asimilar la navegación básica del flujo postal digital.',
    ejercicio_practico: 'Navegar en su cuenta real de Outlook vecinal, localizando la Bandeja de Entrada de su Junta de Vecinos.',
    elementos_visuales: [
      {
        icono: 'correo',
        etiqueta: 'Bandeja de Entrada',
        descripcion: 'Cofre virtual donde reposan las cartas electrónicas entrantes enviadas por vecinos.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Panel de Lectura',
        descripcion: 'El gran lienzo derecho que exhibe de corrido las letras del correo en pantalla.'
      }
    ]
  },
  {
    id: 'outlook_n1_l2',
    modulo_id: 'outlook',
    orden: 2,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Enviar un Mensaje Formal a la Ilustre Municipalidad',
    descripcion_teorica: 'El canal formal de comunicación entre un Centro Social u Organización Territorial y las dependencias públicas exige redactar correspondencias con una estructura impecable. En el correo electrónico, debemos completar tres casilleros indispensables: el destinatario ("Para", que representa la dirección electrónica precisa a la que va dirigida la carta), el tema o encabezado breve ("Asunto", que enuncia de forma compacta de qué trata el trámite para que la municipalidad lo catalogue rápido) y el "Cuerpo del Mensaje" (donde redactamos el saludo y los requerimientos vecinales).',
    explicacion_alternativa: 'Es igual que enviar un sobre postal formal. Si no escribe la dirección exacta de la municipalidad en el remite, el cartero real la desechará. Y si no redacta un título afuera del sobre, los encargados del municipio la archivarán de fondo en el cajón de trastos viejos sin revisarla.',
    pasos_a_seguir: [
      'Abra su correo Outlook real de escritorio en su computadora de la junta.',
      'Localice la esquina superior izquierda alta de la pantalla y haga un click izquierdo en el gran botón azul con un lápiz que reza "Correo nuevo".',
      'En el casillero que reza "Para:", digite con absoluta precisión la dirección de correo real que corresponda al alcalde o municipalidad (ej. "consultas@municipalidad.cl").',
      'Haga click en la casilla inferior que reza "Agregar asunto" y escriba de manera compacta: "SOLICITUD DE REPARACIÓN DE LUMINARIAS CALLE PRAT".',
      'Haga click en el gran rectángulo de abajo (Cuerpo de redacción) y escriba su saludo protocolar y solicitud vecinal de forma respetuosa.'
    ],
    pasos_alternativos: [
      'Presione en el botón de redactar correspondencia de Microsoft Outlook (el sobre con un signo más).',
      'Rellene los tres campos vitales: destinatario exacto, título de asunto en mayúsculas y su carta comunal.',
      'Localice abajo en el monitor de su PC el gran botón con un avión de papel que reza "Enviar" y dele un firme click izquierdo.'
    ],
    tips_de_accesibilidad: 'Use siempre un título en el casillero "Asunto" redactado de corrido y en mayúsculas de alto contraste. Esto ayuda a que los funcionarios con baja visión clasifiquen y respondan su solicitud de manera inmediata y preferencial.',
    checklist_validacion: [
      'Inicié la pestaña de correspondencia nueva mediante el botón respectivo.',
      'Ingresé la cuenta electrónica precisa del destinatario sin omitir ningún punto.',
      'Definí un asunto sobrio y directo identificando la gestión vecinal.',
      'Redacté el cuerpo de la carta manteniendo el saludo protocolar inicial.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe con CC (Con Copia): Debajo del casillero 'Para', busque el botón 'CC'. Púlselo y escriba el correo del concejal comicial de su confianza. Al enviarlo, a él le llegará una copa exacta de la nota oficial, protegiendo su gestión.",
      "Proporcione una firma automática: Al final de su correspondencia, vaya a la herramienta que simula una 'Pluma' o busque 'Configuración -> Firma' para grabar sus datos de contacto y cargo para que se peguen mágicamente en cada carta nueva."
    ],
    concepto_clave: 'Acomodar y despachar un correo formal rellenando con rigurosidad los casilleros de Destinatario (Para), Encabezado (Asunto) y Redacción (Cuerpo).',
    ejercicio_practico: 'Envia un correo oficial de prueba en su PC real usando Outlook a la dirección municipal simulando su primer requerimiento territorial.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Lápiz de Correo Nuevo',
        descripcion: 'Disparador superior que abre el sobre de correspondencia virtual.'
      },
      {
        icono: 'enter',
        etiqueta: 'Botón Enviar',
        descripcion: 'El avión de papel que lanza la carta a viajar por la red informática.'
      }
    ]
  },
  {
    id: 'outlook_n1_l3',
    modulo_id: 'outlook',
    orden: 3,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Adjuntar Archivos y Actas Oficiales',
    descripcion_teorica: 'A veces el correo no basta para contener toda la documentación que exige un proyecto municipal; de la misma manera que en una nota tradicional física adjuntamos la nómina de asistencia en hojas impresas anexas. Outlook nos permite "Adjuntar" correspondencias, actas en PDF o planillas de Excel en su formato virtual. Al adjuntar, el archivo del disco duro viaja pegado de forma digital como un pasajero del correo directo al computador del funcionario municipal.',
    explicacion_alternativa: 'Es idéntico a introducir dentro del sobre de la municipalidad las fotos reales de los baches de la calle o las cotizaciones firmadas por la junta de vecinos. En vez de pegarlas con cinta, le ordena a Outlook que arrastre la hoja guardada del Escritorio y la meta con cuidado al sobre.',
    pasos_a_seguir: [
      'Ingrese a su Microsoft Outlook real en su PC y pulse el botón de redactar correspondencia nueva.',
      'Una vez redactado el cuerpo y destinatario de su carta, busque en la Cinta de Opciones alta del correo el ícono que simula un "Clip metálico de oficina" (icono universal para adjuntar).',
      'Haga un click izquierdo sobre el botón que reza "Adjuntar archivo" (o "Examinar este equipo").',
      'En la pantalla que se abre de Windows, vaya al "Escritorio", marque el archivo del acta que guardamos ("Clases_Word_Comunitario") y pulse el botón "Abrir".',
      'Compruebe que abajo de su asunto aparece de inmediato un cuadro con el nombre exacto de su archivo con un tick verde o gris.'
    ],
    pasos_alternativos: [
      'Redacte su correo vecinal formal en Outlook tradicional real.',
      'Con la ventana del correo abierta, achíquela un poco de tamaño en su monitor físico, busque el acta guardada en su Escritorio, agárrela con el mouse y arrástrela manteniéndola presionada sobre el cuerpo del correo. ¡Se pegará mágicamente!'
    ],
    tips_de_accesibilidad: 'Antes de subir cualquier archivo adjunto formal con firmas vecinales, conviértalo preferencialmente a formato PDF. Al ser un formato rígido, los lectores de pantalla del municipio leerán las actas mucho más ordenadamente y sin riesgos de descuadrar la escala.',
    checklist_validacion: [
      'Ubicase en el editor de correos activos de mi computadora.',
      'Hice click en el botón "Adjuntas" del clip metálico tradicional.',
      'Examiné la ruta destino de mis documentos cargando el acta específica.',
      'Validé que el casillero anexo muestra el peso físico y el nombre del archivo con éxito.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe adjuntar más de un archivo: Pulse el clip metálico nuevamente y cargue la foto de los baches de las pistas vecinales. El correo admite enviar varias actas juntas si no sobrepasan el peso global estándar de oficina.",
      "Retire un adjunto fallido: Si subió el presupuesto vecinal equivocado, coloque el mouse sobre el cuadro adjunto, presione la pequeña flecha 'v' y elija 'Quitar archivo'. Se salvará de cometer un bochorno."
    ],
    concepto_clave: 'Enlazar y cargar archivos de datos del disco duro dentro del correo Outlook virtual utilizando el ícono universal del Clip para su despacho conjunto.',
    ejercicio_practico: 'Adjuntar una cotización o el acta de su junta vecinal en un borrador de correo en su PC de escritorio.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Clip de oficina',
        descripcion: 'El ícono universal que permite acoplar actas electrónicas a sus cartas postales.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Banda de Adjuntos',
        descripcion: 'Sección donde figura el estado de carga y nombre de sus planillas adjuntadas.'
      }
    ]
  },
  {
    id: 'outlook_n1_l4',
    modulo_id: 'outlook',
    orden: 4,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Organizar Mensajes en Carpetas Temáticas',
    descripcion_teorica: 'Si dejamos todos los correos acumulados amontonados en la Bandeja de Entrada, en pocas semanas nos costará una enormidad encontrar las respuestas previas de la municipalidad o las rendiciones viejas de los socios vecinales. Outlook nos permite fabricar "Carpetas Virtuales". Estas funcionan exactamente como los archivadores plásticos de palanca que tenemos en los estantes de la sede social: podemos crear una carpeta llamada "Municipalidad" de alto contraste y arrastrar allí las cartas clasificándolas formalmente.',
    explicacion_alternativa: 'Es igual que rotular portafolios físicos en su archivador para que no se caigan las hojas por la mesa. En vez de amontonar los balances del bingo con las cartas de las juntas de vecinos sobre el piano, crea una gaveta digital llamada "Trámites Bingo" y las guarda de modo que la mesa quede reluciente.',
    pasos_a_seguir: [
      'Vaya a su casilla de correo de Microsoft Outlook real de la junta vecinal.',
      'Mire el borde izquierdo vertical de la pantalla donde están las carpetas estándar ("Bandeja de Entrada", "Enviados").',
      'Haga un click derecho firme sobre la carpeta "Bandeja de Entrada" u oprima el botón "Crear carpeta nueva" al final del listado.',
      'Escriba con mayúsculas en el recuadro que se habilita: "COMUNICACIONES MUNICIPALES" y pulse Enter.',
      'Sostenga con el ratón de su PC cualquier correo que le enviaron del municipio y arrástrelo con suavidad hacia su nueva carpeta hasta verla sombreada. ¡Mire cómo la mesa de entrada se despeja de inmediato!'
    ],
    pasos_alternativos: [
      'Abra su servicio Outlook en su máquina física real.',
      'Haga click derecho sobre cualquier mensaje comunal de la grilla del medio, elija la opción "Mover a" del desplegable, pulse sobre su carpeta vecinal y confirme el traslado.'
    ],
    tips_de_accesibilidad: 'La navegación estructurada por carpetas en Microsoft Outlook es extremadamente compatible con los atajos de teclado para lectores de pantalla, facilitando que vecinos con ceguera total salten de una carpeta a otra en segundos.',
    checklist_validacion: [
      'Ejecuté la orden de adición de un nuevo contenedor a través de los menús izquierdos.',
      'Escribí un nombre lógico para clasificar la administración territorial vecinal.',
      'Seleccioné correspondencias físicas de la bandeja de entrada comicial.',
      'Trasladé con éxito los mensajes por arrastre o menús visuales despejando la entrada.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe crear subcarpetas: Haga click derecho sobre su nueva carpeta recién diseñada y pulse de nuevo 'Crear carpeta'. Escriba 'Año 2026'. Logrará un nivel de archivo de altísima alcurnia administrativa municipal.",
      "Configure un correo como favorito: Presione la estrella que sale al lado del remitente. Al hacerlo, el mensaje saltará a un casillero prominente arriba del todo, visible para ojos cansados en un instante."
    ],
    concepto_clave: 'Estructurar y clasificar la correspondencia electrónica creando carpetas temáticas para evitar la dispersión de datos y el desborde postal.',
    ejercicio_practico: 'Crear una carpeta de clasificación comicial en su Outlook real de oficina y mudar correspondencias para entrenar el archivo ordenado.',
    elementos_visuales: [
      {
        icono: 'carpeta',
        etiqueta: 'Carpeta Virtual Recién Creada',
        descripcion: 'Cajoncito exclusivo de archivo rotulado con su denominación personalizada vecinal.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Estrella Favorito',
        descripcion: 'Punto luminoso de alto contraste que ancla documentos claves del Centro Social arriba del todo.'
      }
    ]
  },
  {
    id: 'outlook_n1_l5',
    modulo_id: 'outlook',
    orden: 5,
    nivel: 'Nivel 1: Funcional',
    programa: 'Outlook',
    titulo: 'Agendar Reuniones en el Calendario de la Sede',
    descripcion_teorica: 'Un secretario de una Junta de Vecinos moderna no puede fiarse meramente de recordar las fechas en asambleas cruciales; de la misma forma que no anotamos el horario del médico en servilletas expuestas a perderse. Outlook incorpora un "Calendario Virtual de Alta Precisión" integrado directamente en el correo. Aquí podemos agendar el día del próximo bingo o la visita formal de la alcaldesa con alarmas automáticas escritas que nos avisarán al celular o PC.',
    explicacion_alternativa: 'Es idéntico a colgar los calendarios tradicionales de la repisa de fondo de la cocina con cuadritos de asados de la junta, donde marcamos con una gran cruz roja de marcador el día de elecciones de mesa. En la computadora la cruz se dibuja sola, emite sonidos alegres de recordatorio por el parlante y les envía invitaciones directas por redes a sus directivos.',
    pasos_a_seguir: [
      'Dirija su visual al extremo o barra izquierda de su Microsoft Outlook real.',
      'Busque el pequeño ícono que representa un "Calendario" de oficina (el cuadrito mensual) y hágalo click izquierdo.',
      'La pantalla mutará por completo para enseñarle el mes completo de la directiva comunal. Haga doble click sobre el recuadro del número correspondiente al viernes de la próxima semana.',
      'En la ficha emergente que se abre, tipee el título jerárquico gigante: "ASAMBLEA ORDINARIA MESA DIRECTIVA".',
      'Defina el bloque cronológico: delinee la hora exacta (ej. de "19:00" a "20:30" sutilmente en los selectores).',
      'Haga un click en el botón azul de confirmación "Guardar" o "Enviar". ¡El evento comicial se encuentra agendado en la memoria segura!'
    ],
    pasos_alternativos: [
      'Ingrese al área del calendario de Microsoft Outlook real de su PC.',
      'Pulse en la esquina alta el casillero azul con letras prominentes "Nuevo evento".',
      'Digite el motivo de la asamblea y la hora requerida, invitando con su correo electrónico a los vecinos para resguardar la asistencia.'
    ],
    tips_de_accesibilidad: 'Manejar el Calendario con contrastes altos y tipografía expandida le permite ver sus eventos del Centro Social de un vistazo gigante. El programa se encarga de enviarle un timbre sonoro o aviso en pantalla 15 minutos antes de la reunión, sirviéndole de apoyo inmediato para directivos con olvidos frecuentes.',
    checklist_validacion: [
      'Accedí a la zona de Calendario integrado en Microsoft Outlook.',
      'Hice doble click sobre un casillero diario que corresponda a las gestiones.',
      'Escribí el rótulo temático de asamblea del centro social en mayúsculas.',
      'Seleccioné el horario de inicio y fin, sellando el guardado de manera impecable.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe invitar a un directivo directo por correo: En la misma ficha de creación de evento, ubique el casillero 'Invitar a personas' y tipee la dirección real de correo de la tesorera. Al oprimir guardar, Outlook le enviará a ella un aviso invitándola a sumarse automáticamente.",
      "Cambie el color de la asamblea (Categoría): Pulse con el botón derecho encima del casillero agendado y en 'Categorizar' píntelo de rojo vibrante. ¡Se desmarcará increíble de los demás días ordinarios!"
    ],
    concepto_clave: 'Asentar y programar compromisos vecinales en la agenda integrada de Outlook, designando bloques de horas y configurando avisos sonoros de accesibilidad.',
    ejercicio_practico: 'Programar la asamblea ordinaria de su Centro Social para el próximo viernes e integrar a la tesorera mediante invitaciones automáticas de Outlook.',
    elementos_visuales: [
      {
        icono: 'calendario',
        etiqueta: 'Cuadro Calendario',
        descripcion: 'La puerta de entrada a la secuencia mensual comicial vecinal.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Pila de Eventos',
        descripcion: 'Rótulo pintado coloridamente que ocupa el bloque horario asignado protegiendo su tiempo.'
      }
    ]
  },

  // ==========================================
  // WORD - NIVEL 2: ADMINISTRATIVO
  // ==========================================
  {
    id: 'word_n2_l1',
    modulo_id: 'word',
    orden: 11,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Word',
    titulo: 'Estructura Profesional: Crear Índices Automáticos',
    descripcion_teorica: 'Cuando redactamos un reglamento vecinal extenso o un informe de rendición de cuentas de muchas hojas, crear un índice de forma manual poniendo puntos y digitando los números a pulso es sumamente ineficiente y se descuadra al añadir texto. Word nos permite automatizar esto clasificando los títulos del documento con "Estilos de Título" (Título 1, Título 2, etc.). Al hacerlo, la computadora entiende la jerarquía de cada capítulo y puede confeccionar un "Índice Automático" impecable en un solo clic que se actualiza solo si los números de página cambian.',
    explicacion_alternativa: 'Imagine que etiqueta cada habitación de la sede social con un letrero claro de madera ("Cocina", "Salón Principal"). Luego, en la entrada, cuelga una pizarra que enumera automáticamente todas las salas y su ubicación en el pasillo. Si traslada el comedor al fondo, la pizarra se redibuja sola sin que usted deba pintar cada letra de nuevo. En Word, esto se logra usando Estilos y presionando el botón "Tabla de contenido".',
    pasos_a_seguir: [
      'Abra su Word real en su PC y escriba en el primer renglón: "Reglamento de la Sede 2026".',
      'Sombréelo de corrido, vaya a la pestaña "Inicio" arriba, y en la vitrina de "Estilos", haga un click izquierdo firme en "Título 1" (el texto se volverá azul y grande).',
      'Avanza unas líneas abajo pulsando Enter, escribe "Capítulo 1: Cuotas Sociales", sombréelo y aplíquele también el estilo "Título 1".',
      'Sitúe el cursor al principio de todo su documento (antes de la primera palabra) y vaya a la pestaña "Referencias" en la barra superior.',
      'Haga click en el primer botón de la izquierda llamado "Tabla de contenido" y seleccione el primer diseño clásico que se le ofrezca. ¡Contemple de inmediato su índice estructurado con números de página perfectos!'
    ],
    pasos_alternativos: [
      'Use su teléfono para consulta y trabaje en Word.',
      'Aplique el formato permanente "Título 1" a todos los encabezados importantes de su reglamento.',
      'Vaya a Referencias, pulse sobre Tabla de contenido y haga click en "Tabla automática 1" para ver aparecer el índice formal.'
    ],
    tips_de_accesibilidad: 'Utilizar estilos estructurados de Word no es solo por orden estético: es un requisito de accesibilidad indispensable para que los lectores de voz de personas con discapacidad visual puedan saltar rápidamente capítulos del acta sin leer todo de corrido.',
    checklist_validacion: [
      'Redacté capítulos claros en hojas diferentes de mi documento.',
      'Asigné el estilo "Título 1" a cada uno de los encabezados de capítulo.',
      'Me posicioné en la hoja inicial para ubicar el índice general.',
      'Fui a Referencias e inserté la Tabla de contenido verificando la generación automática.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe a actualizar el índice: Agregue un párrafo largo antes del Capítulo 1 para que este se desplace a la página siguiente. Haga un click derecho en medio de su índice, elija 'Actualizar campos' -> 'Actualizar toda la tabla' y mire cómo el número de página cambia mágicamente al nuevo valor correcto.",
      "Pruebe con Título 2: Úselo para subcapítulos (como '1.1 Cuota de Socios'). Al actualizar su índice, verá que los subcapítulos aparecen ligeramente metidos hacia adentro (sangrados) dándole un porte institucional asombroso."
    ],
    concepto_clave: 'Usar la galería de Estilos para rotular la jerarquía del escrito y habilitar el procesador de Referencias para generar índices dinámicos.',
    ejercicio_practico: 'Elaborar un bosquejo de reglamento con dos Capítulos usando Estilos, y montar el índice dinámico al inicio del papel virtual.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Vitrina de Estilos',
        descripcion: 'Panel superior en Inicio que contiene las etiquetas de Título 1 y 2.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Tabla de Contenido',
        descripcion: 'Comando en la sección Referencias que compila las cabeceras en un índice estructural.'
      }
    ]
  },

  // ==========================================
  // WORD - NIVEL 3: RESOLUCIÓN DE PROBLEMAS
  // ==========================================
  {
    id: 'word_n3_l1',
    modulo_id: 'word',
    orden: 12,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Word',
    titulo: 'Auxilio: Recuperar un Archivo no Guardado',
    descripcion_teorica: 'El pánico más grande de todo secretario vecinal ocurre cuando, tras escribir tres horas de un acta de asamblea, se corta la luz de improviso, se descarga la batería de la computadora o cerramos Word por error pulsando la fatídica opción "No guardar". No todo está perdido. Word cuenta con un baúl secreto de seguridad llamado "Autorrecuperación" que graba copias sigilosas en el disco cada diez minutos de forma transparente. Aprendiendo a buscar en este armario virtual de resguardo, podemos rescatar y salvar nuestro esfuerzo en un instante.',
    explicacion_alternativa: 'Es igual que si una ráfaga de viento fuerte entrara por la ventana de la sede y desparramara sus papeles volando al patio oscuro. En vez de dar por perdidas las actas y ponerse a llorar, enciende una linterna potente y va al patio a recoger impecablemente las hojas que quedaron atrapadas en las esquinas de protección. En Word virtual, la linterna es la opción "Recuperar documentos sin guardar".',
    pasos_a_seguir: [
      'Abra un documento en blanco en su programa Microsoft Word real en su computadora.',
      'Haga un click izquierdo en el menú de la pestaña azul "Archivo" arriba en la esquina superior.',
      'Busque y pulse sobre la opción "Información" en la lista de opciones que se despliega de lado.',
      'Localice el botón grande que reza "Administrar documento" (suele tener un ícono con una hoja y un engranaje).',
      'Haga un click izquierdo en él y seleccione "Recuperar documentos sin guardar". Se abrirá un baúl secreto con archivos antiguos; busque el que tenga la fecha de hoy, selecciónelo y pulse "Abrir". ¡Mire cómo su acta perdida vuelve a la vida!'
    ],
    pasos_alternativos: [
      'Si al encender Word tras un apagón físico ve un panel izquierdo llamado "Recuperación de documentos", no lo cierre.',
      'Examine la lista de archivos con hora y fecha de resguardo automático en ese panel.',
      'Haga click sobre el archivo recuperado para cargarlo en pantalla y presione Control + G de inmediato para guardarlo a salvo en el Escritorio.'
    ],
    tips_de_accesibilidad: 'Para vecinos mayores o personas propensas a la fatiga, se recomienda ajustar el tiempo de autorrecuperación automática de Word a 5 minutos en lugar de 10. Se configura en "Archivo -> Opciones -> Guardar" reduciendo los números en el casillero de Auto-recuperación.',
    checklist_validacion: [
      'Inicié Word de forma regular tras el imprevisto o descuido.',
      'Navegué al menú Archivo para examinar el estado de administración.',
      'Hice clic en el disparador Administrar Documento.',
      'Abrí el baúl secreto ubicando y guardando a salvo mi documento recuperado con éxito.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe revisar la carpeta Temporal: Word guarda estos archivos con extensión especial '.asd'. Al abrirlos desde ese panel municipal especial, presione el gran botón 'Guardar como' que aparece arriba en amarillo para asegurar que el archivo de la asamblea se consolide.",
      "Compruebe el autoguardado en la nube: Si cuenta con servicio OneDrive (el ícono de la nube azul abajo), active el interruptor 'Autoguardado' arriba a la izquierda. ¡Cada letra que escriba se subirá a internet segundo a segundo haciéndola virtualmente indestructible!"
    ],
    concepto_clave: 'Localizar e importar los borradores transitorios respaldados por el motor de autorrecuperación integrado de Word para mitigar pérdidas asociadas a cortes de energía.',
    ejercicio_practico: 'Simular la búsqueda de un acta comunal no guardada navegando al panel de Administración de Documentos en su Word real de su máquina.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Opciones',
        descripcion: 'Sección Archivo que reúne la configuración de recuperación y resguardo.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Baúl Autorrecuperación',
        descripcion: 'Ruta oculta de Windows donde se acopian los borradores olvidados en cada asamblea.'
      }
    ]
  },

  // ==========================================
  // EXCEL - NIVEL 2: ADMINISTRATIVO
  // ==========================================
  {
    id: 'excel_n2_l1',
    modulo_id: 'excel',
    orden: 8,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Excel',
    titulo: 'Buscar Vecinos Rápidamente: La Fórmula BUSCARV',
    descripcion_teorica: 'Cuando la lista de socios del Centro Social supera las doscientas personas, buscar el teléfono de un vecino específico deslizando la vista hilera por hilera en pantalla es desesperante y cansa los ojos. En secretariado, delegamos esta labor en Excel usando la función "BUSCARV" (Buscar en Vertical). Al programar esta celda inteligente, solo digitamos el nombre del socio en una casilla y la computadora viaja de inmediato hacia abajo por toda la columna, localiza al vecino, toma su número de teléfono al costado y nos lo entrega de forma instantánea.',
    explicacion_alternativa: 'Piense en la fórmula BUSCARV como un mensajero veloz y servicial de la junta. Usted se sienta cómodamente y le dice: "Busca a doña María Martínez en el archivador gigante, mira qué teléfono tiene escrito en su ficha y dímelo de viva voz". El mensajero tarda menos de un segundo en ir al fondo, abrir la gaveta y traerle el número exacto sin equivocarse jamás de línea.',
    pasos_a_seguir: [
      'En Excel, arme una tabla con Nombres en la columna A (celdas A2 a A4) y Teléfonos en la columna B (B2 a B4).',
      'Haga click en una casilla limpia (por ejemplo, D2) donde escribirá el nombre del vecino que desea buscar.',
      'Oprima la casilla de al lado (E2) donde quiere ver la respuesta numérica del teléfono de forma automática.',
      'Digite en la barra de fórmulas alta: `=BUSCARV(D2; A2:B4; 2; FALSO)` (si su Excel usa comas, tipee comas en vez de puntos y comas).',
      'Escriba en la celda D2 el nombre exacto de uno de sus vecinos y mire cómo en E2 ¡aparece su teléfono de forma mágica en un parpadeo!'
    ],
    pasos_alternativos: [
      'Utilice la guía en su teléfono y manipule el Excel de su PC real escribiendo sus datos.',
      'Aplique la fórmula de búsqueda vertical en el casillero de resultados para automatizar la consulta.',
      'Escriba el nombre deseado del socio vecinal en la celda de consulta y presiones Enter comprobando la eficacia.'
    ],
    tips_de_accesibilidad: 'La fórmula requiere el parámetro "FALSO" al final de todo para ordenarle a Excel que realice una búsqueda exacta e inequívoca del nombre. Esto previene desvíos numéricos peligrosos para directores con visión parcial.',
    checklist_validacion: [
      'Catalogué una planilla ordenada con nombres a la izquierda y teléfonos a la derecha.',
      'Definí una celda vacía para ingresar el valor que quiero consultar en mi PC.',
      'Redacté la fórmula BUSCARV en el casillero de salida apuntando a los rangos correspondientes.',
      'Escribí un nombre de la planilla en el casillero de entrada y validé que el teléfono se recupera automáticamente.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe con BUSCARX (XLOOKUP): Si su Excel es moderno de oficina, use `=BUSCARX(D2; A2:A4; B2:B4)`. Es una fórmula más dócil que no requiere indicarle el número de columna y busca hacia la izquierda y derecha con total soltura.",
      "Sugerencia de error #: Si digita un nombre que no está en la base, verá salir el símbolo `#N/D` o `#N/A`. No se asuste. Significa que el mensajero no halló a nadie con ese nombre exacto. ¡Revise las letras y vuelva a tipear!"
    ],
    concepto_clave: 'Implementar el algoritmo de búsqueda BUSCARV para cruzar y consultar bases de datos de socios de forma relacional y estructurada.',
    ejercicio_practico: 'Sellar un buscador en Excel real que devuelva la deuda de cuotas de un vecino con solo digitar su nombre propio.',
    elementos_visuales: [
      {
        icono: 'computadora',
        etiqueta: 'Celda de Entrada',
        descripcion: 'Casillero en blanco diseñado para que el usuario escriba la clave a buscar.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Fórmula de Búsqueda',
        descripcion: 'La barra de comandos de Excel que procesa el cruce de información en hileras.'
      }
    ]
  },

  // ==========================================
  // EXCEL - NIVEL 3: RESOLUCIÓN DE PROBLEMAS
  // ==========================================
  {
    id: 'excel_n3_l1',
    modulo_id: 'excel',
    orden: 9,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Excel',
    titulo: 'Auxilio: Reparar Errores de Fórmulas y Códigos Extraños',
    descripcion_teorica: 'Es de ocurrencia usual que, al teclear fórmulas para asambleas de balances, nos asustemos al ver aparecer códigos incomprensibles en los casilleros de Excel como `#¡VALOR!`, `#¿NOMBRE?` o una hilera de signos `# # # # #`. Estos no representan virus informáticos ni indican que la computadora se haya dañado. Son gritos de auxilio sistemáticos que Excel exhibe para informarnos que algo está mal en la celda: mezcla de letras en una suma, un nombre de fórmula mal escrito, o simplemente que la celda es muy angosta para mostrar un número gigante.',
    explicacion_alternativa: 'Se asemeja a que al despachar un sobre con actas vecinales, el cartero se lo devuelva con un timbre rojo de "Dirección Incompleta". No significa que el sobre esté maldito; solo le avisa que revise el número de calle real para corregirlo y volverlo a despachar cómodamente. En Excel, resolvemos estos códigos raros de inmediato arreglando los datos.',
    pasos_a_seguir: [
      'Al ver que una celda se llena de signos de peso o gato "###", no se desespere. Coloque el cursor arriba en la línea gris divisoria entre las letras de columna (ej. entre B y C), haga doble click izquierdo de mouse y observe cómo el casillero se ensancha exponiendo las cifras sanas de inmediato.',
      'Si en pantalla aparece un error `#¡VALOR!`, haga doble click en la celda para revisar sus sumas. Busque si entre medio de los números sumados se metió una celda con texto (como escribir "10 + Sillas" adrede en lugar del número) y bórrelo.',
      'Si lee un error `#¿NOMBRE?`, revise arriba en la barra de redacción de fórmulas si digitó mal la orden (por ejemplo, escribir `=SUME` o `=SOMA` en lugar de la palabra oficial en español `=SUMA`).',
      'Haga la corrección correspondiente tipeando las letras bien cuidadas, pulse Enter en su teclado físico y vea aparecer sus cuentas claras de golpe.'
    ],
    pasos_alternativos: [
      'Examine cualquier celda con bordes punteados rojos o un triángulo verde en su computadora física.',
      'Haga click en el pequeño rombo amarillo de advertencia que flota al lado del error.',
      'El menú desplegado le dirá qué causó la falla administrativa ("Fórmula dividida por cero" o "Formato incorrecto") para solucionarla velozmente.'
    ],
    tips_de_accesibilidad: 'Pauta de Contraste: Para resguardar las normas de accesibilidad de nuestro curso, recuerde que las cuadrículas internas del área de trabajo virtual de Excel mantendrán fondo blanco y letras oscuras simulando hojas físicas impresas. El cambio de contraste oscuro exterior afecta a las márgenes de navegación del programa.',
    checklist_validacion: [
      'Identifiqué la presencia de un código de error de Excel en mi pantalla real.',
      'Solucioné el bloqueo de visual numérica "###" ensanchando el ancho útil de la columna.',
      'Depuré el error de valor eliminando textos de las operaciones matemáticas.',
      'Subsané faltas ortográficas en el nombre de la fórmula logrando calcular la suma.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe un error por división: Escriba en una celda `=10/0` y pulse Enter ante su vista. Verá nacer el error `#¡DIV/0!`. Excel le recuerda que matemáticamente es imposible trocear algo en cero partes. ¡Cambie el cero por un dos y vea cómo muta a cinco!",
      "Haga doble click rápido: En los bordes de cabecera de las columnas de Excel real, el doble click amolda el ancho automáticamente a lo más largo que tenga escrito. Es el truco de oro de los asistentes de oficina."
    ],
    concepto_clave: 'Decodificar y rectificar la sintaxis de errores aritméticos y lógicos comunes de Excel para recobrar balances financieros saludables.',
    ejercicio_practico: 'Provocar de forma deliberada el error NAME en su Excel real renombrando una función y rectificarlo aplicando la nomenclatura SUMA.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Triángulo Verde Flotante',
        descripcion: 'Esquina superior de la celda de Excel que indica un dilema lógico.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Rombo de Advertencia',
        descripcion: 'Botón desplegable con la pauta de solución recomendada por la inteligencia oficial.'
      }
    ]
  },

  // ==========================================
  // POWERPOINT - NIVEL 2: ADMINISTRATIVO
  // ==========================================
  {
    id: 'powerpoint_n2_l1',
    modulo_id: 'powerpoint',
    orden: 6,
    nivel: 'Nivel 2: Administrativo',
    programa: 'PowerPoint',
    titulo: 'Diseño Unificado: Dominar el Patrón de Diapositivas',
    descripcion_teorica: 'Cuando creamos una presentación de muchas láminas sobre el proyecto vecinal, pegar el logotipo del Centro Social y escribir el nombre de nuestra organización de forma reiterada resulta monótono y queda descuadrado al pasar de página dando una apariencia informal. PowerPoint dispone de una herramienta secreta: el "Patrón de Diapositivas" (Master Slide). Es una lámina arquitectónica oculta: todo el texto, logo o fondo que peguemos dentro de ella se grabará en el molde original del documento, apareciendo de forma mágica y simétrica en todas las diapositivas nuevas de inmediato.',
    explicacion_alternativa: 'Es igual a encargar un timbre de goma redondo personalizado con los datos oficiales de la directiva comunal. En vez de tomar cada cartón de la presentación de la junta y dibujar el timbre a lápiz uno a uno con riesgo de que queden torcidos, estampa el timbre de molde sobre la plantilla principal. En la computadora la estampación es eterna y completamente alineada.',
    pasos_a_seguir: [
      'En PowerPoint real en su monitor, vaya a la barra superior y pulse la pestaña "Vista" (al lado de Ayuda).',
      'Localice el grupo "Vistas patrón" y haga un click izquierdo en el botón "Patrón de diapositivas". La pantalla mutará enseñándole el esqueleto de las láminas.',
      'Vaya a la columna izquierda, suba hasta arriba del todo de la tira y haga click en la diapositiva número 1 de molde gigante (la madre de todas).',
      'Vaya a Insertar superior -> Formas, dibuje un pequeño círculo amarillo fuerte en una esquina de esa lámina y escriba "Junta de Vecinos".',
      'Haga click en el gran botón de fondo oscuro con una cruz que reza "Cerrar Vista Patrón" en la barra superior. ¡Asómbrese! Todas sus diapositivas presentarán ahora el logotipo vecinal en la esquina exacta.'
    ],
    pasos_alternativos: [
      'Pulse sobre Vista y arranque el configurador del Patrón en PowerPoint de escritorio.',
      'Pegue en la diapositiva madre el escudo digital oficial de su comunidad vecinal en la cabecera alta.',
      'Cierre el editor de molde y compruebe que toda lámina nueva adopta el marco heráldico de forma idéntica.'
    ],
    tips_de_accesibilidad: 'Use el Patrón para obligar a que las letras de título sean siempre de calibre 40 sin depender de que cada expositor configure las letras por separado en su PC.',
    checklist_validacion: [
      'Navegué a la pestaña Vista cargando la fisonomía estructural de la Cinta.',
      'Accedí al Patrón de Diapositivas seleccionando la lámina principal de la tira.',
      'Incrusté un elemento o texto identificativo de la sede en la página molde.',
      'Regresé al lienzo normal validando que la plantilla fue distribuida a todas las hojas físicas virtuales.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe un fondo de contraste: En el modo Patrón, haga click derecho sobre el lienzo, elija 'Formato de fondo...' y aplique un color Gris Suave o Azul Pálido. Al cerrar el patrón verá cómo todas las diapositivas adoptan el color cómodo para lectores cansados.",
      "Proteja la firma: Al quedar los logos grabados en el Patrón de fondo, ningún directivo entrometido podrá moverlos o borrarlos sin querer por error mientras escribe las actas principales."
    ],
    concepto_clave: 'Intervenir la maqueta maestra o Patrón de Diapositivas de PowerPoint para unificar tipografías, fondos de contraste y heráldica de forma inalterable.',
    ejercicio_practico: 'Entrar al Patrón de Diapositivas en PowerPoint e implantar un membrete superior uniforme de su Sede Social.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Vista',
        descripcion: 'Ubicación superior de las alternativas de visualización del software.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Botón Vista Patrón',
        descripcion: 'La palanca de acceso a los bastidores constructivos de la diapositiva.'
      }
    ]
  },

  // ==========================================
  // POWERPOINT - NIVEL 3: RESOLUCIÓN DE PROBLEMAS
  // ==========================================
  {
    id: 'powerpoint_n3_l1',
    modulo_id: 'powerpoint',
    orden: 7,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'PowerPoint',
    titulo: 'Auxilio: Adaptar Diapositivas al Proyector de la Sede',
    descripcion_teorica: 'Es una escena recurrente en asambleas vecinales: encendemos el proyector de la junta de vecinos, conectamos nuestra computadora y constatamos de inmediato que nuestras diapositivas se ven deformadas, estiradas hacia los costados o con franjas negras muertas en los bordes. Esto sucede porque el "Formato de Pantalla" de PowerPoint está diseñado para un tamaño panorámico moderno (16:9), mientras que el proyector clásico o televisor de la sede usa un tubo cuadrado (4:3). Aprender a regular este parámetro de diseño en PowerPoint nos salvará la reunión.',
    explicacion_alternativa: 'Es igual que si mandara a imprimir un plano largo comicial y, al intentar encuadrarlo en la cartulina cuadrada oficial de la sede, tuviese que doblarle los extremos perdiendo valiosas letras. En PowerPoint, le ordenamos al programa re-acomodar el tamaño virtual del papel a "Estándar" o "Panorámico" para calzar de forma perfecta con el aparato proyector físico.',
    pasos_a_seguir: [
      'Con su PowerPoint abierto en la pantalla de su PC real, dirija su mouse a las pestañas superiores.',
      'Haga un click izquierdo en la pestaña "Diseño" (al lado de la pestaña Insertar).',
      'Localice en el extremo derecho del cabezal alto el botón etiquetado como "Tamaño de diapositiva".',
      'Pulse sobre él y elija el formato "Estándar (4:3)" si el proyector de la junta es antiguo y cuadrado, o "Panorámica (16:9)" si expondrá en una pantalla plana moderna.',
      'Elija el botón "Asegurar el ajuste" en el recuadro que emerge para ordenar a PowerPoint que acomode los textos de forma balanceada sin salirse del marco.'
    ],
    pasos_alternativos: [
      'Pulse la pestaña Diseño en PowerPoint de su computadora real.',
      'Oprima el Tamaño de diapositiva y configure la opción proporcional Estándar (4:3).',
      'Verifique que las letras de balance vecinal se ajusten sin recortes en la miniatura.'
    ],
    tips_de_accesibilidad: 'Manejar el tamaño 4:3 con textos consolidados al centro previene que el proyector de la junta mutile los extremos de su balance de cuentas, protegiendo la lectura de los vecinos.',
    checklist_validacion: [
      'Ingresé al panel interactivo de Diseño en la barra alta de PowerPoint.',
      'Hice click en el botón del extremo derecho del Tamaño de diapositiva.',
      'Seleccioné el formato correcto en base a las proporciones reales del proyector.',
      'Activé el ajuste dimensional de letras consolidando el balance.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe un Tamaño Personalizado: Al final del mismo listado, pulse en 'Personalizar tamaño de diapositiva'. Podrá configurar las láminas simulando hojas de papel Carta u Oficio vertical para imprimir afiches de asambleas de vecinos.",
      "Márgenes de seguridad: Al diseñar diapositivas para proyecciones reales en la sede social, nunca coloque textos al filo de los bordes. Deje siempre un margen libre de dos dedos de ancho por seguridad."
    ],
    concepto_clave: 'Ajustar la relación de aspecto (aspect ratio) de PowerPoint para adecuar la proyección digital a soportes físicos cuadrados (4:3) o panorámicos (16:9) sin deformaciones.',
    ejercicio_practico: 'Cambiar en PowerPoint real la lámina comunal de panorámico a formato estándar de 4:3 aplicando la escala de ajuste automático.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Pestaña Diseño',
        descripcion: 'Menú alto donde se encarga la fisonomía y relieve estético de la lámina.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Selector de Tamaño',
        descripcion: 'El regulador proporcional que ensambla panorámicas o cuadros de visual.'
      }
    ]
  },

  // ==========================================
  // OUTLOOK - NIVEL 2: ADMINISTRATIVO
  // ==========================================
  {
    id: 'outlook_n2_l1',
    modulo_id: 'outlook',
    orden: 6,
    nivel: 'Nivel 2: Administrativo',
    programa: 'Outlook',
    titulo: 'Secretaría Automática: Mensaje de Fuera de la Oficina',
    descripcion_teorica: 'Durante el periodo de vacaciones o cuando la sede comunal permanece cerrada, los vecinos o la municipalidad nos envían solicitudes de urgencia por correo y quedan con la amarga incertidumbre de si la correspondencia fue leída o ignorada. Outlook nos ofrece la herramienta "Mensajes Fuera de la Oficina" (Auto-Reply). Al activarla, el servidor se convierte en nuestra secretaria automática: responde de inmediato a todo correo que nos llegue con una nota de resguardo y aviso previamente configurada.',
    explicacion_alternativa: 'Es igual que colgar un cartel solemne de madera en la reja delantera de la sede vecinal que diga: "Por receso dirigirse a calle Pratt o llamar al teléfono del presidente". En la computadora, Outlook se encarga de colgar el cartel digital y leérselo a cada cartero que pase por la bandeja de forma automática.',
    pasos_a_seguir: [
      'Inicie sesión en su portal de Microsoft Outlook de la junta en su monitor físico.',
      'Busque en la esquina superior derecha de la pantalla de Outlook el ícono del "Engranaje" de Configuración y púlselo.',
      'En el panel de búsqueda de ajustes, tipee "Respuestas automáticas" (o vaya a Correo -> Respuestas automáticas).',
      'Active el interruptor que reza "Activar respuestas automáticas" (el botón se teñirá de azul).',
      'Escriba en el gran casillero de redacción: "ESTIMADO REMITENTE: LA SEDE SOCIAL ESTARÁ EN RECESO HASTA EL 10-MARZO. ANTE EMERGENCIAS LLAMAR AL PRESIDENTE".',
      'Haga click en "Guardar". ¡Su contestadora virtual se encuentra activa!'
    ],
    pasos_alternativos: [
      'Vaya a los Ajustes de engranaje en Outlook real de prueba en su PC.',
      'Escriba la pauta de receso en el cajón de respuestas automáticas fijando las fechas.',
      'Presione Guardar y compruebe que al llegar una consulta, la secretaria robótica responderá tranquilizando al socio.'
    ],
    tips_de_accesibilidad: 'Redactar una respuesta automática clara y con un tamaño de letra cómodo beneficia a los coordinadores, evitando que tengan que revisar la casilla de la junta vecinal durante su descanso.',
    checklist_validacion: [
      'Accedí al engranaje y busqué Respuestas Automáticas en Outlook.',
      'Activé el interruptor dándole el mando a la contestadora robótica de la junta.',
      'Definí un texto protocolar detallando contactos de reemplazo y fechas de regreso.',
      'Presioné Guardar para consolidar el servicio automático en el servidor.'
    ],
    sugerencias_descubrimiento: [
      "Fijar Periodo con Calendario: En la misma sección, marque el casillero 'Enviar respuestas solo durante este período'. Podrá ajustar día y hora para que la secretaria comicial se apague solita al abrir de nuevo la sede.",
      "Responder solo a vecinos: Oprima 'Enviar respuestas únicamente a personas de los contactos'. Su contestadora ignorará correos extraños y responderá exclusivamente a sus vecinos registrados."
    ],
    concepto_clave: 'Configurar el disparador de respuestas automáticas de Outlook para notificar recesos administrativos y garantizar la correcta comunicación.',
    ejercicio_practico: 'Sellar un cartel de auto-respuesta automático por receso administrativo en su Outlook real de la sede social.',
    elementos_visuales: [
      {
        icono: 'cinta',
        etiqueta: 'Engranaje de Ajustes',
        descripcion: 'Garante superior de la configuración de la correspondencia.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Casillero Contestadora',
        descripcion: 'Panel donde se encarga la pauta literal de su receso oficial vecinal.'
      }
    ]
  },

  // ==========================================
  // OUTLOOK - NIVEL 3: RESOLUCIÓN DE PROBLEMAS
  // ==========================================
  {
    id: 'outlook_n3_l1',
    modulo_id: 'outlook',
    orden: 7,
    nivel: 'Nivel 3: Resolución de Problemas',
    programa: 'Outlook',
    titulo: 'Auxilio: Correo Atorado en la Bandeja de Salida',
    descripcion_teorica: 'Un dolor de cabeza recurrente al despachar notas vecinales es cuando, al adjuntar un video pesado del aniversario o muchas fotos de las pistas rotas, el correo se queda cargando eternamente y se "atora" en un casillero llamado "Bandeja de Salida". Al quedar atorado allí, bloquea la tubería digital entera impidiendo que nuestros siguientes correos salgan de la casilla. Para superarlo, debemos abrir la bandeja de salida, y eliminar el correo obstructor para recobrar la normalidad.',
    explicacion_alternativa: 'Se asemeja a que un vecino intente meter una caja de cartón gigante llena de ladrillos dentro del buzón de lata redondo de la sede. La caja se queda atascada impidiendo que las cartas de los demás vecinos resbalen. La solución es retirar la caja obstrusa con maña y liberar el buzón vecinal para que el flujo de correspondencia continúe.',
    pasos_a_seguir: [
      'Ubíquese al lado izquierdo de la ventana de Outlook real de su PC.',
      'Busque entre las carpetas de su correspondencia la carpeta titulada "Bandeja de Salida" (Outbox) (suele aparecer únicamente cuando hay problemas de atascos).',
      'Haga un click izquierdo sobre ella. Al medio de la pantalla aparecerá expuesto el correo gigante que está atascado.',
      'Haga un click derecho sobre el correo obstructor y seleccione en el menú "Eliminar" (o bórrelo presionando la tecla Suprimir en su teclado real).',
      'Vea cómo la Bandeja de Salida se desocupa. Pruebe enviar una carta pequeña sin archivo adjunto para verificar que la cañería quedó libre.'
    ],
    pasos_alternativos: [
      'Entre en la carpeta Bandeja de Salida en Outlook de su oficina real.',
      'Para recuperar el escrito sin perderlo, haga doble click sobre el correo atorado, lo que detendrá el envío y abrirá el editor.',
      'Borre los videos pesados del clip adjunto tocando la flechita "Quitar" y vuelva a despachar la correspondencia de forma fluida.'
    ],
    tips_de_accesibilidad: 'Antes de enviar correos, procure que el conjunto de fotos no sume más de "15 Megabytes". Esto asegura un tránsito ágil ante conexiones de internet precarias.',
    checklist_validacion: [
      'Identifiqué la Bandeja de Salida de Outlook ante un bloqueo de despacho.',
      'Abrí el contenedor de atasco reconociendo el escrito pesado comicial.',
      'Depuré la obstrucción eliminando el mensaje atorado.',
      'Despaché una correspondencia en blanco para testear que la tubería de Outlook funciona correctamente.'
    ],
    sugerencias_descubrimiento: [
      "Pruebe comprimir carpetas: Si tiene muchas fotos, no las suba sueltas. Use un programa como ZIP o cargue las fotos a OneDrive enviando solo un enlace por correo.",
      "Mire el panel de envío: Abajo en Outlook real, hay una leyenda que reza 'Conectado al servidor' o 'Enviando mensaje'. Vigílelo para asegurarse de que su despacho viaja sano y salvo."
    ],
    concepto_clave: 'Identificar e intervenir la Bandeja de Salida de Outlook ante bloqueos de despacho para recobrar la correspondencia de la junta.',
    ejercicio_practico: 'Explorar la carpeta Bandeja de Salida en su Outlook real reconociendo los pasos para destrabar correspondencias en su computadora.',
    elementos_visuales: [
      {
        icono: 'correo',
        etiqueta: 'Bandeja de Salida',
        descripcion: 'El casillero provisorio donde se atoran los despachos pesados.'
      },
      {
        icono: 'zoom',
        etiqueta: 'Clip de Atasco',
        descripcion: 'El archivo adjunto excesivo que obstruye el libre tránsito cibernético.'
      }
    ]
  }
];


