'use client'

import { TASKS } from '@/data/tasks.data'
import { useFilteredTasks } from '@/hooks/useFilteredTasks'
import type { ITask } from '@/types/task.types'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useState } from 'react'

import FilterTasks from './FilterTasks'
import SortTasks from './SortTasks'
import TaskCard from './TaskCard'

const filterFns = {
	done: (task: ITask) =>
		task.subTasks.length > 0 && task.subTasks.every(sub => sub.isCompleted),

	'in-work': (task: ITask) =>
		task.subTasks.length > 0 &&
		task.subTasks.some(sub => sub.isCompleted) &&
		task.subTasks.some(sub => !sub.isCompleted),

	'not-started': (task: ITask) =>
		task.subTasks.length > 0 && task.subTasks.every(sub => !sub.isCompleted)
}

export default function LastTasks() {
	const [expanded, setExpanded] = useState(false)
	const [filter, setFilter] = useState<
		'all' | 'done' | 'in-work' | 'not-started'
	>('all')

	const [sortBy, setSortBy] = useState<'createdAt' | 'endDate' | 'title'>(
		'endDate'
	)
	const [direction, setDirection] = useState<'asc' | 'desc'>('asc')

	const recentTasks = useFilteredTasks({
		tasks: TASKS,
		enabledFilters: filter === 'all' ? {} : { [filter]: filterFns[filter] },
		sort: { sortBy, direction },
		onlyRecent: true
	})
	const tasksToShow = expanded ? recentTasks : recentTasks.slice(0, 3)

	return (
		<div className='p-4'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-1.5'>
					<h2 className='text-2xl font-medium'>Задачи за последний месяц</h2>
					<span className='text-xl text-neutral-400'>
						({recentTasks.length})
					</span>
				</div>

				<div className='flex items-center gap-3'>
					<FilterTasks
						filter={filter}
						setFilter={setFilter}
					/>
					<SortTasks
						sortBy={sortBy}
						setSortBy={setSortBy}
						direction={direction}
						setDirection={setDirection}
					/>
				</div>
			</div>

			<div className='mt-3 grid grid-cols-3 items-stretch gap-3'>
				<AnimatePresence mode='popLayout'>
					{tasksToShow.map(task => (
						<motion.div
							key={task.id}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.2 }}
							layout
						>
							<TaskCard task={task} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>

			{recentTasks.length > 3 && (
				<button
					onClick={() => setExpanded(prev => !prev)}
					className='text-primary mx-auto mt-4 flex gap-1 text-sm underline-offset-4 transition-all duration-300 hover:opacity-80'
				>
					<span>{expanded ? 'Скрыть' : 'Показать все'}</span>
					{expanded ? <ChevronUp /> : <ChevronUp className='rotate-180' />}
				</button>
			)}
		</div>
	)
}
