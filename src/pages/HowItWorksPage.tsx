import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  BookOpen,
  AlertCircle
} from 'lucide-react';
import { Link } from '../context/RouterContext';

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#00A3C4] uppercase tracking-wider">
            Orientación Autogestionada
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
            Cómo Funciona ShieldWealth Advisory
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Una metodología clara, independiente y transparente para que comprendas las soluciones de salud de BMI en Ecuador sin fricciones comerciales.
          </p>
        </div>

        {/* 4-Step Process Detail */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#0A192F] border-b border-slate-200 pb-3">
            Las 4 Etapas de tu Experiencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <span className="text-2xl font-bold font-mono text-[#00A3C4]">01</span>
              <h3 className="text-base font-bold text-slate-900">
                1. Cuestionario de orientación inicial
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Respondes 6 preguntas diseñadas para identificar tu contexto: si buscas cobertura para ti o tu familia, si te interesa atención en Ecuador o internacional, y qué relación de deducible/prima prefieres comprender.
              </p>
              <div className="pt-2 text-[11px] text-[#008B9E] font-medium">
                ✓ No solicitamos cédula, diagnósticos ni teléfono.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <span className="text-2xl font-bold font-mono text-[#00A3C4]">02</span>
              <h3 className="text-base font-bold text-slate-900">
                2. Exploración del catálogo estructurado
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visualizas las 7 alternativas del portafolio (Sigma, Innova, Gastos Médicos Mayores, Meridian II, Azure, Ideal y Support). Conoces qué información está disponible y qué cláusulas están pendientes de confirmación documental.
              </p>
              <div className="pt-2 text-[11px] text-[#008B9E] font-medium">
                ✓ Sin rankings ficticios ni favoritismos comerciales.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <span className="text-2xl font-bold font-mono text-[#00A3C4]">03</span>
              <h3 className="text-base font-bold text-slate-900">
                3. Contraste en el comparador interactivo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seleccionas hasta 3 planes para colocarlos lado a lado en una matriz técnica que analiza límites, red hospitalaria, deducibles, copagos y carencias.
              </p>
              <div className="pt-2 text-[11px] text-[#008B9E] font-medium">
                ✓ Señalización explícita de campos sin verificar.
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <span className="text-2xl font-bold font-mono text-[#00A3C4]">04</span>
              <h3 className="text-base font-bold text-slate-900">
                4. Decisión informada y validación oficial
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Llegas preparado con preguntas concretas para contrastar con los canales oficiales de BMI Ecuador o con tu asesor de confianza antes de cualquier firma de póliza.
              </p>
              <div className="pt-2 text-[11px] text-[#008B9E] font-medium">
                ✓ Tú conservas el control en todo momento.
              </div>
            </div>

          </div>
        </div>

        {/* Insurance Glossary */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-[#00A3C4]" />
            <h2 className="text-xl font-bold text-[#0A192F]">
              Glosario Didáctico de Términos de Salud Privada
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Comprender el lenguaje de los seguros te ahorra sorpresas al momento de un siniestro. Consulta los conceptos esenciales:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-sm font-bold text-slate-900 block mb-1">
                Deducible
              </strong>
              <p className="text-slate-600 leading-relaxed">
                El monto anual (o por evento) que debes cubrir con tu propio dinero antes de que el seguro empiece a pagar. Si tu deducible es de $500 y tu gasto médico cubierto es de $2,000, tú pagas los primeros $500 y el seguro procesa los $1,500 restantes conforme a las condiciones de la póliza.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-sm font-bold text-slate-900 block mb-1">
                Copago / Coaseguro
              </strong>
              <p className="text-slate-600 leading-relaxed">
                El porcentaje o valor fijo en el que participas en cada atención médica. Por ejemplo, si el copago para una consulta con especialista en red preferente es de $15 o del 20%, ese es el valor que asumes directamente en la clínica.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-sm font-bold text-slate-900 block mb-1">
                Periodo de Carencia
              </strong>
              <p className="text-slate-600 leading-relaxed">
                El tiempo que debe transcurrir entre el inicio de vigencia de tu póliza y la fecha en que puedes hacer uso de coberturas específicas (por ejemplo: 10 a 12 meses para maternidad, o 6 a 12 meses para cirugías programadas). Las emergencias accidentales habitualmente tienen cobertura inmediata.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-sm font-bold text-slate-900 block mb-1">
                Red Médica y Prestadores
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Las clínicas, hospitales y centros de diagnóstico que tienen convenio con la aseguradora. En red médica puedes acceder a crédito directo (pago directo de la aseguradora al hospital), mientras que fuera de red suele operar mediante solicitud de reembolso.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-sm font-bold text-slate-900 block mb-1">
                Límite Máximo / Suma Asegurada
              </strong>
              <p className="text-slate-600 leading-relaxed">
                El tope monetario máximo que la aseguradora reembolsará por persona durante una vigencia anual o durante toda la vigencia del contrato (límite vitalicio).
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <strong className="text-sm font-bold text-slate-900 block mb-1">
                Preexistencias y Exclusiones
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Condiciones de salud que ya existían antes de contratar el seguro. La ley ecuatoriana de medicina prepagada y seguros de asistencia médica establece coberturas progresivas para preexistencias, sujetas a declaración previa y tablas de la Superintendencia.
              </p>
            </div>
          </div>
        </div>

        {/* Preparation Checklist */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#00A3C4]" />
            <h2 className="text-xl font-bold text-[#0A192F]">
              Lista de Documentos Recomendados para Cotizar
            </h2>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Cuando decidas solicitar una cotización oficial a BMI Ecuador o a un asesor acreditado, te sugerimos tener listos estos antecedentes para agilizar la suscripción:
          </p>

          <div className="space-y-2.5 text-xs text-slate-700 pt-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Cédula de ciudadanía o pasaporte</strong> del titular y de cada miembro familiar dependiente que se incluirá en la póliza.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Fechas exactas de nacimiento</strong> de todos los asegurados para cálculo actuarial de tarifas.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Historial de antecedentes médicos relevantes:</strong> informes de cirugías previas, tratamientos crónicos o diagnósticos formales para completar la declaración de salud con honestidad.
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Certificado de póliza anterior</strong> (si estás cambiando de aseguradora) para acreditar continuidad y evaluar reconocimiento de carencias o preexistencias.
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 text-center space-y-4">
          <h2 className="text-xl font-bold">
            ¿Listo para poner en práctica estos conceptos?
          </h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Inicia nuestro recorrido autogestionado para ordenar los 7 planes según tus prioridades personales.
          </p>
          <div className="pt-2">
            <Link
              to="/cuestionario"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00A3C4] hover:bg-[#008B9E] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg transition-colors"
            >
              <span>Empezar cuestionario autogestionado</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
