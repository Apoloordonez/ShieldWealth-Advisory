/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { AppProvider } from './context/AppContext';
import { PrototypeNotice } from './components/PrototypeNotice';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { AdvisoryDemoModal } from './components/AdvisoryDemoModal';

import { HomePage } from './pages/HomePage';
import { ExplorerPage } from './pages/ExplorerPage';
import { QuestionnairePage } from './pages/QuestionnairePage';
import { ComparatorPage } from './pages/ComparatorPage';
import { PlanDetailPage } from './pages/PlanDetailPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiesPage } from './pages/CookiesPage';
import { ContactoPrivacidadPage } from './pages/ContactoPrivacidadPage';

function RouteContent() {
  const { currentPath } = useRouter();

  // Clean path without query or trailing slash
  const cleanPath = currentPath.split('?')[0].replace(/\/+$/, '') || '/';

  // Handle plan detail pages
  if (cleanPath.startsWith('/planes/')) {
    const slug = cleanPath.replace('/planes/', '');
    return <PlanDetailPage slug={slug} />;
  }

  switch (cleanPath) {
    case '/':
      return <HomePage />;
    case '/explorar':
      return <ExplorerPage />;
    case '/cuestionario':
      return <QuestionnairePage />;
    case '/comparar':
      return <ComparatorPage />;
    case '/como-funciona':
      return <HowItWorksPage />;
    case '/sobre-shieldwealth':
      return <AboutPage />;
    case '/privacidad':
      return <PrivacyPage />;
    case '/terminos':
      return <TermsPage />;
    case '/cookies':
      return <CookiesPage />;
    case '/contacto-privacidad':
      return <ContactoPrivacidadPage />;
    default:
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-slate-50">
          <h1 className="text-3xl font-bold text-[#0A192F] mb-2">Página no encontrada</h1>
          <p className="text-slate-600 text-sm mb-6 max-w-md">
            La ruta solicitada ({cleanPath}) no corresponde a una sección disponible en este prototipo.
          </p>
          <a
            href="/"
            className="px-5 py-2.5 bg-[#0A192F] text-white text-xs font-semibold rounded-lg hover:bg-[#112240]"
          >
            Volver al Inicio
          </a>
        </div>
      );
  }
}

export default function App() {
  return (
    <RouterProvider>
      <AppProvider>
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-[#00A3C4]/20 selection:text-[#0A192F]">
          {/* Top Prototype & Boundary bar */}
          <PrototypeNotice />

          {/* Main Top Bar Contract Navbar */}
          <Navbar />

          {/* Main Route Content */}
          <main className="flex-grow">
            <RouteContent />
          </main>

          {/* Footer */}
          <Footer />

          {/* Local Storage & Cookie Banner */}
          <CookieBanner />

          {/* Demonstration Mode Advisory Modal */}
          <AdvisoryDemoModal />
        </div>
      </AppProvider>
    </RouterProvider>
  );
}
