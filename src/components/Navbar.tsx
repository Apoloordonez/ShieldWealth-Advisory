import React, { useState } from 'react';
import { Menu, X, ArrowRight, Layers } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { useApp } from '../context/AppContext';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();
  const { comparePlanIds } = useApp();

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  const navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Explorar Planes', path: '/explorar' },
    { label: 'Cuestionario', path: '/cuestionario' },
    { 
      label: `Comparar${comparePlanIds.length > 0 ? ` (${comparePlanIds.length})` : ''}`, 
      path: '/comparar' 
    },
    { label: 'Cómo funciona', path: '/como-funciona' },
    { label: 'Sobre ShieldWealth', path: '/sobre-shieldwealth' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single Brand element */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#00A3C4] rounded-lg p-1"
            aria-label="ShieldWealth Advisory - Página principal"
          >
            <img
              src="/assets/aistudio/Logotipo_SHIELDWEALTH_ADVISORY_8f2fb627.png"
              alt="ShieldWealth Advisory"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Zone 2: Nav Links (single-line, concise) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap transition-colors py-1 ${
                    isActive
                      ? 'text-[#0A192F] font-semibold border-b-2 border-[#00A3C4]'
                      : 'hover:text-[#0A192F]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              to="/cuestionario"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0A192F] hover:bg-[#112240] rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-[#00A3C4] focus:ring-offset-2 whitespace-nowrap"
            >
              <span>Iniciar orientación</span>
              <ArrowRight className="w-4 h-4 text-[#00A3C4]" />
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#00A3C4]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.path ||
                (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`flex items-center justify-between text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-slate-50 text-[#0A192F] font-semibold border-l-4 border-[#00A3C4]'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('/cuestionario')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#0A192F] hover:bg-[#112240] rounded-lg"
            >
              <span>Iniciar orientación</span>
              <ArrowRight className="w-4 h-4 text-[#00A3C4]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
