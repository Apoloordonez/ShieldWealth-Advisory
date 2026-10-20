import React from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  AlertTriangle, 
  FileCheck, 
  CheckCircle2, 
  Info,
  Clock,
  Sparkles
} from 'lucide-react';
import { PlanDeductibleStructure } from '../types';
import { TermTooltip } from './TermTooltip';

interface DeductiblesSectionProps {
  planName: string;
  deductible: PlanDeductibleStructure;
}

export function DeductiblesSection({ planName, deductible }: DeductiblesSectionProps) {
  return (
    <div className="space-y-6">
      
      {/* Intro Explanation in Plain Language */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6 space-y-3 text-xs text-slate-700">
        <div className="flex items-center gap-2 text-sm font-bold text-[#0A192F]">
          <Info className="w-4 h-4 text-[#00A3C4]" />
          <h3>¿Qué es el deducible y cómo funciona en {planName}?</h3>
        </div>
        <p className="leading-relaxed">
          El <strong>deducible</strong> es el monto monetario fijo que el asegurado asume con recursos propios antes de que la cobertura de BMI comience a reembolsar o liquidar gastos médicos.
        </p>
        <p className="leading-relaxed">
          {deductible.howItApplies}
        </p>
        <div className="pt-2 text-[11px] text-slate-600 bg-white p-3 rounded-lg border border-slate-200/80 space-y-1">
          <p>
            <strong>Modalidad de cómputo:</strong> <span className="font-semibold text-slate-900">{deductible.frequency}</span>.
          </p>
          {deductible.maxFamilyDeductibles && (
            <p>
              <strong>Tope familiar:</strong> {deductible.maxFamilyDeductibles}
            </p>
          )}
        </div>
      </div>

      {/* Published Deductibles Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider">
              Opciones Oficiales de Deducible Publicadas en BMI
            </h4>
            <p className="text-[11px] text-slate-500">
              Datos extraídos del cotizador oficial y fichas de venta vigentes
            </p>
          </div>
          <span className="text-[11px] font-mono text-[#008B9E] font-semibold bg-cyan-50 px-2 py-0.5 rounded w-fit">
            Agente Certificado BMI
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 bg-slate-50/50">
                <th className="p-3.5 font-bold">Monto Deducible (USD)</th>
                <th className="p-3.5 font-bold">Criterio de Aplicación</th>
                <th className="p-3.5 font-bold">Observación Técnica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {deductible.options.map((opt) => (
                <tr key={opt.amount} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900 font-mono text-sm">
                    {opt.label}
                  </td>
                  <td className="p-3.5 text-slate-600">
                    <span className="inline-block bg-slate-100 px-2 py-0.5 rounded text-[11px] font-medium text-slate-800">
                      {opt.appliedTo}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-600 text-[11px] leading-relaxed">
                    {opt.notes || 'Opción contractual disponible sujeta a suscripción oficial.'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Exonerations and Conditions */}
        <div className="p-4 bg-slate-50/60 border-t border-slate-200 text-xs space-y-2">
          <div className="flex items-start gap-2 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-[#00A3C4] shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Régimen de Exoneraciones: </strong>
              <span className="text-slate-600">{deductible.exonerations}</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
            <span><strong>Fuente documental:</strong> {deductible.sourceDocName}</span>
            {deductible.sourceDocUrl && (
              <a
                href={deductible.sourceDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A3C4] hover:underline"
              >
                Ver fuente oficial BMI →
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Contractual and Underwriting Warning */}
      <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-3">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed text-[11px]">
          <strong>Regla de exactitud contractual:</strong> La elección del deducible influye directamente en la prima periódica del seguro: a mayor deducible contratado, menor suele ser el costo mensual. Las sumas definitivas, aplicación de preexistencias y copagos dependen exclusivamente de la cotización formal por edad y de la suscripción médica realizada por BMI Ecuador.
        </p>
      </div>

    </div>
  );
}
