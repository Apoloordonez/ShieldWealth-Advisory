import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface TermTooltipProps {
  term: 'deducible' | 'copago' | 'carencia' | 'red' | 'limite' | 'exclusion' | 'preexistencia';
  children?: React.ReactNode;
}

const GLOSSARY_TERMS: Record<string, { label: string; explanation: string }> = {
  deducible: {
    label: 'Deducible',
    explanation:
      'Monto fijo anual o por evento que el asegurado debe pagar de su bolsillo antes de que la póliza empiece a cubrir los gastos médicos.',
  },
  copago: {
    label: 'Copago / Coaseguro',
    explanation:
      'Porcentaje o valor fijo que el asegurado asume en cada consulta, examen o servicio médico, compartiendo el costo con la aseguradora.',
  },
  carencia: {
    label: 'Periodo de Carencia',
    explanation:
      'Tiempo mínimo que debe transcurrir desde la firma del contrato antes de que ciertas coberturas (ej. maternidad, cirugías programadas) se activen.',
  },
  red: {
    label: 'Red Médica',
    explanation:
      'Conjunto de clínicas, hospitales, laboratorios y médicos con convenio directo con la aseguradora, permitiendo atención con crédito directo o copago reducido.',
  },
  limite: {
    label: 'Límite Máximo / Suma Asegurada',
    explanation:
      'Monto tope que la compañía de seguros cubrirá para una persona durante un año de vigencia o durante toda su vida asegurada.',
  },
  exclusion: {
    label: 'Exclusión Contractual',
    explanation:
      'Condiciones médicas, tratamientos o circunstancias explícitamente no cubiertas por la póliza según el contrato de seguro.',
  },
  preexistencia: {
    label: 'Preexistencia',
    explanation:
      'Enfermedad, síntoma o alteración de salud diagnosticada o conocida antes del inicio de vigencia de la póliza médica.',
  },
};

export function TermTooltip({ term, children }: TermTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const data = GLOSSARY_TERMS[term];

  if (!data) return <>{children}</>;

  return (
    <span className="relative inline-flex items-center gap-1 group">
      <span className="border-b border-dotted border-[#00A3C4] cursor-help">
        {children || data.label}
      </span>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-[#00A3C4] hover:text-[#0A192F] focus:outline-none"
        aria-label={`Explicación de ${data.label}`}
      >
        <HelpCircle className="w-3.5 h-3.5 inline" />
      </button>

      {isOpen && (
        <span
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-xl z-50 pointer-events-none transition-opacity duration-200"
        >
          <strong className="block text-[#00A3C4] mb-1 font-semibold">{data.label}</strong>
          <span className="text-slate-200 leading-relaxed block">{data.explanation}</span>
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
        </span>
      )}
    </span>
  );
}
