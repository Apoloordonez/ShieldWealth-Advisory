import React from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink, 
  Scale, 
  FileCheck2, 
  Lock, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { Link } from '../context/RouterContext';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb & Title */}
        <div>
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Sobre ShieldWealth Advisory</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
            Transparencia Institucional y Alcance
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Conoce la identidad, los principios éticos y los límites operativos que rigen a ShieldWealth Advisory en Ecuador.
          </p>
        </div>

        {/* Identity & Scope Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-100 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-[#00A3C4]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#0A192F]">
                ¿Quién es ShieldWealth Advisory?
              </h2>
              <span className="text-xs text-slate-500 font-mono">
                Marca independiente de orientación financiera y protección
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            ShieldWealth Advisory es una iniciativa enfocada en brindar claridad y educación estructurada a ciudadanos y familias en Ecuador que buscan alternativas privadas de salud y previsión. Creemos que una persona informada toma mejores decisiones, comprende sus derechos contractuales y contrata soluciones sostenibles en el tiempo.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Nuestro objetivo es eliminar la opacidad y la presión comercial tradicional, ofreciendo una experiencia digital donde el usuario pueda explorar alternativas a su ritmo, comprender deducibles y limitaciones, y evaluar qué plan se alinea con sus prioridades sin entregar prematuramente datos personales sensibles.
          </p>
        </div>

        {/* Legal & Commercial Relationship with BMI Ecuador */}
        <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4 text-emerald-950">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <h2 className="text-lg font-bold text-emerald-900">
              Certificación y Autorización para Productos BMI Ecuador
            </h2>
          </div>

          <div className="space-y-3 text-xs leading-relaxed text-emerald-900">
            <p>
              <strong>Agente certificado BMI:</strong> El titular de ShieldWealth Advisory es un <strong>agente certificado de BMI Ecuador</strong> debidamente facultado para asesorar y presentar las soluciones de salud médica del portafolio BMI en Ecuador (incluyendo los planes Sigma, Innova, Gastos Médicos Mayores, Meridian II, Azure, Ideal y Support).
            </p>
            <p>
              <strong>Apego a la documentación oficial:</strong> Toda la información técnica de deducibles, alcance territorial, prestadores y beneficios se presenta con estricto apego a los condicionados generales y particulares, a las fichas de ayuda de ventas y al cotizador oficial de BMI Ecuador (<a href="https://cotizadorbmi.com.ec/" target="_blank" rel="noopener noreferrer" className="font-semibold underline text-emerald-950 hover:text-black">cotizadorbmi.com.ec</a>).
            </p>
            <p>
              <strong>Límites y suscripción:</strong> ShieldWealth no es la entidad aseguradora emisora de las pólizas; la aceptación de asegurabilidad, suscripción médica, aplicación de preexistencias y emisión contractual corresponden con exclusividad a <strong>BMI del Ecuador Compañía de Seguros S.A.</strong> y sus filiales autorizadas.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-[#0A192F]">
            Nuestros Pilares de Confianza
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
            
            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Scale className="w-4 h-4 text-[#00A3C4]" />
                <h3>Cero sesgo comercial</h3>
              </div>
              <p className="leading-relaxed">
                No inventamos puntuaciones de conveniencia ni rankings de "el más vendido" o "el más recomendado". Presentamos las 7 alternativas de salud con sus especificaciones estructurales para que tú compares con datos objetivos.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Lock className="w-4 h-4 text-[#00A3C4]" />
                <h3>Privacidad por diseño</h3>
              </div>
              <p className="leading-relaxed">
                No te pedimos tu historial médico, diagnósticos previos ni número de cédula en el recorrido digital. Respetamos el principio de minimización de datos de la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador.
              </p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Eye className="w-4 h-4 text-[#00A3C4]" />
                <h3>Transparencia de vacíos</h3>
              </div>
              <p className="leading-relaxed">
                Si un dato sobre deducible, red clínica o límite no está debidamente respaldado por documentación oficial actualizada de la aseguradora, lo etiquetamos visiblemente como "Pendiente de confirmar".
              </p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <FileCheck2 className="w-4 h-4 text-[#00A3C4]" />
                <h3>Validez de póliza oficial</h3>
              </div>
              <p className="leading-relaxed">
                Recordamos siempre que la orientación pedagógica no reemplaza la póliza contractual ni la asesoría oficial acreditada. Toda suscripción médica y aceptación de riesgo corresponde formalmente a BMI.
              </p>
            </div>

          </div>
        </div>

        {/* Prototype Phase Notice */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">
            Naturaleza Técnica de este Entorno Digital
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Esta versión del sitio web opera como un <strong>prototipo privado de evaluación</strong> para contrastar la experiencia de usuario, la navegación responsive y la arquitectura de contenidos. No se encuentra promocionada públicamente ni conectada a canales de pago, CRM, pasarelas ni servicios externos.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
            <Link
              to="/privacidad"
              className="text-[#00A3C4] hover:underline font-semibold"
            >
              Consultar borrador de privacidad →
            </Link>
            <Link
              to="/contacto-privacidad"
              className="text-[#00A3C4] hover:underline font-semibold"
            >
              Procedimiento de derechos ARCO →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
