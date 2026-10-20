import React from 'react';
import { ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { PLANS } from '../data/plans';

export function Footer() {
  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
      {/* Top Banner Notice inside Footer */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-3 max-w-4xl">
            <ShieldCheck className="w-5 h-5 text-[#00A3C4] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Asesoría autorizada de productos BMI:</strong> ShieldWealth Advisory está operado por un agente certificado de BMI Ecuador, facultado para presentar las soluciones de salud del portafolio BMI con base en sus condicionados, fichas de ayuda de ventas y cotizadores oficiales vigentes. La emisión de pólizas y suscripción médica corresponden a BMI del Ecuador Compañía de Seguros S.A.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00A3C4]"></span>
            <span className="text-slate-300 font-mono text-[11px]">Ecuador · Octubre 2026</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-lg inline-block shadow-sm">
              <img
                src="/assets/aistudio/Logotipo_SHIELDWEALTH_ADVISORY_8f2fb627.png"
                alt="ShieldWealth Advisory"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Orientación autogestionada, objetiva y sin presiones comerciales para comprender soluciones de salud médica en Ecuador. Tu salud, tus prioridades, tu decisión.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>• Prototipo privado para revisión y acreditación documental.</p>
              <p>• Sin recopilación no consentida de historiales clínicos ni diagnósticos.</p>
              <p>• Operación informativa en cumplimiento con la normativa ecuatoriana LOPDP.</p>
            </div>
          </div>

          {/* Col 3: Navegación */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Orientación
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-[#00A3C4] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/explorar" className="hover:text-[#00A3C4] transition-colors">
                  Explorar los 7 Planes
                </Link>
              </li>
              <li>
                <Link to="/cuestionario" className="hover:text-[#00A3C4] transition-colors">
                  Cuestionario Autogestionado
                </Link>
              </li>
              <li>
                <Link to="/comparar" className="hover:text-[#00A3C4] transition-colors">
                  Comparador Interactivo
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="hover:text-[#00A3C4] transition-colors">
                  Cómo funciona y Glosario
                </Link>
              </li>
              <li>
                <Link to="/sobre-shieldwealth" className="hover:text-[#00A3C4] transition-colors">
                  Sobre ShieldWealth
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Los 7 Planes */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Catálogo de Planes
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              {PLANS.map((plan) => (
                <li key={plan.id}>
                  <Link
                    to={`/planes/${plan.slug}`}
                    className="hover:text-[#00A3C4] transition-colors flex items-center justify-between"
                  >
                    <span>{plan.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">Ficha</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Privacidad y Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
              Privacidad y Términos
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/privacidad" className="hover:text-[#00A3C4] transition-colors">
                  Política de Privacidad <span className="text-xs text-slate-400">(Borrador)</span>
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="hover:text-[#00A3C4] transition-colors">
                  Términos y Condiciones <span className="text-xs text-slate-400">(Borrador)</span>
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-[#00A3C4] transition-colors">
                  Gestión de Cookies
                </Link>
              </li>
              <li>
                <Link to="/contacto-privacidad" className="hover:text-[#00A3C4] transition-colors">
                  Canal ARCO y Privacidad
                </Link>
              </li>
              <li className="pt-2">
                <a
                  href="https://cotizadorbmi.com.ec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <span>Portal oficial BMI Ecuador</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and metadata */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ShieldWealth Advisory. Prototipo digital informativo privado.</p>
          <p className="text-slate-400">
            Diseñado para orientación independiente en Ecuador · Sin fines de contratación directa
          </p>
        </div>
      </div>
    </footer>
  );
}
