import React, { useState, useEffect } from 'react';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from '../context/RouterContext';

export function CookieBanner() {
  const { cookiePrefs, saveCookiePrefs, isCookieModalOpen, setIsCookieModalOpen } = useApp();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show banner if user has not yet interacted with cookie preferences
    const hasInteracted = localStorage.getItem('shieldwealth_cookie_interacted');
    if (!hasInteracted) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptEssential = () => {
    saveCookiePrefs({
      essential: true,
      analytics: false,
      marketing: false,
    });
    localStorage.setItem('shieldwealth_cookie_interacted', 'true');
    setShowBanner(false);
  };

  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('shieldwealth_cookie_interacted', 'true');
    setIsCookieModalOpen(false);
  };

  return (
    <>
      {/* Discreet bottom banner on first visit */}
      {showBanner && (
        <aside
          aria-label="Aviso de privacidad y cookies"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-40 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 text-xs text-slate-700 space-y-3"
        >
          <div className="flex items-start gap-2.5">
            <Cookie className="w-5 h-5 text-[#00A3C4] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Privacidad y almacenamiento local</p>
              <p className="mt-1 text-slate-600 leading-relaxed">
                Este sitio solo utiliza almacenamiento técnico de sesión para guardar sus respuestas del cuestionario y su selección de comparación durante la navegación. <strong>No usamos cookies publicitarias ni rastreadores de terceros</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-100">
            <Link to="/cookies" className="text-[#00A3C4] hover:underline font-medium">
              Política de cookies
            </Link>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsCookieModalOpen(true)}
                className="px-2.5 py-1 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Configurar
              </button>
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="px-3 py-1 bg-[#0A192F] text-white font-medium rounded-lg hover:bg-[#112240] transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {isCookieModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 border border-slate-200 text-slate-900">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00A3C4]" />
                <h3 id="cookie-modal-title" className="text-base font-bold">
                  Preferencias de Almacenamiento y Cookies
                </h3>
              </div>
              <button
                onClick={() => setIsCookieModalOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveModal} className="mt-4 space-y-4 text-xs">
              {/* Essential */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">Técnicas y de Sesión (Estrictamente Necesarias)</p>
                  <p className="text-slate-600 mt-0.5">
                    Permiten mantener las respuestas de su cuestionario y los planes añadidos al comparador mientras navega en la misma pestaña.
                  </p>
                </div>
                <span className="shrink-0 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                  Siempre Activas
                </span>
              </div>

              {/* Analytics */}
              <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">Analítica Web y Métricas</p>
                  <p className="text-slate-500 mt-0.5">
                    Desactivadas por defecto en este prototipo privado. No se recopilan datos de navegación ni eventos de comportamiento.
                  </p>
                </div>
                <span className="shrink-0 font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                  Inactivas
                </span>
              </div>

              {/* Marketing */}
              <div className="p-3 bg-slate-50/50 rounded-lg border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-slate-900">Publicitarias y Perfilado Comercial</p>
                  <p className="text-slate-500 mt-0.5">
                    Totalmente desactivadas. ShieldWealth no comercializa espacios publicitarios ni transfiere datos a redes de anuncios.
                  </p>
                </div>
                <span className="shrink-0 font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                  Inactivas
                </span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/cookies"
                  onClick={() => setIsCookieModalOpen(false)}
                  className="text-[#00A3C4] hover:underline"
                >
                  Consultar política detallada
                </Link>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0A192F] text-white font-semibold rounded-lg hover:bg-[#112240]"
                >
                  Guardar Preferencias
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
