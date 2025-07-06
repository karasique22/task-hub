import { Sidebar } from '@/components/layout/sidebar/Sidebar'
import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	modals: React.ReactNode
}

export default function DashboardLayout({ children, modals }: Props) {
	return (
		<div className='grid h-screen grid-cols-[250px_1fr]'>
			<Sidebar />
			<main>{children}</main>
			{modals}
		</div>
	)
}
