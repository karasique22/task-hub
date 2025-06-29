'use client';

import SidebarHeading from './SidebarHeading';
import SidebarMenu from './SidebarMenu';
import SidebarProjects from './SidebarProjects';
import SidebarProfile from './SidebarProfile';
import dynamic from 'next/dynamic';

const DynamicThemeToggle = dynamic(
  () => import('./ThemeToggle').then((mod) => mod.default),
  {
    ssr: false,
  }
);

export const Sidebar = () => {
  return (
    <aside className='p-5 bg-white dark:bg-neutral-800 space-y-6'>
      <SidebarHeading title='Аккаунт' />
      <SidebarProfile name='Мистер Бист' email='ZV9Vt@example.com' />

      <SidebarHeading title='Главное меню' />
      <SidebarMenu />

      <SidebarHeading title='Проекты' />
      <SidebarProjects />

      <DynamicThemeToggle />
    </aside>
  );
};
