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
  }
];
