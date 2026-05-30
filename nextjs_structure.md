# Estructura del Proyecto Next.js (App Router)

A continuación, se detalla la estructura de archivos recomendada para implementar esta aplicación en **Next.js (App Router)** utilizando **Tailwind CSS**, **Supabase** y las pautas de accesibilidad **WCAG AAA** especificadas.

## Árbol de Directorios Sugerido

```text
ofimatica-accesible/
├── app/
│   ├── layout.tsx                 # Layout raíz: Configura fuentes accesibles, meta-tags de zoom
│   ├── page.tsx                   # Página de bienvenida / Selección de perfil (Acceso Directo)
│   ├── dashboard/
│   │   ├── page.tsx               # Panel principal: Selección de módulos ('Step-by-Step')
│   │   └── layout.tsx             # Layout del dashboard con controles globales de tamaño de texto
│   ├── modulo/
│   │   └── [moduloId]/
│   │       ├── page.tsx           # Vista de lecciones del módulo en orden jerárquico claro
│   │       └── leccion/
│   │           └── [leccionId]/
│   │               └── page.tsx   # Visualizador de lección (Contiene <LessonViewer />)
│   ├── api/
│   │   └── progreso/
│   │       └── route.ts           # Endpoint para registrar progreso (o Server Action alternativo)
│   └── globals.css                # Estilos globales de Tailwind + directivas de enfoque y contraste
├── components/
│   ├── LessonViewer.tsx           # Componente principal con alternancia de contenido del ejercicio
│   ├── AccessibilityControls.tsx  # Botones grandes de ajuste de tipografía (A++, Contraste, Audio)
│   └── ui/
│       ├── ButtonAccessible.tsx   # Botón con target táctil >= 48px y soporte ARIA
│       └── CardAccessible.tsx     # Tarjeta accesible con alto contraste nativo
├── lib/
│   ├── supabaseClient.ts          # Inicializador del cliente de Supabase (browser)
│   └── database.types.ts          # Tipos autogenerados de TypeScript desde la base de datos Supabase
├── types/
│   └── index.ts                   # Interfaces personalizadas de TypeScript
├── public/
│   └── sounds/                    # Efectos de audio de confirmación de respuesta (feedback sonoro)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Directrices Clave para la Integración con Next.js y Supabase

### 1. Cliente de Supabase (`/lib/supabaseClient.ts`)
Para usar Supabase en componentes del cliente (como `LessonViewer` con estados interactivos):

```typescript
import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
```

### 2. Guardar Progreso con Server Actions o Supabase API
En el cliente de Next.js, para activar la base de datos SQL que configuramos con nuestra función PostgreSQL, puedes invocarla de forma súper optima mediante RPC:

```typescript
// Acción para marcar completado
const { error } = await supabase.rpc('marcar_leccion_completada', {
  p_user_id: user.id,
  p_leccion_id: leccionId
});
```

### 3. Accesibilidad AAA en Next.js Layout
En `app/layout.tsx`, asegúrate de definir el idioma de forma dinámica (`lang="es"`) para que los lectores de pantalla utilicen la voz y pronunciación en español correctamente:

```typescript
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-black min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
```
