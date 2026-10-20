import React from 'react';
import { ShieldAlert, AlertTriangle, Lock, FileText, ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Title */}
        <div>
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Política de Privacidad</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Política de Privacidad
            </h1>
            <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold rounded-full w-fit">
              ESTADO: BORRADOR EN REVISIÓN
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Marco regulatorio de referencia: Ley Orgánica de Protección de Datos Personales (LOPDP) de la República del Ecuador.
          </p>
        </div>

        {/* Prominent Draft Notice */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 text-xs text-amber-950 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>ADVERTENCIA DE ESTADO DE BORRADOR TÉCNICO Y LEGAL</span>
          </div>
          <p className="leading-relaxed">
            El presente documento constituye un <strong>borrador estructural de política de privacidad</strong> para el prototipo privado de ShieldWealth Advisory. Los campos entre corchetes <code>[EJEMPLO]</code> representan información corporativa, legal u operativa que se encuentra <strong>pendiente de validación formal</strong> ante las autoridades competentes del Ecuador y que deberá ser completada y aprobada por asesoría jurídica antes de cualquier lanzamiento público o recopilación de datos en producción.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              1. Identidad y Datos del Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales que se pudieren recabar en el futuro es:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-xs space-y-1.5 text-slate-800">
              <p>• <strong>Razón Social / Titular:</strong> [RAZÓN SOCIAL DEL RESPONSABLE EN ECUADOR]</p>
              <p>• <strong>RUC / Identificación Fiscal:</strong> [RUC / IDENTIFICACIÓN]</p>
              <p>• <strong>Domicilio Legal:</strong> [DOMICILIO LEGAL EN ECUADOR - CIUDAD, CANTON, PROVINCIA]</p>
              <p>• <strong>Correo de Privacidad / DPO:</strong> [CORREO DE PRIVACIDAD / DELEGADO DE PROTECCIÓN DE DATOS]</p>
              <p>• <strong>Teléfono de contacto:</strong> [TELÉFONO DE CONTACTO INSTITUCIONAL]</p>
            </div>
            <p className="text-slate-500 text-xs italic">
              Nota del prototipo: Hasta que dicha personalidad jurídica o registro no se encuentre debidamente acreditado, no se tratan ni almacenan bases de datos en producción.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              2. Principios de Tratamiento Aplicables (LOPDP Ecuador)
            </h2>
            <p>
              De conformidad con la Ley Orgánica de Protección de Datos Personales del Ecuador, el tratamiento se rige por los principios de:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li><strong>Juridicidad y Licitud:</strong> Todo tratamiento contará con una base de legitimación adecuada.</li>
              <li><strong>Minimización:</strong> Solo se requerirán los datos estrictamente necesarios para la orientación o contacto voluntario.</li>
              <li><strong>Confidencialidad:</strong> Obligación de reserva técnica y organizativa estricta.</li>
              <li><strong>Transparencia:</strong> Información clara y accesible sobre el uso de la información.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              3. Datos Tratados durante la Fase de Prototipo vs. Fase Futura
            </h2>
            <div className="space-y-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-900 block mb-1">A. Durante la exploración del prototipo digital:</strong>
                <p className="text-slate-600">
                  Las selecciones del cuestionario (preferencia individual/familiar, alcance nacional/internacional, preferencias de deducible) <strong>se almacenan únicamente en la memoria local de su navegador (sessionStorage)</strong>. Cero diagnósticos, antecedentes clínicos, recetas ni datos de salud sensibles son solicitados.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <strong className="text-slate-900 block mb-1">B. En caso de solicitar asesoría voluntaria futura:</strong>
                <p className="text-slate-600">
                  Únicamente datos identificativos de contacto básico (nombre o alias, correo electrónico y ciudad de residencia). Los datos de salud formal solo son requeridos por las aseguradoras debidamente autorizadas (BMI Ecuador) en sus formularios oficiales de suscripción.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              4. Finalidades del Tratamiento
            </h2>
            <p>
              Los datos personales que voluntariamente decida entregar en fases operativas tendrán como únicas finalidades:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-2">
              <li>Atender su solicitud expresa de orientación o contacto para evaluar pólizas de salud.</li>
              <li>Coordinar la presentación de información oficial emitida por la aseguradora.</li>
              <li>Remisión de boletines informativos únicamente si el titular marcó de forma expresa y separada la casilla de consentimiento voluntario no preseleccionada.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              5. Base de Legitimación Legal
            </h2>
            <p>
              La base legal para el tratamiento de datos de contacto es el <strong>consentimiento libre, específico, informado e inequívoco</strong> del titular (artículo 7 numeral 1 de la LOPDP), o la aplicación de medidas precontractuales a petición del titular (artículo 7 numeral 5).
            </p>
            <p className="text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
              Campo sujeto a dictamen jurídico: <code>[BASE LEGAL POR CONFIRMAR ANTE LA AUTORIDAD DE PROTECCIÓN DE DATOS]</code>
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              6. Destinatarios, Encargados y Transferencias Internacionales
            </h2>
            <p>
              No se realizarán cesiones de datos a terceros sin consentimiento previo, salvo mandato legal de autoridad competente del Ecuador. Los proveedores de infraestructura técnica y alojamiento operan bajo contratos de confidencialidad:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-700">
              [PROVEEDORES Y TRANSFERENCIAS: SERVIDORES DE ALOJAMIENTO, NUBE Y PROVEEDOR DE CORREO TRANSACCIONAL POR HOMOLOGAR]
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              7. Plazos de Conservación
            </h2>
            <p>
              Los datos de solicitudes de asesoría se conservarán durante:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-700">
              [PLAZOS DE CONSERVACIÓN: PERIODO EXACTO EN MESES O AÑOS SEGÚN POLÍTICA DE RETENCIÓN DE ARCHIVO]
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              8. Ejercicio de Derechos ARCO
            </h2>
            <p>
              Como titular de datos personales en el Ecuador, le asisten los derechos de <strong>Acceso, Eliminación (Cancelación), Rectificación, Actualización, Oposición y Portabilidad</strong> conforme a los artículos 13 al 20 de la LOPDP.
            </p>
            <p>
              Para conocer el procedimiento formal de ejercicio de derechos, consulte la sección <Link to="/contacto-privacidad" className="text-[#00A3C4] underline font-semibold">Canal de Contacto y Privacidad</Link>.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#0A192F]">
              9. Cookies y Tecnologías de Rastreo
            </h2>
            <p>
              Este sitio prototipo no utiliza cookies de analítica comercial, rastreadores de conversión ni píxeles publicitarios de terceros.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 font-mono text-xs text-slate-700">
              [TECNOLOGÍAS DE COOKIES: DETALLE TÉCNICO AUDITADO EN EL INVENTARIO DE LA POLÍTICA DE COOKIES]
            </div>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 border-t border-slate-200 pt-6">
            <h2 className="text-base font-bold text-[#0A192F]">
              10. Vigencia y Actualizaciones
            </h2>
            <p>
              Fecha de corte del presente borrador: <strong>Octubre 2026</strong>.
            </p>
            <p className="font-mono text-xs text-slate-500">
              [FECHA DE VIGENCIA DEFINITIVA: PENDIENTE DE PUBLICACIÓN EN PRODUCCIÓN]
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
