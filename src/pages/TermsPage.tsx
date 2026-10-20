import React from 'react';
import { AlertTriangle, Shield, Scale, FileText } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Title */}
        <div>
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Términos y Condiciones</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Términos y Condiciones de Uso
            </h1>
            <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold rounded-full w-fit">
              ESTADO: BORRADOR EN REVISIÓN
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Prototipo digital informativo independiente para el mercado de la República del Ecuador.
          </p>
        </div>

        {/* Warning Draft Banner */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 text-xs text-amber-950 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>ESTADO PRELIMINAR DE PROTOTIPO PRIVADO</span>
          </div>
          <p className="leading-relaxed">
            Estos términos y condiciones rigen el uso del prototipo no comercial de ShieldWealth Advisory. No constituyen contrato de aseguramiento ni oferta mercantil vinculante. Los datos institucionales señalados con <code>[MARCADOR PENDIENTE]</code> serán actualizados una vez concluyan las validaciones corporativas correspondientes.
          </p>
        </div>

        {/* Terms Articles */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              1. Objeto y Alcance del Sitio Web
            </h2>
            <p>
              El sitio web tiene como único objeto proveer orientación conceptual, pedagógica y comparativa acerca de estructuras de cobertura médica privada disponibles en el mercado ecuatoriano, con especial referencia al portafolio de productos de asistencia médica asociados a la marca BMI.
            </p>
            <p>
              En ningún caso el contenido aquí publicado constituye asesoría médica personalizada, diagnóstico clínico, recomendación financiera de inversión ni emisión o suscripción de pólizas de seguro.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              2. Carácter No Vinculante de la Orientación y el Cuestionario
            </h2>
            <p>
              Las respuestas emitidas a través del cuestionario autogestionado o del comparador tienen carácter estrictamente ilustrativo. Ningún resultado, filtro o visualización representa una oferta formal de contrato, una promesa de cobertura o una fijación de prima o tarifa mensual.
            </p>
            <p>
              Toda prima definitiva, deducible exigible, periodo de carencia aplicable y exclusión de preexistencia se define exclusivamente por medio de la póliza emitida formalmente por la compañía aseguradora correspondiente (BMI Ecuador), tras la suscripción médica oficial.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              3. Propiedad Intelectual y Uso Nominativo de Marcas
            </h2>
            <p>
              Los nombres comerciales, signos distintivos y denominaciones de planes tales como <em>Sigma</em>, <em>Innova</em>, <em>Gastos Médicos Mayores</em>, <em>Meridian II</em>, <em>Azure</em>, <em>Ideal</em> y <em>Support</em>, así como la denominación y logotipo de <em>BMI</em>, pertenecen en exclusiva a sus respectivos titulares legítimos (BMI del Ecuador Compañía de Seguros S.A. y BMI Companies).
            </p>
            <p>
              Su mención en este sitio se realiza con fines informativos, de referencia al consumidor e identificación nominativa conforme a la legislación de propiedad intelectual y competencia desleal del Ecuador. No implica patrocinio, copropiedad ni aval institucional por parte de BMI hacia ShieldWealth Advisory.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              4. Ausencia de Garantías y Limitación de Responsabilidad
            </h2>
            <p>
              ShieldWealth Advisory no garantiza que la información técnica resumida en las fichas preliminares se encuentre libre de cambios intempestivos efectuados por la compañía aseguradora. Corresponde al usuario verificar las condiciones directamente con los documentos oficiales de suscripción.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs text-slate-800 space-y-1">
              <p>• <strong>Titular Operador:</strong> [RAZÓN SOCIAL / TITULAR DEL PROYECTO]</p>
              <p>• <strong>Domicilio de Notificaciones:</strong> [DOMICILIO LEGAL EN QUITO / GUAYAQUIL, ECUADOR]</p>
              <p>• <strong>Jurisdicción Aplicable:</strong> [JURISDICCIÓN: TRIBUNALES DE LA REPÚBLICA DEL ECUADOR]</p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              5. Modificaciones de los Términos
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento con ocasión de actualizaciones regulatorias, suscripción de acuerdos comerciales formales o mejoras técnicas en la plataforma.
            </p>
            <p className="font-mono text-xs text-slate-500">
              [VIGENCIA DEL TEXTO: OCTUBRE 2026 - PENDIENTE DE APROBACIÓN DEFINITIVA]
            </p>
          </section>

        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="text-xs text-slate-500 hover:text-[#0A192F] inline-flex items-center gap-1"
          >
            <span>← Volver a la página principal</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
