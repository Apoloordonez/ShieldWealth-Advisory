import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  HelpCircle, 
  Check, 
  AlertTriangle, 
  Layers, 
  ShieldCheck, 
  Info,
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useApp } from '../context/AppContext';
import { QUESTIONS } from '../data/questions';
import { PLANS } from '../data/plans';
import { QuestionnaireAnswer } from '../types';

export function QuestionnairePage() {
  const { navigate } = useRouter();
  const { 
    answers, 
    setAnswer, 
    resetQuestionnaire, 
    addPlanToCompare, 
    isPlanInCompare, 
    removePlanFromCompare,
    openDemoModal 
  } = useApp();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showExplanationModal, setShowExplanationModal] = useState(false);
  const [isViewingResults, setIsViewingResults] = useState(() => {
    // If all essential questions have answers, user can land on results
    return Boolean(answers.target && answers.scope && answers.priority && answers.costParticipation && answers.decisionHelper);
  });

  const currentQuestion = QUESTIONS[currentStepIndex];
  const totalSteps = QUESTIONS.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  const currentSelectedValue = currentQuestion ? answers[currentQuestion.field as keyof QuestionnaireAnswer] : undefined;

  const handleSelectOption = (optionId: string) => {
    if (!currentQuestion) return;
    setAnswer(currentQuestion.field as keyof QuestionnaireAnswer, optionId as any);
  };

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsViewingResults(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleSkip = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsViewingResults(true);
    }
  };

  const handleReset = () => {
    resetQuestionnaire();
    setCurrentStepIndex(0);
    setIsViewingResults(false);
  };

  const handleEditQuestion = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
    setIsViewingResults(false);
  };

  // If viewing results, render the Educational Results screen
  if (isViewingResults) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-[#00A3C4] uppercase tracking-wider block">
                Resultados Educativos
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F] tracking-tight">
                Alternativas Exploratorias para tu Revisión
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Orientación pedagógica basada en tus preferencias declaradas. Sin rankings inventados ni asignaciones automáticas.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reiniciar cuestionario</span>
              </button>
            </div>
          </div>

          {/* Logic Transparency Disclosure: 3 Tiers */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-8 space-y-4">
            <div className="flex items-center gap-2.5 text-[#0A192F] font-bold text-base">
              <SlidersHorizontal className="w-5 h-5 text-[#00A3C4]" />
              <h2>Lógica de Orientación Transparente y Explicable</h2>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              En ShieldWealth Advisory no usamos algoritmos de "caja negra" ni fórmulas opacas. Nuestro motor de orientación aplica tres principios rigurosos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-mono font-bold text-[#00A3C4] block mb-1">A. Filtros Oficiales</span>
                <strong className="text-slate-900 block mb-1">Compatibilidad Documentada</strong>
                <p className="text-slate-600 leading-relaxed">
                  Solo se consideran variables validadas por la aseguradora. Al estar las fichas en proceso de validación oficial, no excluimos ningún plan de tu radar.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-mono font-bold text-[#00A3C4] block mb-1">B. Preferencias</span>
                <strong className="text-slate-900 block mb-1">Prioridades Declaradas</strong>
                <p className="text-slate-600 leading-relaxed">
                  Organizamos las alternativas según tu interés (cobertura local vs internacional, red médica o previsibilidad presupuestaria) sin sesgos comerciales.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-mono font-bold text-[#00A3C4] block mb-1">C. Revisión Humana</span>
                <strong className="text-slate-900 block mb-1">Asegurabilidad Oficial</strong>
                <p className="text-slate-600 leading-relaxed">
                  Ningún sistema digital puede ni debe determinar si una póliza te será aprobada. La suscripción médica y tarifaria final es potestad exclusiva de BMI.
                </p>
              </div>
            </div>
          </div>

          {/* Official Verification & Individual Underwriting Notice */}
          <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-5 text-xs text-emerald-950 mb-8 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-950 text-sm">
                Deducibles y alcances oficiales validados por agente certificado BMI
              </p>
              <p className="mt-1 leading-relaxed text-emerald-900">
                Los montos de deducible y opciones de red presentados a continuación corresponden a las fichas de ventas y cotizadores oficiales de BMI Ecuador. En estricto respeto a la ética profesional, <strong>no emitimos puntuaciones artificiales ni aseguramos aprobación médica sin suscripción formal</strong>.
              </p>
              <div className="mt-3 text-[11px] text-emerald-900 font-medium bg-emerald-100/60 p-2.5 rounded-lg">
                Consideraciones para tu decisión:
                <span className="block mt-0.5 text-emerald-800 font-normal">
                  • La prima final y aceptación del riesgo dependen de la cotización por edad y evaluación médica de BMI.
                  <br />• El directorio de prestadores de referencia data de junio de 2024; confirma convenios vigentes antes de agendar.
                  <br />• Selecciona hasta 3 planes para contrastar en detalle deducibles, copagos y exoneraciones.
                </span>
              </div>
            </div>
          </div>

          {/* Visitor's Declared Answers Summary */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-8">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h2 className="text-sm font-bold text-[#0A192F]">
                Resumen de tus Respuestas Declaradas
              </h2>
              <span className="text-[11px] text-slate-500">
                Puedes modificar cualquier respuesta haciendo clic en editar
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {QUESTIONS.map((q, idx) => {
                const answerVal = answers[q.field as keyof QuestionnaireAnswer];
                const matchedOption = q.options.find((opt) => opt.id === answerVal);

                return (
                  <div key={q.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                        Pregunta {q.id}
                      </span>
                      <p className="font-semibold text-slate-800 text-xs mb-1 line-clamp-1">{q.title}</p>
                      <p className="text-slate-600 text-xs">
                        {matchedOption ? matchedOption.label : <span className="text-slate-400 italic">Omitida / No indicada</span>}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/80 text-right">
                      <button
                        type="button"
                        onClick={() => handleEditQuestion(idx)}
                        className="text-[11px] font-semibold text-[#00A3C4] hover:underline"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* The 7 Plans presented objectively for exploration */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-[#0A192F]">
                  Los 7 Planes del Portafolio para Revisar
                </h2>
                <p className="text-xs text-slate-500">
                  Selecciona hasta 3 planes para contrastar en nuestra tabla comparativa estructural:
                </p>
              </div>

              <Link
                to="/comparar"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A192F] text-white text-xs font-semibold rounded-lg hover:bg-[#112240] transition-colors shrink-0"
              >
                <Layers className="w-3.5 h-3.5 text-[#00A3C4]" />
                <span>Ir al Comparador</span>
              </Link>
            </div>

            <div className="space-y-3">
              {PLANS.map((plan) => {
                const inCompare = isPlanInCompare(plan.id);

                return (
                  <div
                    key={plan.id}
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                        <span className="font-semibold text-slate-700">{plan.name}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[11px] text-[#008B9E]">{plan.scopeTag}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-700 text-[11px] font-semibold">Producto Oficial BMI</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {plan.description}
                      </p>
                      <div className="mt-2 text-[11px] text-slate-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span><strong>Deducibles:</strong> <span className="font-mono text-slate-800">{plan.deductibleStructure.options.map(o => o.label).join(', ')}</span></span>
                        <span><strong>Red:</strong> {plan.scopeTag === 'Nacional' ? 'Ecuador + Colombia' : 'EE.UU. / Colombia / Global'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => {
                          if (inCompare) {
                            removePlanFromCompare(plan.id);
                          } else {
                            addPlanToCompare(plan.id);
                          }
                        }}
                        className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                          inCompare
                            ? 'border-[#00A3C4] text-[#008B9E] bg-cyan-50'
                            : 'border-slate-300 text-slate-700 hover:border-slate-400 bg-white'
                        }`}
                      >
                        {inCompare ? '✓ En comparador' : '+ Añadir a comparar'}
                      </button>

                      <Link
                        to={`/planes/${plan.slug}`}
                        className="px-3 py-2 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors"
                      >
                        Ver ficha
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Advisory request section in Demo Mode */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00A3C4] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Orientación Profesional Acreditada</span>
              </div>
              <h3 className="text-xl font-bold">
                ¿Deseas conversar con un asesor cuando el canal esté formalmente activo?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Este formulario funciona en modo demostración para validar la experiencia de usuario y el respeto estricto a la privacidad de datos personales.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openDemoModal()}
              className="px-6 py-3 bg-[#00A3C4] hover:bg-[#008B9E] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-lg transition-colors whitespace-nowrap shrink-0"
            >
              Probar solicitud de asesoría (Demo)
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Active Questionnaire Flow
  return (
    <div className="min-h-screen bg-slate-50 py-12 text-slate-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Top Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-semibold text-slate-700">
              Paso {currentStepIndex + 1} de {totalSteps}
            </span>
            <span className="font-mono text-slate-600">
              {progressPercent}% completado
            </span>
          </div>
          {/* Progress bar */}
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00A3C4] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          {/* Question Title & Context Modal button */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] font-bold text-[#00A3C4] uppercase tracking-wider block mb-1">
                Orientación Autogestionada
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-[#0A192F] leading-snug">
                {currentQuestion.title}
              </h1>
            </div>

            <button
              type="button"
              onClick={() => setShowExplanationModal(!showExplanationModal)}
              className="p-2 text-slate-400 hover:text-[#00A3C4] rounded-lg hover:bg-slate-50 transition-colors shrink-0"
              aria-label="Ver explicación de la pregunta"
              title="¿Por qué preguntamos esto?"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>

          {/* Explanation Text */}
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed mb-6">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#00A3C4] shrink-0 mt-0.5" />
              <span>{currentQuestion.explanation}</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((option) => {
              const isSelected = currentSelectedValue === option.id;

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'border-[#00A3C4] bg-cyan-50/50 shadow-sm ring-1 ring-[#00A3C4]'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <p className={`text-sm font-semibold ${isSelected ? 'text-[#0A192F]' : 'text-slate-800'}`}>
                      {option.label}
                    </p>
                    {option.description && (
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {option.description}
                      </p>
                    )}
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'border-[#00A3C4] bg-[#00A3C4] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Actions Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <div>
              {currentStepIndex > 0 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Anterior</span>
                </button>
              ) : (
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  <span>Volver al inicio</span>
                </Link>
              )}
            </div>

            <div className="flex items-center gap-2">
              {currentQuestion.optional && (
                <button
                  type="button"
                  onClick={handleSkip}
                  className="px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  Omitir pregunta
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={!currentSelectedValue && !currentQuestion.optional}
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg text-white transition-colors ${
                  currentSelectedValue || currentQuestion.optional
                    ? 'bg-[#0A192F] hover:bg-[#112240]'
                    : 'bg-slate-300 cursor-not-allowed'
                }`}
              >
                <span>{currentStepIndex === totalSteps - 1 ? 'Ver resultados' : 'Siguiente'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00A3C4]" />
              </button>
            </div>
          </div>

        </div>

        {/* Session Privacy Reminder */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Sus respuestas solo se conservan en la memoria temporal de esta sesión y no se transmiten a terceros.
        </div>

      </div>
    </div>
  );
}
