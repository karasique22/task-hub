import { Pages } from '@/config/pages'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

import AddSubtaskForm from './AddSubtaskForm'

interface Props {
	taskId: string
	hideBack?: boolean
}

export default function AddSubtaskShell({ taskId, hideBack }: Props) {
	return (
		<>
			{!hideBack && (
				<Link
					href={Pages.DASHBOARD}
					className='mb-4 flex items-center gap-2'
				>
					<ArrowLeftCircle />
					<span className='text-2xl'>Назад к панели задач</span>
				</Link>
			)}

			<AddSubtaskForm taskId={taskId} />
		</>
	)
}
