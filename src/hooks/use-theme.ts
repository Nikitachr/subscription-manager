import { useEffect, useState } from 'react';

export type TTheme = 'light' | 'dark';

export default function useTheme(): [TTheme, (value: TTheme) => void] {
  const [theme, setTheme] = useState<TTheme>(localStorage.getItem('theme') as TTheme || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme];
}
