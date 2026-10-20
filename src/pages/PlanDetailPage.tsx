import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Layers, 
  Check, 
  HelpCircle, 
  ShieldAlert, 
  ShieldCheck,
  FileText, 
  Calendar, 
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Building2,
  DollarSign
} from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useApp } from '../context/AppContext';
import { PLANS } from '../data/plans';
import { TermTooltip } from '../components/TermTooltip';
import { DeductiblesSection } from '../components/DeductiblesSection';
import { MedicalNetworkSection } from '../components/MedicalNetworkSection';
import { AdministrativeSourceReview } from '../components/AdministrativeSourceReview';

interface PlanDetailPageProps {
  slug: string;
}

export function PlanDetailPage({ slug }: PlanDetailPageProps) {
  const { navigate } = useRouter();
  const { addPlanToCompare, removePlanFromCompare, isPlanInCompare, openDemoModal } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'deducible' | 'red' | 'ficha'>('deducible');

  const plan = PLANS.find((p) => p.slug === slug);

  if (!plan) {
    return (
      <div className="min-h-screen bg-slate-50 py-16 px-4 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Plan no encontrado</h1>
        <p className="text-sm text-slate-500 mt-2">La ruta solicitada no corresponde a ninguno de los 7 planes registrados.</p>
        <Link
          to="/explorar"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al explorador</span>
        </Link>
      </div>
    );
  }

  const inCompare = isPlanInCompare(plan.id);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
          <nav className="flex items-center gap-2">
            <Link to="/" className="hover:text-[#00A3C4]">Inicio</Link>
            <span>/</span>
            <Link to="/explorar" className="hover:text-[#00A3C4]">Explorar Planes</Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{plan.name}</span>
          </nav>

          <Link
            to="/explorar"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver al listado</span>
          </Link>
        </div>

        {/* Plan Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                <span className="font-semibold text-slate-700">{plan.categoryTag}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-[#008B9E] font-medium">{plan.scopeTag}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-700 font-semibold">Producto Oficial BMI</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A192F] tracking-tight">
                {plan.name}
              </h1>
              <p className="text-sm text-slate-600 mt-2 font-medium">
                {plan.subtitle}
              </p>
            </div>

            {/* Comparison and actions */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (inCompare) {
                    removePlanFromCompare(plan.id);
                  } else {
                    addPlanToCompare(plan.id);
                  }
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                  inCompare
                    ? 'border-[#00A3C4] text-[#008B9E] bg-cyan-50 hover:bg-cyan-100'
                    : 'border-slate-300 text-slate-700 hover:border-slate-400 bg-white'
                }`}
              >
                {inCompare ? '✓ Añadido al comparador' : '+ Añadir para comparar'}
              </button>

              <button
                type="button"
                onClick={() => openDemoModal(plan.name)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#112240] rounded-lg transition-colors"
              >
                Solicitar orientación (Demo)
              </button>
            </div>
          </div>

          {/* Validation & Certified Agent Status Banner */}
          <div className="mt-6 p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl text-xs text-emerald-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-emerald-900">
                Información técnica oficial revisada por agente certificado BMI Ecuador
              </p>
              <p className="text-emerald-800 leading-relaxed text-[11px]">
                Los deducibles, alcance territorial y condiciones de copago corresponden a las fichas de ventas y cotizadores oficiales de BMI Ecuador. Se recuerda que la aceptación de asegurabilidad, condicionados definitivos y tarifas finales están sujetas a cotización oficial por edad y suscripción de BMI.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3 text-[11px]">
                <a
                  href={plan.deductibleStructure.sourceDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-900 underline inline-flex items-center gap-1"
                >
                  <span>Ver en comparador oficial BMI</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-emerald-400">·</span>
                <span className="text-emerald-800">
                  Directorio médico referencial: junio 2024 (validar vigencia antes de agendar)
                </span>
              </div>
            </div>
          </div>

          {/* Descriptive text */}
          <div className="mt-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-base font-bold text-[#0A192F]">
              Descripción estructural del plan
            </h2>
            <p>{plan.description}</p>
            <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-lg border border-slate-100">
              {plan.structuralTarget}
            </p>
          </div>
        </div>

        {/* SECTION: DEDUCIBLE Y RED MÉDICA OFICIAL */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-[#00A3C4] uppercase tracking-wider block mb-1">
              Condiciones Contractuales Clave
            </span>
            <h2 className="text-2xl font-bold text-[#0A192F]">
              Deducible y Red Médica Oficial de {plan.name}
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl">
              Información validada contra las fichas de ayuda de ventas y el comparador oficial de BMI Ecuador.
            </p>

            {/* Sub-navigation tabs */}
            <div className="mt-5 flex items-center gap-2 border-b border-slate-100 pb-1">
              <button
                type="button"
                onClick={() => setActiveTab('deducible')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'deducible'
                    ? 'bg-[#0A192F] text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Opciones de Deducible ({plan.deductibleStructure.options.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('red')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'red'
                    ? 'bg-[#0A192F] text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Red de Prestadores Médicos</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('ficha')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'ficha'
                    ? 'bg-[#0A192F] text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Ficha Técnica Completa</span>
              </button>
            </div>
          </div>

          {/* TAB 1: Deducibles */}
          {activeTab === 'deducible' && (
            <div className="space-y-6">
              <DeductiblesSection planName={plan.name} deductible={plan.deductibleStructure} />
            </div>
          )}

          {/* TAB 2: Red Médica */}
          {activeTab === 'red' && (
            <div className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <h3 className="font-bold text-[#0A192F] text-sm">
                  Alcance Territorial y Modalidad de Red para {plan.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="font-semibold text-slate-900 block">Red Nacional:</span>
                    <p className="text-slate-600">{plan.networkDetails.nationalScope}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Red Internacional:</span>
                    <p className="text-slate-600">{plan.networkDetails.internationalScope}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Libre Elección / Reembolso:</span>
                    <p className="text-slate-600">{plan.networkDetails.freeChoiceReimbursement}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900 block">Copagos en Red:</span>
                    <p className="text-slate-600">{plan.networkDetails.inNetworkCopay}</p>
                  </div>
                </div>
              </div>

              {/* Filterable network table specifically for this plan */}
              <MedicalNetworkSection initialPlanSlug={plan.slug} showPlanFilter={false} />
            </div>
          )}

          {/* TAB 3: Ficha Técnica Estructurada */}
          {activeTab === 'ficha' && (
            <div className="space-y-6">
              <div className="divide-y divide-slate-100 text-xs">
                
                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Alcance territorial</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.alcanceGeografico}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Modalidad de cobertura</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.modalidad}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Red médica y prestadores</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.redMedica}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Deducibles aplicables</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.deducibles}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Copagos y coaseguros</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.copagos}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Periodos de carencia</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.carencias}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Exclusiones principales</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.exclusiones}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Elegibilidad y requisitos</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.elegibilidad} · {plan.dataSheet.requisitos}
                  </span>
                </div>

                <div className="py-3.5 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="font-semibold text-slate-700">Vigencia</span>
                  <span className="sm:col-span-2 text-slate-600 font-medium">
                    {plan.dataSheet.vigencia}
                  </span>
                </div>

              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-slate-500">
                <div>
                  <span className="font-semibold text-slate-700">Fuente oficial:</span> {plan.officialSource}
                </div>
                <div>
                  <span className="font-semibold text-slate-700">Revisión:</span> {plan.reviewDate} · {plan.version}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* FAQs for this plan */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-[#0A192F] mb-2">
            Preguntas Frecuentes sobre {plan.name}
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Aclaraciones técnicas sobre el deducible, copagos y uso de la red médica
          </p>

          <div className="space-y-3">
            {plan.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800"
                  >
                    <span>{faq.pregunta}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500 shrink-0 ml-2" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.respuesta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Administrative Source Review for Agent */}
        <AdministrativeSourceReview />

        {/* Navigation CTAs */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold">
              ¿Quieres contrastar {plan.name} con otros planes en la tabla?
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-lg">
              Compara lado a lado deducibles, cómo se aplican, red nacional, red internacional, libre elección, copagos y exoneraciones.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/comparar"
              className="px-4 py-2.5 text-xs font-semibold bg-white text-[#0A192F] hover:bg-slate-100 rounded-lg transition-colors"
            >
              Ir al comparador
            </Link>
            <Link
              to="/cuestionario"
              className="px-4 py-2.5 text-xs font-semibold bg-[#00A3C4] hover:bg-[#008B9E] text-white rounded-lg transition-colors"
            >
              Cuestionario autogestionado
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
