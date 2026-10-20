import React, { useState } from 'react';
import { Cookie, ShieldCheck, Check, AlertCircle } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { useApp } from '../context/AppContext';

export function CookiesPage() {
  const { cookiePrefs, saveCookiePrefs } = useApp();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(cookiePrefs.analytics);
  const [marketingEnabled, setMarketingEnabled] = useState(cookiePrefs.marketing);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveCookiePrefs({
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Title */}
        <div>
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Política de Cookies</span>
          </nav>
          <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
            Política de Cookies y Almacenamiento Local
          </h1>
          <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
            Transparencia sobre el uso de tecnologías de almacenamiento temporal en tu navegador durante la visita a ShieldWealth Advisory.
          </p>
        </div>

        {/* Current State Summary Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-50 rounded-xl text-[#00A3C4]">
              <Cookie className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0A192F]">
                Estado Actual del Prototipo: Cero Rastreadores No Esenciales
              </h2>
              <span className="text-xs text-slate-500">
                Solo almacenamiento técnico de sesión
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            En cumplimiento de las buenas prácticas de privacidad y de la Ley Orgánica de Protección de Datos Personales del Ecuador, le informamos que <strong>este sitio web no tiene instaladas herramientas de analítica comercial, píxeles de Facebook/Meta, etiquetas de Google Ads ni cookies de terceros para perfilamiento publicitario</strong>.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            El único almacenamiento que se ejecuta en su equipo corresponde a <strong>tecnologías técnicas y estrictamente necesarias</strong> (HTML5 SessionStorage / LocalStorage local), cuyo propósito exclusivo es mantener en memoria las respuestas que usted selecciona en el cuestionario y los planes que añade al comparador mientras navega entre páginas de la misma pestaña. Al cerrar la pestaña o pulsar "Reiniciar cuestionario", dichos datos se eliminan.
          </p>
        </div>

        {/* Technical Inventory Table */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-[#0A192F]">
            Inventario Técnico de Almacenamiento Local
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-semibold bg-slate-50">
                  <th className="p-3">Clave / Nombre</th>
                  <th className="p-3">Tipo</th>
                  <th className="p-3">Propósito</th>
                  <th className="p-3">Duración</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-3 font-mono font-semibold text-slate-900">shieldwealth_answers_v1</td>
                  <td className="p-3">SessionStorage</td>
                  <td className="p-3">Conserva tus respuestas del cuestionario durante la sesión para mostrar los resultados.</td>
                  <td className="p-3 font-mono text-slate-500">Sesión actual</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold text-slate-900">shieldwealth_compare_ids_v1</td>
                  <td className="p-3">SessionStorage</td>
                  <td className="p-3">Registra los hasta 3 planes seleccionados para contraste en la tabla comparativa.</td>
                  <td className="p-3 font-mono text-slate-500">Sesión actual</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-semibold text-slate-900">shieldwealth_cookie_prefs_v1</td>
                  <td className="p-3">LocalStorage</td>
                  <td className="p-3">Recuerda si usted ya configuró sus preferencias de almacenamiento técnico.</td>
                  <td className="p-3 font-mono text-slate-500">Persistente local</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 font-mono">
            [TECNOLOGÍAS DE COOKIES ADICIONALES: PENDIENTE DE INCORPORAR SI EN EL FUTURO SE HABILITAN HERRAMIENTAS ANALÍTICAS CON CONSENTIMIENTO EXPRESO]
          </div>
        </div>

        {/* Interactive Preferences Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <h2 className="text-base font-bold text-[#0A192F]">
              Panel de Preferencias de Cookies
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Configura cómo deseas que interactúe la web con el almacenamiento de tu dispositivo:
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-4 text-xs">
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-4">
              <div>
                <strong className="text-slate-900 font-semibold text-sm block mb-1">
                  Cookies y Almacenamiento Técnico (Necesarias)
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Permiten el funcionamiento del cuestionario, el guardado de respuestas en sesión y la navegación por la tabla comparativa. No pueden desactivarse.
                </p>
              </div>
              <span className="shrink-0 font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full text-xs">
                Siempre Activas
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-4">
              <div>
                <strong className="text-slate-900 font-semibold text-sm block mb-1">
                  Cookies de Rendimiento y Analítica
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Permitirían en el futuro evaluar el tiempo de carga y uso de componentes. Actualmente no se encuentran instaladas en el prototipo.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A3C4]"></div>
              </label>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between gap-4">
              <div>
                <strong className="text-slate-900 font-semibold text-sm block mb-1">
                  Cookies de Publicidad y Perfilado
                </strong>
                <p className="text-slate-600 leading-relaxed">
                  Utilizadas por redes de anuncios para mostrar publicidad personalizada. ShieldWealth no comercializa publicidad ni rastrea a sus usuarios.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={marketingEnabled}
                  onChange={(e) => setMarketingEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00A3C4]"></div>
              </label>
            </div>

            <div className="pt-2 flex items-center justify-between">
              {saveSuccess ? (
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Preferencias actualizadas en su navegador
                </span>
              ) : <div />}

              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Guardar Selección
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
