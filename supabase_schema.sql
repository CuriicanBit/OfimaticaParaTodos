-- =========================================================================
-- CONTENIDO: Esquema de Base de Datos para Supabase (PostgreSQL)
-- PROYECTO: Guía de Aprendizaje de Ofimática de Escritorio (WCAG AAA)
-- USUARIO OBJETIVO: Estudiante de 51 años con visión reducida
-- PARADIGMA: Guía de estudio de dos paneles. El alumno opera en programas reales de su PC.
-- =========================================================================

-- 1. TABLA: perfiles (profiles)
-- Almacena la información del perfil del estudiante y nivel de experiencia.
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL PRIMARY KEY,
    nombre TEXT NOT NULL,
    nivel_actual TEXT DEFAULT 'Básico' CHECK (nivel_actual IN ('Básico', 'Intermedio', 'Avanzado')),
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Habilitar Row Level Security (RLS) en profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir lectura de perfil propio" 
    ON public.profiles FOR SELECT 
    USING (auth.uid() = id);

CREATE POLICY "Permitir inserción de perfil propio" 
    ON public.profiles FOR INSERT 
    WITH CHECK (auth.uid() = id);

CREATE POLICY "Permitir actualización de perfil propio" 
    ON public.profiles FOR UPDATE 
    USING (auth.uid() = id);


-- 2. TABLA: lecciones
-- Almacena los contenidos teóricos, listas de pasos a seguir y consejos de accesibilidad.
CREATE TABLE IF NOT EXISTS public.lecciones (
    id TEXT PRIMARY KEY, -- Ej: 'word_l1', 'excel_l2'
    modulo_id TEXT NOT NULL, -- 'word', 'excel', 'powerpoint', 'outlook'
    orden INTEGER NOT NULL,
    titulo TEXT NOT NULL,
    descripcion_teorica TEXT NOT NULL,
    explicacion_alternativa TEXT NOT NULL,
    pasos_a_seguir TEXT[] NOT NULL, -- PostgreSQL Array para almacenar lista numerada ordenada
    pasos_alternativos TEXT[] NOT NULL, -- Pasos alternativos simplificados
    tips_de_accesibilidad TEXT NOT NULL,
    creado_en TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices de optimización para búsquedas paso a paso rápida
CREATE INDEX IF NOT EXISTS idx_lecciones_modulo_orden ON public.lecciones(modulo_id, orden);

-- Habilitar RLS en lecciones
ALTER TABLE public.lecciones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir visualización de lecciones a todo usuario" 
    ON public.lecciones FOR SELECT 
    USING (true);


-- 3. TABLA: progreso
-- Registra si la usuaria ya marcó como terminado el ejercicio real en su PC para habilitar la navegación.
CREATE TABLE IF NOT EXISTS public.progreso (
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    leccion_id TEXT REFERENCES public.lecciones(id) ON DELETE CASCADE NOT NULL,
    completado BOOLEAN DEFAULT FALSE NOT NULL,
    reintentado BOOLEAN DEFAULT FALSE NOT NULL,
    actualizado_en TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    PRIMARY KEY (user_id, leccion_id)
);

CREATE INDEX IF NOT EXISTS idx_progreso_usuario ON public.progreso(user_id);

-- Habilitar RLS en progreso
ALTER TABLE public.progreso ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir ver su propio progreso" 
    ON public.progreso FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Permitir modificar su propio progreso" 
    ON public.progreso FOR ALL 
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);


-- 4. FUNCIÓN ATÓMICA: marcar_leccion_completada
-- Registra de inmediato si el alumno completó el ejercicio real en su PC. (Se llama con supabase.rpc())
CREATE OR REPLACE FUNCTION public.marcar_leccion_completada(
    p_user_id UUID,
    p_leccion_id TEXT
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO public.progreso (user_id, leccion_id, completado, reintentado, actualizado_en)
    VALUES (p_user_id, p_leccion_id, TRUE, FALSE, NOW())
    ON CONFLICT (user_id, leccion_id) 
    DO UPDATE SET 
        reintentado = TRUE,
        actualizado_en = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 5. TRIGGER AUTOMÁTICO PARA NUEVOS USUARIOS
CREATE OR REPLACE FUNCTION public.crear_perfil_nuevo_usuario()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, nombre, nivel_actual)
    VALUES (
        new.id, 
        COALESCE(new.raw_user_meta_data->>'nombre', 'Estudiante de Ofimática'), 
        'Básico'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER tr_on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.crear_perfil_nuevo_usuario();
