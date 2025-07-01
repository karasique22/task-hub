import cn from 'clsx'

import { PROJECTS } from '../../../data/projects.data'

export default function SidebarProjects() {
	return (
		<div>
			<ul className='space-y-3'>
				{PROJECTS.map(project => (
					<li
						key={project.id}
						className='flex items-center gap-4 pl-3'
					>
						<div className={cn(project.color, 'size-3 shrink-0')} />
						<span className='text-muted-foreground line-clamp-2'>
							{project.name}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}
