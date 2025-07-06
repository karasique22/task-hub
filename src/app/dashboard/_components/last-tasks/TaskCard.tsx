import TaskProgressBar from '@/components/ui/task-progress-bar/TaskProgressBar'
import type { ITask } from '@/types/task.types'
import { calcTaskProgress } from '@/utils/calc-task-progress'
import { daysLeft } from '@/utils/days-left'
import { ImageIcon, Link, MessageSquareText, Pencil, Plus } from 'lucide-react'
import Image from 'next/image'
import { plural } from 'ru-plurals'

import TaskButton from './TaskButton'

interface Props {
	task: ITask
}

const getVerb = plural('Остался', 'Осталось', 'Осталось')

export default function TaskCard({ task }: Props) {
	const progress = calcTaskProgress(task)

	const today = new Date()
	const days = Math.ceil(
		(task.endDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
	)

	return (
		<div className='bg-card flex h-full flex-col justify-between gap-6 rounded-2xl p-5'>
			<div className='flex items-start'>
				<div className='mr-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 dark:bg-neutral-700'>
					<task.icon
						aria-label={task.title}
						width={25}
						height={25}
						color='var(--color-primary)'
					/>
				</div>

				<div className='mr-1 flex min-h-[52px] flex-1 flex-col gap-1'>
					<div className='line-clamp-2 text-base/tight font-medium'>
						{task.title}
					</div>
					<div className='text-muted-foreground text-xs'>
						{getVerb(days)}: {daysLeft(task.endDate)}
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
								className='border-muted h-[35px] w-[35px] rounded-full border-2'
							/>
						</div>
					))}
				</div>
			</div>

			<TaskProgressBar progress={progress} />

			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-1'>
						<MessageSquareText className='size-4 text-neutral-400' />
						<span className='text-sm'>{task.comments.length}</span>
					</div>
					<div className='flex items-center gap-1'>
						<ImageIcon className='size-4 text-neutral-400' />
						<span className='text-sm'>{task.attachments.length}</span>
					</div>
					<div className='flex items-center gap-1'>
						<Link className='size-4 text-neutral-400' />
						<span className='text-sm'>{task.links.length}</span>
					</div>
				</div>

				<div className='flex items-center gap-2'>
					<TaskButton
						variant='primary'
						buttonImage={<Plus className='size-4 stroke-3' />}
					/>
					<TaskButton
						variant='secondary'
						buttonImage={<Pencil className='size-4 stroke-2' />}
						link={`/tasks/${task.id}/edit`}
					/>
				</div>
			</div>
		</div>
	)
}
