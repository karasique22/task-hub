import { getProgressBarColor } from '@/constants/task-progress'
import cn from 'classnames'

interface Props {
	progress: number
}

export default function TaskProgressBar({ progress }: Props) {
	const width = Math.min(progress, 100)
	const barColor = getProgressBarColor(progress)

	return (
		<div className='relative h-12 w-full overflow-hidden rounded-full bg-neutral-200/50'>
			<div
				className={cn(
					'flex h-full items-center justify-center text-xs font-medium text-white transition-all duration-300',
					barColor
				)}
				style={{ width: `${width}%` }}
			>
				{progress >= 100 ? '✓ Готово' : `${Math.round(progress)}%`}
			</div>
		</div>
	)
}
