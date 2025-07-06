import { cn } from '@/lib/utils'
import { formatMinutes } from '@/utils/format-minutes'
import Image from 'next/image'

import type { IProjectsStats } from './projects-stats.types'

interface Props {
	projectStat: IProjectsStats
}

export default function ProjectsStatsCard({ projectStat }: Props) {
	return (
		<div
			className={cn(
				projectStat.bgColor,
				'flex items-center justify-between rounded-2xl p-5'
			)}
		>
			<div className='flex flex-col dark:text-neutral-800'>
				<span className='text-4xl font-semibold'>
					{projectStat.label === 'Рабочего времени'
						? formatMinutes(projectStat.number)
						: projectStat.number}
				</span>
				<span className='text-sm font-medium'>{projectStat.label}</span>
			</div>

			<div
				className='relative flex h-16 w-16 shrink-0 items-end justify-center overflow-visible select-none'
				draggable={false}
			>
				<div className='absolute bottom-0 left-1/2 z-0 h-2 w-8 -translate-x-1/2 rounded-full bg-black/60 blur-sm' />

				<Image
					src={projectStat.icon}
					alt={projectStat.label}
					width={60}
					height={60}
					className='relative z-10 -translate-y-1 object-contain'
				/>
			</div>
		</div>
	)
}
