import React from 'react';
import { ShieldCheck, Mail, FileText, AlertTriangle, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function ContactoPrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Title */}
        <div>
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Canal de Privacidad y Derechos ARCO</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Canal de Privacidad y Derechos ARCO
            </h1>
            <span className="px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold rounded-full w-fit">
              CANAL EN CONFIGURACIÓN
            </span>
          </div>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Procedimiento formal para el ejercicio de los derechos de Acceso, Rectificación, Cancelación y Oposición contemplados en la Ley Orgánica de Protección de Datos Personales del Ecuador.
          </p>
        </div>

        {/* Prototype status banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-xs text-amber-950 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>ESTADO DEL CANAL: CAMPOS OPERATIVOS PENDIENTES DE DESIGNACIÓN</span>
          </div>
          <p className="leading-relaxed">
            Debido a que ShieldWealth Advisory se encuentra en fase de prototipo privado de arquitectura y no mantiene bases de datos comerciales activas ni almacenamiento en servidores de producción, los siguientes canales corporativos están en proceso de asignación oficial:
          </p>
          <div className="bg-white/80 border border-amber-200 rounded-xl p-4 font-mono text-xs text-amber-900 space-y-1.5">
            <p>• <strong>Buzón de recepción ARCO:</strong> [CORREO ELECTRÓNICO OFICIAL DE PRIVACIDAD - EJ. privacidad@shieldwealth.ec]</p>
            <p>• <strong>Delegado de Protección de Datos (DPO):</strong> [NOMBRE O FIRMA DELEGADA REGISTRADA ANTE LA AUTORIDAD]</p>
            <p>• <strong>Mesa de partes física:</strong> [DIRECCIÓN FÍSICA PARA NOTIFICACIONES EN QUITO O GUAYAQUIL]</p>
            <p>• <strong>Formulario formal ARCO:</strong> [ENLACE A FORMULARIO PDF DESCARGABLE PENDIENTE DE HOMOLOGACIÓN]</p>
          </div>
        </div>

        {/* Rights Detail Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-[#0A192F]">
            Derechos de los Titulares según la LOPDP (Ecuador)
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Todo ciudadano ecuatoriano o residente cuyos datos sean tratados por una entidad tiene garantizados los siguientes derechos fundamentales:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-sm font-bold text-slate-900 block">
                1. Derecho de Acceso (Art. 13 LOPDP)
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Conocer si sus datos están siendo tratados, qué categorías de datos se manejan, cuál es su procedencia, finalidades y posibles destinatarios o transferencias.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-sm font-bold text-slate-900 block">
                2. Derecho de Rectificación y Actualización (Art. 14 LOPDP)
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Solicitar la corrección de datos inexactos, erróneos, incompletos o desactualizados que consten en los registros del responsable.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-sm font-bold text-slate-900 block">
                3. Derecho de Eliminación / Supresión (Art. 15 LOPDP)
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Pedir la supresión definitiva de sus datos personales cuando hayan dejado de ser necesarios para los fines que motivaron su recolección o cuando retire su consentimiento.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
              <strong className="text-sm font-bold text-slate-900 block">
                4. Derecho de Oposición (Art. 16 LOPDP)
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Oponerse al tratamiento de sus datos para finalidades promocionales, prospección comercial directa o decisiones automatizadas.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 md:col-span-2">
              <strong className="text-sm font-bold text-slate-900 block">
                5. Derecho de Portabilidad (Art. 17 LOPDP)
              </strong>
              <p className="text-slate-600 leading-relaxed">
                Recibir sus datos personales en un formato estructurado, de uso común y lectura mecánica, o solicitar que se transfieran directamente a otro responsable cuando sea técnicamente factible.
              </p>
            </div>

          </div>
        </div>

        {/* Procedure description */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 text-xs text-slate-700 leading-relaxed">
          <h2 className="text-base font-bold text-[#0A192F]">
            Procedimiento Formal para Presentar una Solicitud
          </h2>
          <p>
            Una vez que el canal formal sea activado en producción, el procedimiento estándar requerirá:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-slate-600 pl-2">
            <li>
              Remitir una comunicación escrita al buzón <code>[CORREO DE PRIVACIDAD]</code> adjuntando copia legible de su cédula de identidad o documento que acredite su personería.
            </li>
            <li>
              Indicar de manera clara qué derecho desea ejercer (Acceso, Rectificación, Eliminación, etc.) y sobre qué datos específicos versa la petición.
            </li>
            <li>
              Señalar una dirección de correo electrónico válida para recibir notificaciones y la respuesta formal.
            </li>
            <li>
              El plazo legal máximo de respuesta en Ecuador es de <strong>15 días hábiles</strong> computados desde la fecha de recepción de la solicitud completa.
            </li>
          </ol>
        </div>

        {/* Current advice */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3 text-xs">
          <div className="flex items-center gap-2 text-[#00A3C4] font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>Situación de tus datos en este momento</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Recordamos que al navegar por este prototipo, tus respuestas se guardan únicamente de forma temporal en tu propio navegador. Si deseas reiniciar o borrar cualquier dato introducido en el cuestionario, puedes hacerlo inmediatamente pulsando el botón "Reiniciar cuestionario" o limpiando el almacenamiento local de tu navegador web.
          </p>
          <div className="pt-2">
            <Link
              to="/cuestionario"
              className="text-[#00A3C4] hover:underline font-semibold"
            >
              Ir al cuestionario para verificar o reiniciar respuestas →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
