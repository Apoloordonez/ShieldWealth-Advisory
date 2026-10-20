import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function PrototypeNotice() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <Info className="w-3.5 h-3.5 text-[#00A3C4] shrink-0" />
          <span>
            <strong className="text-white font-medium">Orientación Oficial de Productos BMI:</strong>{' '}
            Presentado por agente certificado de BMI Ecuador. Deducibles y red médica respaldados en documentos oficiales y cotizador vigente.
          </span>
        </div>
        <div className="flex items-center gap-4 shrink-0 text-slate-400">
          <Link to="/sobre-shieldwealth" className="hover:text-white transition-colors underline decoration-slate-600">
            Alcance del prototipo
          </Link>
          <span aria-hidden="true" className="text-slate-700">·</span>
          <span className="font-mono text-[11px] text-slate-400">Versión preliminar 2026</span>
        </div>
      </div>
    </div>
  );
}
