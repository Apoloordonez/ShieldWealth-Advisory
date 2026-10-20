import React, { createContext, useContext, useState, useEffect, ReactNode, AnchorHTMLAttributes, MouseEvent } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', to);
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
}

export function Link({ to, children, className = '', activeClassName = '', onClick, ...props }: LinkProps) {
  const { currentPath, navigate } = useRouter();
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && props.target !== '_blank') {
      e.preventDefault();
      navigate(to);
    }
  };

  const finalClassName = `${className} ${isActive && activeClassName ? activeClassName : ''}`.trim();

  return (
    <a href={to} onClick={handleClick} className={finalClassName} {...props}>
      {children}
    </a>
  );
}
