import { Pages } from '@/config/pages'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'

export default function TaskEditPage() {
	return (
		<div className='p-6'>
			<Link
				className='flex items-center gap-2'
				href={Pages.DASHBOARD}
			>
				<ArrowLeftCircle />
				<span className='text-2xl'>Назад к панели задач</span>
			</Link>
		</div>
	)
}
