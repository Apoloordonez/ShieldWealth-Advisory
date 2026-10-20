import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Info,
  Clock,
  Settings,
  AlertTriangle
} from 'lucide-react';
import { OFFICIAL_SOURCES } from '../data/sourceRegistry';
import { OfficialSourceItem } from '../types';

export function AdministrativeSourceReview() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredSources = selectedType === 'all'
    ? OFFICIAL_SOURCES
    : OFFICIAL_SOURCES.filter(s => s.type === selectedType);

  return (
    <div className="bg-slate-900 text-slate-200 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
      {/* Header bar with toggle */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-4 bg-slate-950 flex items-center justify-between cursor-pointer hover:bg-slate-900/90 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-[#00A3C4]/20 text-[#00A3C4]">
            <Settings className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">
                Panel Administrativo de Revisión de Fuentes y Vigencia
              </h3>
              <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">
                Agente Certificado BMI
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Auditoría centralizada de documentos, condicionados, cotizadores y directorio médico (Junio 2024 / 2026)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-400">
          <span className="hidden sm:inline">
            {isOpen ? 'Ocultar panel' : 'Desplegar panel de auditoría'}
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5 text-[#00A3C4]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
      </div>

      {/* Expanded Content */}
      {isOpen && (
        <div className="p-6 space-y-6 text-xs text-slate-300 border-t border-slate-800">
          
          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-semibold text-white text-xs">
                Control de Calidad Documental del Agente:
              </p>
              <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                Permite verificar el origen de cada dato de deducible y red publicado en el sitio, garantizando que ninguna cifra provenga de supuestos ni fuentes no autorizadas.
              </p>
            </div>

            {/* Filter by Type */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-slate-400 text-[11px]">Tipo de documento:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none focus:border-[#00A3C4]"
              >
                <option value="all">Todos ({OFFICIAL_SOURCES.length})</option>
                <option value="Comparador Oficial">Comparadores Oficiales</option>
                <option value="Ficha de Ventas">Fichas de Ventas</option>
                <option value="Directorio de Prestadores">Directorios de Prestadores</option>
                <option value="Condicionado">Condicionados Registrados</option>
              </select>
            </div>
          </div>

          {/* Sources List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredSources.map((source) => (
              <div 
                key={source.id}
                className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#00A3C4] block">
                      {source.type}
                    </span>
                    <h4 className="text-xs font-bold text-white mt-0.5">
                      {source.title}
                    </h4>
                  </div>
                  <span 
                    className={`text-[10px] px-2 py-0.5 rounded font-medium shrink-0 ${
                      source.status === 'Vigente' 
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : source.status === 'Documentación oficial revisada'
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    {source.status}
                  </span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {source.description}
                </p>

                <div className="bg-slate-900/90 rounded-lg p-2.5 text-[11px] space-y-1 font-mono text-slate-400">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Fecha documental:</span>
                    <span className="text-white">{source.docDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-300">Planes vinculados:</span> {source.plansAffected.join(', ')}
                  </div>
                  <div className="text-slate-300 pt-0.5">
                    <strong>Criterio de auditoría:</strong> {source.notes}
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-xs">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#00A3C4] hover:underline font-semibold"
                  >
                    <span>Abrir documento / portal oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              Certificación de agente: La información técnica cargada se apega rigurosamente a las condiciones de BMI Ecuador.
            </span>
            <span className="text-[#00A3C4] font-mono">Última revisión: Octubre 2026</span>
          </div>

        </div>
      )}
    </div>
  );
}
