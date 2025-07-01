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

			<div className='shrink-0'>
				<Image
					src={projectStat.icon}
					alt={projectStat.label}
					width={85}
					height={85}
				/>
			</div>
		</div>
	)
}
