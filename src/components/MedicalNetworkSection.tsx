import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  MapPin, 
  Filter, 
  ExternalLink, 
  ShieldAlert, 
  AlertCircle, 
  CheckCircle2, 
  Search,
  FileText,
  BadgeInfo,
  Calendar
} from 'lucide-react';
import { NETWORK_PROVIDERS } from '../data/networkProviders';
import { NetworkProvider, ProviderCountry, ProviderServiceType, ProviderModality } from '../types';
import { PLANS } from '../data/plans';

interface MedicalNetworkSectionProps {
  initialPlanSlug?: string;
  showPlanFilter?: boolean;
}

export function MedicalNetworkSection({ 
  initialPlanSlug, 
  showPlanFilter = true 
}: MedicalNetworkSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlanSlug || 'all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string>('all');
  const [selectedModality, setSelectedModality] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract unique cities based on selected country
  const availableCities = useMemo(() => {
    const providers = selectedCountry === 'all'
      ? NETWORK_PROVIDERS
      : NETWORK_PROVIDERS.filter((p) => p.country === selectedCountry);
    return Array.from(new Set(providers.map((p) => p.city))).sort();
  }, [selectedCountry]);

  // Filtered providers list
  const filteredProviders = useMemo(() => {
    return NETWORK_PROVIDERS.filter((provider) => {
      const matchPlan = selectedPlan === 'all' || provider.appliesToPlans.includes(selectedPlan);
      const matchCountry = selectedCountry === 'all' || provider.country === selectedCountry;
      const matchCity = selectedCity === 'all' || provider.city === selectedCity;
      const matchService = selectedService === 'all' || provider.serviceType === selectedService;
      const matchModality = selectedModality === 'all' || provider.modality === selectedModality;
      const matchQuery = 
        !searchQuery || 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (provider.notes && provider.notes.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchPlan && matchCountry && matchCity && matchService && matchModality && matchQuery;
    });
  }, [selectedPlan, selectedCountry, selectedCity, selectedService, selectedModality, searchQuery]);

  const activePlanObj = initialPlanSlug ? PLANS.find(p => p.slug === initialPlanSlug) : null;

  return (
    <div className="space-y-6">
      
      {/* Official Directory Disclaimer Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-950">
            Aviso de Auditoría de Red Médica BMI (Junio 2024 vs. 2026)
          </p>
          <p className="text-amber-800 leading-relaxed">
            El directorio médico descargable oficial de referencia está fechado en <strong>junio de 2024</strong>. En ShieldWealth no lo presentamos como un directorio vigente de 2026 sin confirmación previa. <strong>Confirma disponibilidad, convenios activos y condiciones de copago con BMI antes de agendar</strong>.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
            <a
              href="https://www.bmicos.com/ecuador/servicios-al-asegurado/red-medica/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#008B9E] hover:underline"
            >
              <span>Consultar directorio médico oficial BMI</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            {activePlanObj && (
              <a
                href={activePlanObj.networkDetails.officialDocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-slate-700 hover:text-[#0A192F] hover:underline"
              >
                <span>Ver ficha oficial del plan ({activePlanObj.networkDetails.officialDocName})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
            <Filter className="w-4 h-4 text-[#00A3C4]" />
            <span>Filtrar Prestadores Verificados por Plan, Ubicación y Modalidad</span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            {filteredProviders.length} prestadores encontrados
          </span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar clínica, hospital o centro de salud..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:border-[#00A3C4] outline-none"
          />
        </div>

        {/* Dropdown Filters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          
          {/* Plan filter */}
          {showPlanFilter && (
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Plan BMI
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:border-[#00A3C4] outline-none"
              >
                <option value="all">Todos los 7 planes</option>
                {PLANS.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Country filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              País
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity('all');
              }}
              className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:border-[#00A3C4] outline-none"
            >
              <option value="all">Todos los países</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Colombia">Colombia (Red afiliada)</option>
              <option value="Estados Unidos">Estados Unidos</option>
              <option value="España / Internacional">España / Internacional (CUN)</option>
            </select>
          </div>

          {/* City filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Ciudad / Región
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:border-[#00A3C4] outline-none"
            >
              <option value="all">Todas las ciudades</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Service type filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Tipo de Servicio
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:border-[#00A3C4] outline-none"
            >
              <option value="all">Todos los servicios</option>
              <option value="Hospitalización">Hospitalización</option>
              <option value="Alta Complejidad">Alta Complejidad</option>
              <option value="Consulta ambulatoria">Consulta ambulatoria</option>
              <option value="Emergencia">Emergencia</option>
              <option value="Laboratorio e Imagen">Laboratorio e Imagen</option>
              <option value="Múltiples Servicios">Múltiples Servicios</option>
            </select>
          </div>

          {/* Modality filter */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Modalidad de Atención
            </label>
            <select
              value={selectedModality}
              onChange={(e) => setSelectedModality(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:border-[#00A3C4] outline-none"
            >
              <option value="all">Todas las modalidades</option>
              <option value="Red con crédito directo">Red con crédito directo</option>
              <option value="Copago diferenciado">Copago diferenciado</option>
              <option value="Reembolso / Libre elección">Reembolso / Libre elección</option>
              <option value="Beneficio sujeto a precertificación">Beneficio sujeto a precertificación</option>
            </select>
          </div>

        </div>

        {/* Clear Filters Button if any active */}
        {(selectedCountry !== 'all' || selectedCity !== 'all' || selectedService !== 'all' || selectedModality !== 'all' || searchQuery) && (
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => {
                setSelectedCountry('all');
                setSelectedCity('all');
                setSelectedService('all');
                setSelectedModality('all');
                setSearchQuery('');
                if (showPlanFilter) setSelectedPlan(initialPlanSlug || 'all');
              }}
              className="text-[11px] text-[#00A3C4] hover:underline font-semibold"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </div>

      {/* Providers Cards Grid */}
      {filteredProviders.length === 0 ? (
        <div className="p-8 bg-white border border-slate-200 rounded-xl text-center text-xs text-slate-500">
          <p className="font-semibold text-slate-800">No se encontraron prestadores con los filtros seleccionados.</p>
          <p className="mt-1">Intenta ajustando el país, la ciudad o la modalidad de atención.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProviders.map((provider) => {
            // Badges styling for modality
            const isDiferenciado = provider.modality === 'Copago diferenciado';
            const isPrecert = provider.modality === 'Beneficio sujeto a precertificación';
            const isCredito = provider.modality === 'Red con crédito directo';

            return (
              <div
                key={provider.id}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between text-xs space-y-3"
              >
                <div>
                  {/* Top unboxed metadata line */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#00A3C4]" />
                      {provider.city}, {provider.country}
                    </span>
                    <span className="font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded text-[10px]">
                      {provider.serviceType}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#0A192F] mb-1.5">
                    {provider.name}
                  </h4>

                  {/* Modality pill/tag */}
                  <div className="mb-2.5">
                    <span
                      className={`inline-block px-2.5 py-1 rounded text-[11px] font-semibold ${
                        isDiferenciado
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : isPrecert
                          ? 'bg-blue-50 text-blue-800 border border-blue-200'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {provider.modality}
                    </span>
                  </div>

                  {/* Provider notes */}
                  {provider.notes && (
                    <p className="text-slate-600 leading-relaxed text-xs mb-2">
                      {provider.notes}
                    </p>
                  )}

                  {/* Applies to which plans */}
                  <div className="text-[11px] text-slate-500 pt-1">
                    <span className="font-medium text-slate-700">Planes con convenio: </span>
                    {provider.appliesToPlans.map((slug) => {
                      const p = PLANS.find((item) => item.slug === slug);
                      return p ? (
                        <span key={slug} className="mr-1.5 text-slate-600 font-mono">
                          {p.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>

                {/* Audit and Verification Notice */}
                <div className="pt-3 border-t border-slate-100 space-y-1 text-[11px]">
                  <div className="text-slate-500 flex items-center justify-between">
                    <span><strong>Fuente:</strong> {provider.sourceDoc}</span>
                    <span className="text-slate-400 font-mono text-[10px]">Jun 2024</span>
                  </div>
                  {provider.verificationNotice && (
                    <p className="text-amber-800 italic bg-amber-50/60 p-1.5 rounded text-[10px] leading-tight">
                      {provider.verificationNotice}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Footer link to full official directory */}
      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>
          ¿Deseas buscar un médico especialista o centro específico en la nómina completa de BMI Ecuador?
        </span>
        <a
          href="https://www.bmicos.com/ecuador/servicios-al-asegurado/red-medica/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold rounded-lg text-xs whitespace-nowrap transition-colors"
        >
          <span>Directorio Médico Oficial BMI</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#00A3C4]" />
        </a>
      </div>

    </div>
  );
}
