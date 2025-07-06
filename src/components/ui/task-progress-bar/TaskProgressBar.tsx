import { getProgressBarColor } from '@/constants/task-progress'
import cn from 'classnames'
import { Check } from 'lucide-react'

interface Props {
	progress: number
}

export default function TaskProgressBar({ progress }: Props) {
	const width = Math.min(progress, 100)
	const barColor = getProgressBarColor(progress)

	return (
		<div className='relative h-14 w-full overflow-hidden rounded-full bg-neutral-200/50'>
			<div
				style={width > 0 ? { width: `${width}%` } : { width: '100%' }}
				className={cn(
					'flex h-full items-center justify-center rounded-full text-xs font-medium text-white transition-all duration-300',
					width > 0 && barColor
				)}
			>
				{progress >= 100 ? (
					<div className='flex items-center gap-2'>
						<div className='flex size-4 items-center justify-center rounded-full bg-white'>
							<Check className='size-2 stroke-5 text-green-500' />
						</div>
						<span className='text-sm text-white'>Готово</span>
					</div>
				) : (
					`${Math.round(progress)}%`
				)}
			</div>
		</div>
	)
}
