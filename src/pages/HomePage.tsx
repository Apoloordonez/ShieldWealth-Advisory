import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  SlidersHorizontal, 
  Lock, 
  FileCheck2, 
  Check, 
  HelpCircle, 
  Sparkles,
  Users,
  User,
  Globe2,
  FileQuestion,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useApp } from '../context/AppContext';
import { PLANS } from '../data/plans';
import { TermTooltip } from '../components/TermTooltip';

export function HomePage() {
  const { navigate } = useRouter();
  const { setAnswer, addPlanToCompare, isPlanInCompare } = useApp();

  const handleProfileShortcut = (targetValue: 'individual' | 'familia', scopeValue?: 'nacional' | 'internacional' | 'no-se') => {
    if (targetValue) setAnswer('target', targetValue);
    if (scopeValue) setAnswer('scope', scopeValue);
    navigate('/cuestionario');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* 1. Hero Section */}
      <section className="relative bg-[#0A192F] text-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        {/* Subtle geometric background accents matching brand tone */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00A3C4] blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-cyan-700 blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#00A3C4]">
                <span>Orientación Independiente en Ecuador</span>
                <span aria-hidden="true">·</span>
                <span>Portafolio BMI</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Tu salud, tus prioridades, tu decisión.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Una experiencia digital autogestionada para comprender las alternativas médicas de BMI en Ecuador. Analiza deducibles, redes y alcances a tu propio ritmo, con total privacidad y sin presiones comerciales.
              </p>

              {/* Boundary advisory note */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 text-xs text-slate-300 max-w-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00A3C4] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Agente certificado BMI Ecuador:</strong> Autorizado para presentar el portafolio de productos BMI respetando sus documentos y condiciones vigentes. Las tarifas finales, deducibles aplicables y aceptación de asegurabilidad se rigen por la suscripción oficial de BMI.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/cuestionario"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#00A3C4] hover:bg-[#008B9E] rounded-xl shadow-lg transition-all focus:ring-2 focus:ring-[#00A3C4] focus:ring-offset-2 focus:ring-offset-[#0A192F]"
                >
                  <span>Empezar mi orientación</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/explorar"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-800 hover:text-white rounded-xl border border-slate-700 transition-colors"
                >
                  <span>Explorar los 7 planes</span>
                </Link>
              </div>

              {/* Privacy highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#00A3C4]" />
                  Sin solicitud de historiales clínicos
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#00A3C4]" />
                  Exploración 100% anónima
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#00A3C4]" />
                  Sin llamadas comerciales forzadas
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Orientation Card Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl border border-slate-100">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-semibold text-[#00A3C4] uppercase tracking-wider block">
                      Guía Rápida
                    </span>
                    <h2 className="text-lg font-bold text-[#0A192F]">
                      ¿Por dónde comenzar?
                    </h2>
                  </div>
                  <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">
                    7 Planes
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                  Elige una categoría de exploración para iniciar con preguntas contextualizadas a tu situación:
                </p>

                <div className="mt-5 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleProfileShortcut('individual', 'nacional')}
                    className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#00A3C4] hover:bg-cyan-50/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-[#00A3C4]/10 text-slate-700 group-hover:text-[#008B9E]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Protección Individual</p>
                        <p className="text-xs text-slate-500">Para coberturas personales en Ecuador</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A3C4] transition-colors" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleProfileShortcut('familia', 'nacional')}
                    className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#00A3C4] hover:bg-cyan-50/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-[#00A3C4]/10 text-slate-700 group-hover:text-[#008B9E]">
                        <Users className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Grupo Familiar</p>
                        <p className="text-xs text-slate-500">Para titular, cónyuge y dependientes</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A3C4] transition-colors" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleProfileShortcut('individual', 'internacional')}
                    className="w-full text-left p-3.5 rounded-xl border border-slate-200 hover:border-[#00A3C4] hover:bg-cyan-50/40 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-[#00A3C4]/10 text-slate-700 group-hover:text-[#008B9E]">
                        <Globe2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Salud Internacional</p>
                        <p className="text-xs text-slate-500">Clínicas en el exterior y libre elección</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A3C4] transition-colors" />
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/cuestionario')}
                    className="w-full text-left p-3.5 rounded-xl border border-dashed border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-600">
                        <FileQuestion className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Aún no lo sé / Quiero orientarme</p>
                        <p className="text-xs text-slate-500">Hacer las 6 preguntas completas</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 text-center">
                  Estas opciones solo adaptan el recorrido. No determinan elegibilidad contractual.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Cómo funciona Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-bold text-[#00A3C4] uppercase tracking-wider block mb-2">
              Proceso Transparente
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A192F]">
              Cómo funciona la experiencia de orientación
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Diseñamos un método claro en 4 pasos para que descubras qué plan se ajusta a tus necesidades sin intermediación invasiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-bold font-mono text-[#00A3C4] mb-3 block">01</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Responde preguntas generales
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sin formularios de contacto, diagnósticos ni historiales médicos. 6 preguntas orientativas sobre prioridades, presupuesto y alcance deseado.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500">
                Tiempo estimado: 2 minutos
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-bold font-mono text-[#00A3C4] mb-3 block">02</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Revisa coincidencias documentadas
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conoce las opciones disponibles del catálogo de BMI. Identifica qué datos están confirmados y qué información oficial está en proceso de validación.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500">
                Criterios transparentes y sin sesgo
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-bold font-mono text-[#00A3C4] mb-3 block">03</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Compara hasta 3 planes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Coloca lado a lado los planes elegidos en una tabla interactiva para evaluar deducibles, copagos, carencias y redes médicas.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500">
                Campos no verificados señalados con rigor
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-bold font-mono text-[#00A3C4] mb-3 block">04</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Toma el control de tu decisión
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conoce qué preguntas hacerle a la aseguradora antes de firmar cualquier contrato. Tú decides si solicitar asesoría acreditada o continuar explorando.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] text-slate-500">
                Sin llamadas ni mensajes de presión
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Link
              to="/como-funciona"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A3C4] hover:text-[#008B9E] transition-colors"
            >
              <span>Aprende más sobre el proceso y consulta el glosario de términos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Explorador de los 7 Planes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#00A3C4] uppercase tracking-wider block mb-1">
                Catálogo Referencial
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A192F]">
                Los 7 Planes en Exploración
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl">
                Opciones asociadas a soluciones médicas de BMI en Ecuador. Cada ficha mantiene campos estructurados y estado de revisión formal.
              </p>
            </div>
            <Link
              to="/explorar"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A192F] hover:text-[#00A3C4] transition-colors shrink-0"
            >
              <span>Ver catálogo completo con filtros</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANS.map((plan) => {
              const inCompare = isPlanInCompare(plan.id);
              return (
                <div
                  key={plan.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between p-6"
                >
                  <div>
                    {/* Unboxed metadata line */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-slate-700">{plan.categoryTag}</span>
                      <span aria-hidden="true">·</span>
                      <span>{plan.scopeTag}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A192F] mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">
                      {plan.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {plan.description}
                    </p>

                    {/* Official verified deductible and network notice */}
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 text-[11px] text-slate-600 space-y-1.5 mb-4">
                      <div className="flex items-center justify-between text-slate-700 font-medium">
                        <span>Fuente técnica:</span>
                        <span className="text-emerald-700 font-bold">Ficha Oficial BMI</span>
                      </div>
                      <div className="flex items-start justify-between text-slate-600">
                        <span className="font-semibold text-slate-800">Deducibles:</span>
                        <span className="font-mono text-slate-900 text-right">{plan.deductibleStructure.options.map(o => o.label).join(', ')}</span>
                      </div>
                      <div className="flex items-start justify-between text-slate-600">
                        <span className="font-semibold text-slate-800">Red médica:</span>
                        <span className="text-slate-700 text-right">{plan.scopeTag === 'Nacional' ? 'Ecuador + Colombia' : 'EE.UU. / Colombia / Global'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        if (inCompare) {
                          // Already in compare
                          navigate('/comparar');
                        } else {
                          addPlanToCompare(plan.id);
                        }
                      }}
                      className={`text-xs font-medium py-1.5 px-3 rounded-lg border transition-colors ${
                        inCompare
                          ? 'border-[#00A3C4] text-[#008B9E] bg-cyan-50'
                          : 'border-slate-300 text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {inCompare ? '✓ En comparador' : '+ Añadir a comparar'}
                    </button>

                    <Link
                      to={`/planes/${plan.slug}`}
                      className="text-xs font-semibold text-[#0A192F] hover:text-[#00A3C4] flex items-center gap-1 transition-colors"
                    >
                      <span>Ver ficha</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Privacidad y Control Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#00A3C4] uppercase tracking-wider block">
                Privacidad como Principio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A192F]">
                Tu tranquilidad y datos están protegidos
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                A diferencia de portales que exigen teléfono o cédula antes de mostrar cualquier información, ShieldWealth está concebido para la exploración libre y respetuosa:
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-cyan-50 text-[#00A3C4] mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-slate-900 block">
                      Sin datos sensibles de salud
                    </strong>
                    <span className="text-xs text-slate-600">
                      Nunca solicitamos diagnósticos, enfermedades previas, tratamientos actuales ni historias clínicas en el cuestionario digital.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-cyan-50 text-[#00A3C4] mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-slate-900 block">
                      Sin venta ni reenvío de contactos
                    </strong>
                    <span className="text-xs text-slate-600">
                      Tus respuestas se almacenan exclusivamente en la memoria de tu navegador durante tu sesión y no se envían a bases comerciales de terceros.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-cyan-50 text-[#00A3C4] mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-semibold text-slate-900 block">
                      Sin spam telefónico ni mensajes automatizados
                    </strong>
                    <span className="text-xs text-slate-600">
                      No conectamos bots de WhatsApp ni realizamos llamadas de prospección. Eres tú quien decide cuándo y cómo solicitar asesoría.
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/privacidad"
                  className="text-xs font-semibold text-[#00A3C4] hover:underline inline-flex items-center gap-1"
                >
                  <span>Consultar borrador de Política de Privacidad (LOPDP Ecuador)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Card: Education on Cost Terms */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#0A192F] mb-3">
                Conceptos clave antes de elegir un seguro de salud
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                En Ecuador, los malentendidos más frecuentes al contratar una póliza se deben a términos no explicados. En ShieldWealth aclaramos cada elemento:
              </p>

              <div className="space-y-4 text-xs">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center justify-between">
                    <span>1. <TermTooltip term="deducible">Deducible anual</TermTooltip></span>
                    <span className="text-slate-400 font-mono text-[11px]">Gasto propio</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Monto que tú cubres antes de que la aseguradora pague. A deducible más alto, la cuota mensual suele ser más baja.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center justify-between">
                    <span>2. <TermTooltip term="copago">Copago o coaseguro</TermTooltip></span>
                    <span className="text-slate-400 font-mono text-[11px]">Compartido</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Porcentaje que pagas por cada consulta o examen (ejemplo habitual: tú 20%, la aseguradora 80%).
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center justify-between">
                    <span>3. <TermTooltip term="carencia">Periodo de carencia</TermTooltip></span>
                    <span className="text-slate-400 font-mono text-[11px]">Tiempo de espera</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Meses que deben pasar desde la firma antes de poder usar coberturas como maternidad o cirugías electivas.
                  </p>
                </div>
              </div>

              <div className="mt-5 text-right">
                <Link
                  to="/como-funciona"
                  className="text-xs font-semibold text-[#0A192F] hover:text-[#00A3C4] transition-colors"
                >
                  Ver el glosario completo →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Confianza y Límites Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto text-[#0A192F] shadow-sm border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-[#00A3C4]" />
          </div>
          <h2 className="text-2xl font-bold text-[#0A192F]">
            Límites del servicio y transparencia institucional
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
            ShieldWealth Advisory no es una compañía aseguradora ni emite pólizas de manera directa. La relación comercial formal con BMI Ecuador y las credenciales de intermediación están sujetas a validación documental. Toda cotización definitiva, evaluación de preexistencias y emisión se rige por las políticas oficiales de suscripción de la aseguradora.
          </p>
          <div className="pt-2">
            <Link
              to="/sobre-shieldwealth"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A3C4] hover:underline"
            >
              <span>Leer declaración de independencia y alcance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CTA de Cierre */}
      <section className="py-20 bg-[#0A192F] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Comienza a explorar tus opciones de salud con claridad
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Sin formularios invasivos, sin dar tu teléfono y con total libertad para comparar los planes de BMI a tu ritmo.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cuestionario"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-[#00A3C4] hover:bg-[#008B9E] rounded-xl shadow-lg transition-all"
            >
              <span>Iniciar mi orientación autogestionada</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Consultar el proceso</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
