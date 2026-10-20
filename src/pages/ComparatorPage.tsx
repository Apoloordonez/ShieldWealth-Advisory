import React, { useState } from 'react';
import { 
  Layers, 
  X, 
  Plus, 
  ShieldAlert, 
  ShieldCheck,
  ArrowLeft, 
  Info, 
  Calendar, 
  FileText,
  CheckCircle2,
  ExternalLink,
  DollarSign,
  Building2,
  Award
} from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useApp } from '../context/AppContext';
import { PLANS } from '../data/plans';
import { TermTooltip } from '../components/TermTooltip';
import { AdministrativeSourceReview } from '../components/AdministrativeSourceReview';

export function ComparatorPage() {
  const { navigate } = useRouter();
  const { comparePlanIds, removePlanFromCompare, addPlanToCompare, clearComparison } = useApp();
  const [selectedToAdd, setSelectedToAdd] = useState<string>('');

  const selectedPlans = PLANS.filter((p) => comparePlanIds.includes(p.id));
  const availablePlansToAdd = PLANS.filter((p) => !comparePlanIds.includes(p.id));

  const handleAddPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedToAdd) return;
    addPlanToCompare(selectedToAdd);
    setSelectedToAdd('');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
              <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
              <span>/</span>
              <span className="text-slate-800 font-medium">Comparador Oficial BMI</span>
            </nav>
            <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
              Comparador Oficial de Deducibles y Red Médica BMI
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Análisis comparativo técnico basado en cotizadores y fichas de ayuda de ventas vigentes de BMI Ecuador.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/explorar"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Ver los 7 planes</span>
            </Link>

            {comparePlanIds.length > 0 && (
              <button
                type="button"
                onClick={clearComparison}
                className="px-3 py-2 text-xs font-semibold text-rose-700 hover:text-rose-800 hover:bg-rose-50 border border-rose-200 rounded-lg transition-colors"
              >
                Limpiar tabla
              </button>
            )}
          </div>
        </div>

        {/* Certified Agent & Source Rigor Notice */}
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-emerald-900">
              Datos verificados por agente certificado BMI Ecuador
            </p>
            <p className="text-emerald-800 leading-relaxed text-[11px]">
              Los valores de deducibles, alcance de red y notas de copago diferenciado se apegan a los condicionados y fichas técnicas oficiales. <em>"No especificado en la fuente consultada"</em> se indica cuando el documento oficial no desglosa una cláusula particular.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4 text-[11px]">
              <a
                href="https://cotizadorbmi.com.ec/comparar/nacional"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-900 underline inline-flex items-center gap-1"
              >
                <span>Comparador oficial BMI Nacional</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-emerald-400">·</span>
              <a
                href="https://cotizadorbmi.com.ec/comparar/internacional"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-900 underline inline-flex items-center gap-1"
              >
                <span>Comparador oficial BMI Internacional</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Add Plan Toolbar if < 3 */}
        {selectedPlans.length < 3 && availablePlansToAdd.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Plus className="w-4 h-4 text-[#00A3C4]" />
              <span>Puedes comparar hasta 3 planes (actualmente {selectedPlans.length} seleccionados):</span>
            </div>

            <form onSubmit={handleAddPlan} className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedToAdd}
                onChange={(e) => setSelectedToAdd(e.target.value)}
                className="px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:border-[#00A3C4] outline-none bg-white w-full sm:w-64"
              >
                <option value="">Selecciona un plan para añadir...</option>
                {availablePlansToAdd.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.scopeTag})
                  </option>
                ))}
              </select>
              <button
                type="submit"
                disabled={!selectedToAdd}
                className="px-4 py-1.5 bg-[#0A192F] text-white text-xs font-semibold rounded-lg hover:bg-[#112240] disabled:bg-slate-300 transition-colors whitespace-nowrap"
              >
                Añadir al comparador
              </button>
            </form>
          </div>
        )}

        {/* Comparison Table */}
        {selectedPlans.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-600 space-y-4">
            <Layers className="w-12 h-12 text-slate-400 mx-auto" />
            <h2 className="text-lg font-bold text-slate-800">
              No tienes planes en el comparador actualmente
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Visita el explorador de los 7 planes para seleccionar las alternativas que deseas contrastar en paralelo.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Link
                to="/explorar"
                className="px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded-lg hover:bg-[#112240]"
              >
                Explorar catálogo de planes
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-4 sm:p-5 w-1/4 min-w-[220px] text-slate-700 font-bold uppercase tracking-wider text-[11px]">
                      Parámetro Oficial
                    </th>
                    {selectedPlans.map((plan) => (
                      <th key={plan.id} className="p-4 sm:p-5 w-1/4 min-w-[260px] border-l border-slate-200 align-top">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] uppercase font-bold text-[#008B9E] block mb-1">
                              {plan.categoryTag}
                            </span>
                            <span className="text-base font-bold text-[#0A192F] block">
                              {plan.name}
                            </span>
                            <span className="text-slate-500 text-[11px] block mt-0.5">
                              {plan.scopeTag}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removePlanFromCompare(plan.id)}
                            className="text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                            title="Quitar este plan"
                            aria-label={`Quitar ${plan.name} de la tabla`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="mt-3">
                          <Link
                            to={`/planes/${plan.slug}`}
                            className="text-[11px] font-semibold text-[#00A3C4] hover:underline"
                          >
                            Ver ficha individual y red →
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  
                  {/* Status row */}
                  <tr className="bg-emerald-50/40">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      Estado documental oficial
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 font-semibold text-emerald-800">
                        {p.status}
                      </td>
                    ))}
                  </tr>

                  {/* 1. DEDUCIBLE (Opciones publicadas) */}
                  <tr className="bg-slate-50/70">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4 text-[#00A3C4]" />
                        <span>Deducible (Opciones publicadas)</span>
                      </div>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200">
                        <div className="font-bold text-slate-900 font-mono text-xs mb-1">
                          {p.deductibleStructure.headline}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {p.deductibleStructure.options.map((opt) => (
                            <span key={opt.amount} className="bg-white border border-slate-200 px-2 py-0.5 rounded font-mono text-[11px] font-semibold text-slate-800">
                              {opt.label}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* 2. CÓMO SE APLICA EL DEDUCIBLE */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      <TermTooltip term="deducible">Cómo se aplica el deducible</TermTooltip>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-600 leading-relaxed text-[11px]">
                        <span className="font-semibold text-slate-900 block mb-1">
                          {p.deductibleStructure.frequency}
                        </span>
                        <p>{p.deductibleStructure.howItApplies || 'No especificado en la fuente consultada'}</p>
                      </td>
                    ))}
                  </tr>

                  {/* 3. RED NACIONAL */}
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#00A3C4]" />
                        <TermTooltip term="red">Red médica nacional</TermTooltip>
                      </div>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                        {p.networkDetails.nationalScope || 'No especificado en la fuente consultada'}
                      </td>
                    ))}
                  </tr>

                  {/* 4. RED INTERNACIONAL */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      Red médica internacional
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                        {p.networkDetails.internationalScope || 'No especificado en la fuente consultada'}
                      </td>
                    ))}
                  </tr>

                  {/* 5. LIBRE ELECCIÓN / REEMBOLSO */}
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      Libre elección / Reembolso
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                        {p.networkDetails.freeChoiceReimbursement || 'No especificado en la fuente consultada'}
                      </td>
                    ))}
                  </tr>

                  {/* 6. COPAGO EN RED */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      <TermTooltip term="copago">Copago en red</TermTooltip>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                        {p.networkDetails.inNetworkCopay || 'No especificado en la fuente consultada'}
                      </td>
                    ))}
                  </tr>

                  {/* 7. EXONERACIONES DE DEDUCIBLE */}
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-slate-900">
                      Exoneraciones de deducible
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                        {p.networkDetails.exonerations || 'No especificado en la fuente consultada'}
                      </td>
                    ))}
                  </tr>

                  {/* Límite Máximo */}
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      <TermTooltip term="limite">Límite máximo / Suma asegurada</TermTooltip>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-600 leading-relaxed text-[11px]">
                        {p.dataSheet.limiteMaximo}
                      </td>
                    ))}
                  </tr>

                  {/* Carencias */}
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      <TermTooltip term="carencia">Periodos de carencia</TermTooltip>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-600 leading-relaxed text-[11px]">
                        {p.dataSheet.carencias}
                      </td>
                    ))}
                  </tr>

                  {/* Exclusiones */}
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      <TermTooltip term="exclusion">Exclusiones principales</TermTooltip>
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-600 leading-relaxed text-[11px]">
                        {p.dataSheet.exclusiones}
                      </td>
                    ))}
                  </tr>

                  {/* Fuente oficial y auditoría */}
                  <tr className="bg-slate-50/80">
                    <td className="p-4 sm:p-5 font-semibold text-slate-800">
                      Fuente oficial consultada
                    </td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 sm:p-5 border-l border-slate-200 text-slate-600 text-[11px]">
                        <div className="font-semibold text-slate-800">{p.officialSource}</div>
                        <div className="font-mono text-slate-500 mt-1">{p.reviewDate}</div>
                        {p.deductibleStructure.sourceDocUrl && (
                          <a
                            href={p.deductibleStructure.sourceDocUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#00A3C4] hover:underline inline-flex items-center gap-1 mt-1 font-semibold"
                          >
                            <span>Ver cotizador oficial</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </td>
                    ))}
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Table Footer Warning */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>
                <strong>Aviso de suscripción:</strong> Aplican el condicionado general/particular, exclusiones de póliza, aprobación médica de BMI y disponibilidad del prestador. No constituye promesa de cobertura ni reembolso automático.
              </span>
              <a
                href="https://www.bmicos.com/ecuador/servicios-al-asegurado/red-medica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A3C4] hover:underline inline-flex items-center gap-1 font-semibold whitespace-nowrap"
              >
                <span>Directorio Médico Oficial BMI</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Administrative Source Review Panel */}
        <AdministrativeSourceReview />

      </div>
    </div>
  );
}
