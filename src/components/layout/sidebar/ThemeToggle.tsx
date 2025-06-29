'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <button
      className='flex items-center justify-center mx-auto w-8 h-8 rounded-full transition-colors mt-10 bg-[#dcdef6] text-black dark:bg-neutral-700 dark:text-white'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} strokeWidth={1.5} />
      )}
    </button>
  );
}
