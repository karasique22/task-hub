'use client'

import dynamic from 'next/dynamic'

import SidebarHeading from './SidebarHeading'
import SidebarMenu from './SidebarMenu'
import SidebarProfile from './SidebarProfile'
import SidebarProjects from './SidebarProjects'

const DynamicThemeToggle = dynamic(
	() => import('./ThemeToggle').then(mod => mod.default),
	{
		ssr: false
	}
)

export const Sidebar = () => {
	return (
		<aside className='bg-sidebar text-sidebar-foreground space-y-6 p-5'>
			<SidebarHeading title='Аккаунт' />
			<SidebarProfile
				name='Мистер Бист'
				email='ZV9Vt@example.com'
			/>

			<SidebarHeading title='Главное меню' />
			<SidebarMenu />

			<SidebarHeading title='Проекты' />
			<SidebarProjects />

			<DynamicThemeToggle />
		</aside>
	)
}
