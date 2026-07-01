"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type RouteTransitionProps = {
  children: React.ReactNode;
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsVisible(false);
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 40);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`flex-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
