import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { QuestionnaireAnswer, CookiePreferences } from '../types';

interface AppContextType {
  // Compare state
  comparePlanIds: string[];
  addPlanToCompare: (planId: string) => boolean;
  removePlanFromCompare: (planId: string) => void;
  isPlanInCompare: (planId: string) => boolean;
  clearComparison: () => void;

  // Questionnaire state
  answers: QuestionnaireAnswer;
  setAnswer: <K extends keyof QuestionnaireAnswer>(field: K, value: QuestionnaireAnswer[K]) => void;
  resetQuestionnaire: () => void;
  isQuestionnaireComplete: boolean;

  // Cookie preferences
  cookiePrefs: CookiePreferences;
  saveCookiePrefs: (prefs: CookiePreferences) => void;
  isCookieModalOpen: boolean;
  setIsCookieModalOpen: (open: boolean) => void;

  // Advisory demo modal
  isDemoModalOpen: boolean;
  demoModalContext: string | null;
  openDemoModal: (planContext?: string) => void;
  closeDemoModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY_COMPARE = 'shieldwealth_compare_ids_v1';
const STORAGE_KEY_ANSWERS = 'shieldwealth_answers_v1';
const STORAGE_KEY_COOKIES = 'shieldwealth_cookie_prefs_v1';

export function AppProvider({ children }: { children: ReactNode }) {
  // Compare plans
  const [comparePlanIds, setComparePlanIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY_COMPARE);
        if (saved) return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    // Default initial selection for comparison preview
    return ['sigma', 'innova'];
  });

  // Questionnaire answers
  const [answers, setAnswers] = useState<QuestionnaireAnswer>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY_ANSWERS);
        if (saved) return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return {};
  });

  // Cookie prefs
  const [cookiePrefs, setCookiePrefs] = useState<CookiePreferences>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_COOKIES);
        if (saved) return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return {
      essential: true,
      analytics: false,
      marketing: false,
    };
  });

  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoModalContext, setDemoModalContext] = useState<string | null>(null);

  // Sync to session storage
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY_COMPARE, JSON.stringify(comparePlanIds));
    } catch {
      // ignore
    }
  }, [comparePlanIds]);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(answers));
    } catch {
      // ignore
    }
  }, [answers]);

  const addPlanToCompare = (planId: string): boolean => {
    if (comparePlanIds.includes(planId)) return true;
    if (comparePlanIds.length >= 3) {
      return false; // Reached limit of 3
    }
    setComparePlanIds([...comparePlanIds, planId]);
    return true;
  };

  const removePlanFromCompare = (planId: string) => {
    setComparePlanIds(comparePlanIds.filter((id) => id !== planId));
  };

  const isPlanInCompare = (planId: string) => {
    return comparePlanIds.includes(planId);
  };

  const clearComparison = () => {
    setComparePlanIds([]);
  };

  const setAnswer = <K extends keyof QuestionnaireAnswer>(field: K, value: QuestionnaireAnswer[K]) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetQuestionnaire = () => {
    setAnswers({});
    try {
      sessionStorage.removeItem(STORAGE_KEY_ANSWERS);
    } catch {
      // ignore
    }
  };

  const isQuestionnaireComplete = Boolean(
    answers.target && answers.scope && answers.priority && answers.costParticipation && answers.decisionHelper
  );

  const saveCookiePrefs = (prefs: CookiePreferences) => {
    setCookiePrefs(prefs);
    try {
      localStorage.setItem(STORAGE_KEY_COOKIES, JSON.stringify(prefs));
    } catch {
      // ignore
    }
  };

  const openDemoModal = (planContext?: string) => {
    setDemoModalContext(planContext || null);
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
    setDemoModalContext(null);
  };

  return (
    <AppContext.Provider
      value={{
        comparePlanIds,
        addPlanToCompare,
        removePlanFromCompare,
        isPlanInCompare,
        clearComparison,
        answers,
        setAnswer,
        resetQuestionnaire,
        isQuestionnaireComplete,
        cookiePrefs,
        saveCookiePrefs,
        isCookieModalOpen,
        setIsCookieModalOpen,
        isDemoModalOpen,
        demoModalContext,
        openDemoModal,
        closeDemoModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
