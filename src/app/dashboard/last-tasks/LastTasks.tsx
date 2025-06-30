import { TASKS } from '../data/last-tasks.data'
import TaskCard from './TaskCard'

export default function LastTasks() {
	return (
		<div className='p-4'>
			<div className='flex items-center gap-1.5'>
				<h2 className='text-2xl font-medium'>Последние задачи</h2>
				<span className='text-xl text-neutral-400'>(3)</span>
			</div>

			<div className='mt-3 grid grid-cols-3 items-stretch gap-3'>
				{TASKS.map(task => (
					<TaskCard
						key={task.id}
						task={task}
					/>
				))}
			</div>
		</div>
	)
}
