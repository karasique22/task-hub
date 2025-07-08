import { Pages } from '@/config/pages'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

import TaskEditForm from './TaskEditForm'

interface Props {
	taskId: string
	hideBack?: boolean
}

export default function TaskEditShell({ taskId, hideBack }: Props) {
	return (
		<div className='p-6'>
			{!hideBack && (
				<Link
					href={Pages.DASHBOARD}
					className='mb-4 flex items-center gap-2'
				>
					<ArrowLeftCircle />
					<span className='text-2xl'>Назад к панели задач</span>
				</Link>
			)}
			<TaskEditForm taskId={taskId} />
		</div>
	)
}
