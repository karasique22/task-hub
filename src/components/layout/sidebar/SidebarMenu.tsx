import Link from 'next/link'

import { MAIN_MENU } from '../../../data/main-menu.data'

export default function SidebarMenu() {
	return (
		<nav>
			<ul className='text-muted-foreground space-y-3'>
				{MAIN_MENU.map(item => (
					<li key={item.href}>
						<Link
							className='flex items-center justify-between gap-2 pl-3'
							href={item.href}
						>
							<span className='flex items-center gap-3'>
								<item.icon
									size={20}
									strokeWidth={1.5}
								/>
								<span>{item.label}</span>
							</span>
							<span>
								{item.label === 'Сообщения' && (
									<span className='text-primary rounded-xl bg-[#dcdef6] px-2.5 text-xs font-medium dark:text-neutral-800'>
										4
									</span>
								)}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
