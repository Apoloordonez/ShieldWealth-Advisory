export interface QuestionOption {
  id: string;
  label: string;
  description?: string;
}

export interface Question {
  id: number;
  field: string;
  title: string;
  explanation: string;
  optional?: boolean;
  options: QuestionOption[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    field: 'target',
    title: '¿Para quién buscas orientación?',
    explanation:
      'Esta selección nos permite estructurar la información adecuada a un perfil personal o grupal. No condiciona la elegibilidad formal ni define la prima.',
    options: [
      { id: 'individual', label: 'Individual', description: 'Orientación únicamente para mí como titular.' },
      { id: 'familia', label: 'Familia inmediata', description: 'Titular con cónyuge y/o hijos dependientes.' },
      { id: 'extendida', label: 'Otra composición familiar', description: 'Padres, hermanos u otros familiares a cargo.' },
      { id: 'no-indicar', label: 'Prefiero no indicarlo', description: 'Deseo explorar el catálogo de manera genérica.' },
    ],
  },
  {
    id: 2,
    field: 'scope',
    title: '¿Qué alcance territorial deseas explorar?',
    explanation:
      'Las alternativas médicas suelen dividirse entre soluciones para atención en clínicas de Ecuador o cobertura extendida en el exterior.',
    options: [
      { id: 'nacional', label: 'Nacional (Ecuador)', description: 'Enfoque en clínicas, hospitales y médicos en territorio ecuatoriano.' },
      { id: 'internacional', label: 'Internacional', description: 'Interés en atención médica fuera del país (Latinoamérica, EE.UU. u otros).' },
      { id: 'no-se', label: 'Todavía no lo sé / Por definir', description: 'Deseo conocer ambas modalidades para evaluar diferencias.' },
    ],
  },
  {
    id: 3,
    field: 'priority',
    title: '¿Qué aspecto valoras más al revisar alternativas?',
    explanation:
      'Nos ayuda a organizar las fichas informativas según lo que consideras más relevante en esta etapa exploratoria.',
    options: [
      { id: 'red-medica', label: 'Red de clínicas y médicos', description: 'Acceso a centros hospitalarios reconocidos y convenios.' },
      { id: 'alcance-geo', label: 'Alcance geográfico amplio', description: 'Tranquilidad de cobertura tanto local como en viajes o tratamientos externos.' },
      { id: 'claridad', label: 'Claridad en condiciones', description: 'Comprender deducibles, copagos, carencias y exclusiones sin sorpresas.' },
      { id: 'presupuesto', label: 'Presupuesto y sostenibilidad', description: 'Previsibilidad de costos mensuales a lo largo del tiempo.' },
      { id: 'acompanamiento', label: 'Acompañamiento en siniestros', description: 'Soporte y orientación humana al momento de utilizar la póliza.' },
    ],
  },
  {
    id: 4,
    field: 'budgetRange',
    title: '¿En qué rango mensual aproximado te gustaría orientarte?',
    explanation:
      'Aviso importante: Esta selección es estrictamente pedagógica. No constituye cotización ni garantiza tarifas, las cuales dependen de la edad, salud y suscripción oficial de BMI.',
    optional: true,
    options: [
      { id: 'menor-100', label: 'Menor a $100 / mes', description: 'Enfoque en alternativas esenciales o esquemas de deducible optimizado.' },
      { id: '100-250', label: 'Entre $100 y $250 / mes', description: 'Rango frecuente para coberturas completas a nivel nacional.' },
      { id: 'mayor-250', label: 'Mayor a $250 / mes', description: 'Rango habitual en coberturas de salud internacional de alta suma.' },
      { id: 'no-indicar', label: 'Prefiero no indicarlo en esta etapa', description: 'Continuar sin especificar parámetro presupuestario.' },
    ],
  },
  {
    id: 5,
    field: 'costParticipation',
    title: '¿Qué nivel de participación en costos deseas comprender?',
    explanation:
      'En salud privada existe una relación entre deducible y prima: a mayor deducible asumido ante hospitalizaciones, menor suele ser el costo mensual.',
    options: [
      { id: 'deducible-bajo', label: 'Deducible bajo', description: 'Menor desembolso de bolsillo ante un siniestro, aceptando una prima mayor.' },
      { id: 'deducible-alto', label: 'Deducible más alto', description: 'Respaldo para casos críticos o catastróficos, priorizando una prima contenida.' },
      { id: 'entender-diferencia', label: 'Deseo comprender la diferencia neutralmente', description: 'Quiero entender el impacto práctico antes de inclinarme por una opción.' },
    ],
  },
  {
    id: 6,
    field: 'decisionHelper',
    title: '¿Qué te ayudaría más a tomar una decisión informada?',
    explanation:
      'Identificar qué recurso te resulta más útil para profundizar en tu proceso de evaluación personal.',
    options: [
      { id: 'comparar', label: 'Comparar hasta 3 planes en una tabla', description: 'Visualizar diferencias estructurales en deducibles, límites y redes.' },
      { id: 'glosario', label: 'Comprender el glosario de términos técnicos', description: 'Aprender qué significan carencias, coaseguros y exclusiones.' },
      { id: 'fichas', label: 'Revisar las fichas técnicas detalladas', description: 'Explorar cada plan por separado con sus fuentes y estado de revisión.' },
      { id: 'asesor', label: 'Conversar con un asesor profesional', description: 'Recibir orientación personalizada cuando el canal oficial esté activo.' },
    ],
  },
];
