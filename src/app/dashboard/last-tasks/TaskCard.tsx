import TaskProgressBar from '@/components/ui/task-progress-bar/TaskProgressBar'
import type { ITask } from '@/types/task.types'
import { calcTaskProgress } from '@/utils/calc-task-progress'
import { daysLeft } from '@/utils/days-left'
import { ImageIcon, Link, MessageSquareText } from 'lucide-react'
import Image from 'next/image'

interface Props {
	task: ITask
}

export default function TaskCard({ task }: Props) {
	const progress = calcTaskProgress(task)

	return (
		<div className='flex h-full flex-col justify-between gap-4 rounded-2xl bg-white p-5'>
			<div className='flex items-start'>
				<div className='mr-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100'>
					<task.icon
						aria-label={task.title}
						width={25}
						height={25}
						color='var(--color-primary)'
					/>
				</div>

				<div className='mr-1 flex min-h-[52px] flex-1 flex-col'>
					<div className='line-clamp-2 text-base/tight font-medium'>
						{task.title}
					</div>
					<div className='text-xs text-neutral-500'>
						Осталось: {daysLeft(task.endDate)}
					</div>
				</div>

				<div className='ml-auto flex'>
					{task.users.slice(0, 3).map(user => (
						<div
							key={user.id}
							className='max-h-max max-w-max shrink-0 not-first:-ml-4'
						>
							<Image
								src={user.avatarUrl ?? '/images/fallback-avatar.png'}
								width={35}
								height={35}
								alt={user.name}
								className='h-[35px] w-[35px] rounded-full border-2 border-neutral-200'
							/>
						</div>
					))}
				</div>
			</div>

			<TaskProgressBar progress={progress} />

			<div className='flex items-center gap-4'>
				<div className='flex items-center gap-1'>
					<MessageSquareText className='h-4 w-4 text-neutral-400' />
					<span className='text-sm'>{task.comments.length}</span>
				</div>
				<div className='flex items-center gap-1'>
					<ImageIcon className='h-4 w-4 text-neutral-400' />
					<span className='text-sm'>{task.attachments.length}</span>
				</div>
				<div className='flex items-center gap-1'>
					<Link className='h-4 w-4 text-neutral-400' />
					<span className='text-sm'>{task.links.length}</span>
				</div>
			</div>
		</div>
	)
}
