import React, { useState, useMemo } from 'react';
import { Search, Filter, ShieldCheck, ArrowRight, Layers, Check, ExternalLink, ShieldAlert, DollarSign, Building2 } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useApp } from '../context/AppContext';
import { PLANS } from '../data/plans';
import { AdministrativeSourceReview } from '../components/AdministrativeSourceReview';

export function ExplorerPage() {
  const { navigate } = useRouter();
  const { comparePlanIds, addPlanToCompare, removePlanFromCompare, isPlanInCompare } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [scopeFilter, setScopeFilter] = useState<'todos' | 'Nacional' | 'Internacional' | 'Mixto / Por confirmar'>('todos');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const filteredPlans = useMemo(() => {
    return PLANS.filter((plan) => {
      const matchesScope = scopeFilter === 'todos' || plan.scopeTag === scopeFilter;
      const matchesSearch =
        plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.categoryTag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.deductibleStructure.headline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesScope && matchesSearch;
    });
  }, [searchQuery, scopeFilter]);

  const handleToggleCompare = (planId: string) => {
    if (isPlanInCompare(planId)) {
      removePlanFromCompare(planId);
      setFeedbackMessage(null);
    } else {
      const added = addPlanToCompare(planId);
      if (!added) {
        setFeedbackMessage('Ya has seleccionado 3 planes para comparar (límite máximo). Quita uno antes de añadir otro.');
        setTimeout(() => setFeedbackMessage(null), 4000);
      } else {
        setFeedbackMessage(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Breadcrumbs & Title */}
        <div>
          <nav className="text-xs text-slate-500 mb-2 flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Catálogo de Planes BMI</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Portafolio Oficial BMI Ecuador · Agente Certificado</span>
              </div>
              <h1 className="text-3xl font-extrabold text-[#0A192F] tracking-tight">
                Catálogo Oficial de Salud BMI Ecuador
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Deducibles publicados, alcance territorial y red médica validados contra las fichas de ventas y cotizadores de BMI Ecuador.
              </p>
            </div>

            {/* Quick compare bar badge if plans selected */}
            {comparePlanIds.length > 0 && (
              <div className="bg-white border border-[#00A3C4] rounded-xl p-3 shadow-sm flex items-center gap-3 shrink-0">
                <Layers className="w-5 h-5 text-[#00A3C4]" />
                <div className="text-xs">
                  <span className="font-semibold text-slate-900">
                    {comparePlanIds.length} de 3 planes en comparador
                  </span>
                  <p className="text-slate-500 text-[11px]">Listos para análisis en paralelo</p>
                </div>
                <Link
                  to="/comparar"
                  className="px-3 py-1.5 bg-[#0A192F] text-white text-xs font-semibold rounded-lg hover:bg-[#112240] transition-colors"
                >
                  Comparar ahora
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Official Data Source Audit Banner */}
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-emerald-900">
              Condiciones de venta y deducibles validados documentalmente
            </p>
            <p className="text-emerald-800 leading-relaxed text-[11px]">
              Los 7 planes cuentan con sus montos de deducible oficiales y alcance de red extraídos del comparador oficial BMI (<a href="https://cotizadorbmi.com.ec/comparar/nacional" target="_blank" rel="noopener noreferrer" className="underline font-semibold">nacional</a> e <a href="https://cotizadorbmi.com.ec/comparar/internacional" target="_blank" rel="noopener noreferrer" className="underline font-semibold">internacional</a>) y fichas de ayuda de ventas vigentes. El directorio médico descargable de referencia data de junio de 2024, por lo que se recomienda confirmar prestadores con BMI antes de agendar.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por plan, deducible (ej. 150, 250, 500, GMM)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-xs sm:text-sm focus:border-[#00A3C4] focus:ring-1 focus:ring-[#00A3C4] outline-none"
              />
            </div>

            {/* Scope Filter Segmented Buttons */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-1.5 justify-start md:justify-end">
              <span className="text-xs text-slate-500 mr-1 hidden sm:inline">Alcance:</span>
              {(['todos', 'Nacional', 'Internacional', 'Mixto / Por confirmar'] as const).map((scope) => (
                <button
                  key={scope}
                  type="button"
                  onClick={() => setScopeFilter(scope)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    scopeFilter === scope
                      ? 'bg-[#0A192F] text-white font-semibold'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {scope === 'todos' ? 'Todos los planes (7)' : scope}
                </button>
              ))}
            </div>

          </div>

          {feedbackMessage && (
            <div className="p-2.5 bg-rose-50 border border-rose-200 text-xs text-rose-800 rounded-lg flex items-center justify-between">
              <span>{feedbackMessage}</span>
              <button
                type="button"
                onClick={() => setFeedbackMessage(null)}
                className="text-rose-600 hover:text-rose-900 font-bold"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Plans Grid */}
        {filteredPlans.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center text-slate-500">
            <p className="text-base font-semibold text-slate-800">No se encontraron planes con esos criterios.</p>
            <p className="text-xs mt-1">Prueba limpiando la búsqueda o cambiando el filtro de alcance geográfico.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setScopeFilter('todos');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-[#0A192F] text-white rounded-lg hover:bg-[#112240]"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlans.map((plan) => {
              const inCompare = isPlanInCompare(plan.id);

              return (
                <div
                  key={plan.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-6">
                    {/* Unboxed metadata line */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-slate-700">{plan.categoryTag}</span>
                      <span className="font-mono text-[11px] text-[#008B9E] font-medium bg-cyan-50 px-2 py-0.5 rounded">
                        {plan.scopeTag}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#0A192F] mb-1">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-slate-500 mb-4 font-medium">
                      {plan.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {plan.description}
                    </p>

                    {/* Official Verified Deductibles and Network Strip */}
                    <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200/80 text-xs space-y-2 mb-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-600 text-[11px] font-semibold flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[#00A3C4]" />
                          Deducibles oficiales:
                        </span>
                        <span className="text-[11px] font-bold text-[#0A192F] text-right font-mono">
                          {plan.deductibleStructure.options.map(o => o.label).join(', ')}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200/60">
                        <span className="text-slate-600 text-[11px] font-semibold flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-[#00A3C4]" />
                          Red médica:
                        </span>
                        <span className="text-[11px] text-slate-700 text-right">
                          {plan.scopeTag === 'Nacional' ? 'Ecuador + Colombia' : 'Global / EE.UU. / Colombia'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleCompare(plan.id)}
                      className={`text-xs font-semibold py-2 px-3 rounded-lg border transition-all ${
                        inCompare
                          ? 'border-[#00A3C4] text-[#008B9E] bg-cyan-50 hover:bg-cyan-100/50'
                          : 'border-slate-300 text-slate-700 hover:border-slate-400 bg-white'
                      }`}
                    >
                      {inCompare ? '✓ En comparador' : '+ Añadir a comparar'}
                    </button>

                    <Link
                      to={`/planes/${plan.slug}`}
                      className="text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#112240] py-2 px-3.5 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Ver ficha y red</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Administrative Source Review Panel */}
        <AdministrativeSourceReview />

      </div>
    </div>
  );
}
