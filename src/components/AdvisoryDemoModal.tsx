import React, { useState } from 'react';
import { X, AlertTriangle, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PLANS } from '../data/plans';

export function AdvisoryDemoModal() {
  const { isDemoModalOpen, closeDemoModal, demoModalContext } = useApp();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Quito');
  const [selectedPlan, setSelectedPlan] = useState(demoModalContext || 'sigma');
  const [acceptDemoNotice, setAcceptDemoNotice] = useState(false);
  const [optInPromo, setOptInPromo] = useState(false);
  const [simulationState, setSimulationState] = useState<'idle' | 'simulated'>('idle');

  if (!isDemoModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptDemoNotice) return;

    // Simulation only - no data transmitted
    setSimulationState('simulated');
  };

  const handleResetAndClose = () => {
    setName('');
    setEmail('');
    setAcceptDemoNotice(false);
    setOptInPromo(false);
    setSimulationState('idle');
    closeDemoModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full my-8 border border-slate-200 overflow-hidden text-slate-900">
        
        {/* Modal Top Bar */}
        <div className="bg-[#0A192F] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#00A3C4]" />
            <h2 id="modal-title" className="text-base font-semibold">
              Solicitud de Asesoría
            </h2>
          </div>
          <button
            onClick={handleResetAndClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A3C4]"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prototype & Privacy Boundary Banner */}
        <div className="bg-amber-50 border-b border-amber-200 p-4 text-xs text-amber-900">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-950">
                MODO DEMOSTRACIÓN TÉCNICA · SIN TRANSMISIÓN DE DATOS
              </p>
              <p className="mt-1 leading-relaxed text-amber-800">
                Este formulario es una maqueta de experiencia de usuario. <strong>No guarda, no transmite ni comparte ningún dato personal</strong> con CRM, bases de datos externas, correos ni WhatsApp.
              </p>
              <div className="mt-2 text-[11px] text-amber-900/90 font-medium">
                Requisitos previos antes de habilitar en producción:
                <ul className="list-disc list-inside mt-0.5 space-y-0.5 text-amber-800">
                  <li>Validación documental de credenciales comerciales o broker con BMI.</li>
                  <li>Constitución de responsable del tratamiento de datos en Ecuador.</li>
                  <li>Aprobación de política de privacidad definitiva y canal ARCO.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Form Body or Simulation confirmation */}
        <div className="p-6">
          {simulationState === 'simulated' ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Demostración de flujo completada
              </h3>
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-left text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Lock className="w-4 h-4 text-[#00A3C4]" />
                  <span>Auditoría de privacidad del prototipo:</span>
                </div>
                <p>• Los datos ingresados en pantalla fueron descartados en memoria.</p>
                <p>• Cero llamadas de red realizadas (HTTP 200/POST no ejecutado).</p>
                <p>• Ni WhatsApp ni servicios externos de mensajería fueron activados.</p>
              </div>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Para consultas reales sobre pólizas de BMI Ecuador en este momento, le recomendamos acudir a los canales oficiales directos de la compañía en <strong>cotizadorbmi.com.ec</strong>.
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 px-4 bg-[#0A192F] text-white text-sm font-semibold rounded-lg hover:bg-[#112240] transition-colors"
              >
                Volver a la exploración
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label htmlFor="demo-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre referencial o alias
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-[#00A3C4] focus:ring-1 focus:ring-[#00A3C4] outline-none"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  placeholder="ejemplo@correo.ec"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-[#00A3C4] focus:ring-1 focus:ring-[#00A3C4] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-city" className="block text-xs font-semibold text-slate-700 mb-1">
                    Ciudad en Ecuador
                  </label>
                  <select
                    id="demo-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-[#00A3C4] focus:ring-1 focus:ring-[#00A3C4] outline-none bg-white"
                  >
                    <option value="Quito">Quito / Pichincha</option>
                    <option value="Guayaquil">Guayaquil / Guayas</option>
                    <option value="Cuenca">Cuenca / Azuay</option>
                    <option value="Ambato">Ambato / Tungurahua</option>
                    <option value="Manta">Manta / Manabí</option>
                    <option value="Otra">Otra localidad</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="demo-plan" className="block text-xs font-semibold text-slate-700 mb-1">
                    Plan de mayor interés
                  </label>
                  <select
                    id="demo-plan"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:border-[#00A3C4] focus:ring-1 focus:ring-[#00A3C4] outline-none bg-white"
                  >
                    {PLANS.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent items */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700">
                  <input
                    type="checkbox"
                    required
                    checked={acceptDemoNotice}
                    onChange={(e) => setAcceptDemoNotice(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-[#00A3C4] focus:ring-[#00A3C4]"
                  />
                  <span>
                    <strong>Reconozco que este es un prototipo privado:</strong> Entiendo que mis datos no son transmitidos a aseguradoras ni intermediarios en esta fase.
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-500">
                  <input
                    type="checkbox"
                    checked={optInPromo}
                    onChange={(e) => setOptInPromo(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 text-[#00A3C4] focus:ring-[#00A3C4]"
                  />
                  <span>
                    Deseo recibir novedades educativas sobre seguros de salud cuando la plataforma se encuentre formalmente habilitada (Opcional, desmarcado por defecto).
                  </span>
                </label>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!acceptDemoNotice}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-lg text-white transition-colors ${
                    acceptDemoNotice
                      ? 'bg-[#0A192F] hover:bg-[#112240]'
                      : 'bg-slate-400 cursor-not-allowed'
                  }`}
                >
                  Probar simulación de envío
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
