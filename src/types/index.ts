export type GeographicScope = 'Nacional' | 'Internacional' | 'Mixto / Por confirmar';

export type ProviderCountry = 'Ecuador' | 'Colombia' | 'Estados Unidos' | 'España / Internacional';

export type ProviderServiceType = 
  | 'Hospitalización' 
  | 'Consulta ambulatoria' 
  | 'Laboratorio e Imagen' 
  | 'Emergencia' 
  | 'Alta Complejidad' 
  | 'Múltiples Servicios';

export type ProviderModality = 
  | 'Red con crédito directo' 
  | 'Copago diferenciado' 
  | 'Reembolso / Libre elección' 
  | 'Beneficio sujeto a precertificación';

export interface NetworkProvider {
  id: string;
  name: string;
  country: ProviderCountry;
  city: string;
  serviceType: ProviderServiceType;
  modality: ProviderModality;
  appliesToPlans: string[]; // plan slugs, e.g. ['sigma', 'innova']
  sourceDoc: string;
  notes?: string;
  verificationNotice?: string;
}

export interface DeductibleOptionItem {
  amount: number;
  label: string;
  appliedTo: string;
  notes?: string;
}

export interface PlanDeductibleStructure {
  headline: string;
  options: DeductibleOptionItem[];
  howItApplies: string;
  exonerations: string;
  frequency: 'Por persona por año póliza' | 'Por incapacidad o evento médico' | 'Anual por persona';
  maxFamilyDeductibles?: string;
  sourceDocName: string;
  sourceDocUrl?: string;
  verifiedByAgent: boolean;
}

export interface PlanNetworkDetails {
  nationalScope: string;
  internationalScope: string;
  freeChoiceReimbursement: string;
  inNetworkCopay: string;
  exonerations: string;
  directorySourceDate: string;
  directoryNotice: string;
  officialDocUrl: string;
  officialDocName: string;
  verifiedByAgent: boolean;
}

export interface PlanDataSheet {
  alcanceGeografico: string;
  modalidad: string;
  redMedica: string;
  limiteMaximo: string;
  deducibles: string;
  copagos: string;
  carencias: string;
  exclusiones: string;
  elegibilidad: string;
  vigencia: string;
  requisitos: string;
}

export interface PlanFAQ {
  pregunta: string;
  respuesta: string;
}

export interface Plan {
  id: string;
  slug: string;
  name: string;
  codeName: string;
  subtitle: string;
  status: string;
  categoryTag: string;
  scopeTag: GeographicScope;
  description: string;
  structuralTarget: string;
  dataSheet: PlanDataSheet;
  deductibleStructure: PlanDeductibleStructure;
  networkDetails: PlanNetworkDetails;
  officialSource: string;
  reviewDate: string;
  version: string;
  faqs: PlanFAQ[];
}

export interface OfficialSourceItem {
  id: string;
  title: string;
  type: 'Comparador Oficial' | 'Ficha de Ventas' | 'Condicionado' | 'Directorio de Prestadores' | 'Portal Institucional';
  url: string;
  docDate: string;
  status: 'Vigente' | 'Referencial (validar vigencia)' | 'Documentación oficial revisada';
  description: string;
  plansAffected: string[];
  notes: string;
}

export interface QuestionnaireAnswer {
  target?: 'individual' | 'familia' | 'extendida' | 'no-indicar';
  scope?: 'nacional' | 'internacional' | 'no-se';
  priority?: 'red-medica' | 'alcance-geo' | 'claridad' | 'presupuesto' | 'acompanamiento';
  budgetRange?: 'menor-100' | '100-250' | 'mayor-250' | 'no-indicar';
  costParticipation?: 'deducible-bajo' | 'deducible-alto' | 'entender-diferencia';
  decisionHelper?: 'comparar' | 'glosario' | 'fichas' | 'asesor';
}

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}
