import type { ITask } from '@/types/task.types'
import { useMemo } from 'react'

const MS_IN_DAY = 1000 * 60 * 60 * 24
const THIRTY_DAYS_MS = 30 * MS_IN_DAY

type SortDirection = 'asc' | 'desc'

interface SortConfig {
	sortBy: 'createdAt' | 'endDate' | 'title'
	direction: SortDirection
}

interface UseFilteredTasksParams {
	tasks: ITask[]
	enabledFilters?: {
		[key: string]: (task: ITask) => boolean
	}
	sort?: SortConfig
	onlyRecent?: boolean
}

export function useFilteredTasks({
	tasks,
	enabledFilters = {},
	sort,
	onlyRecent = true
}: UseFilteredTasksParams): ITask[] {
	return useMemo(() => {
		let result = [...tasks]

		if (onlyRecent) {
			const now = Date.now()
			result = result.filter(task => {
				const created =
					typeof task.createdAt === 'string'
						? new Date(task.createdAt).getTime()
						: task.createdAt.getTime()
				return now - created <= THIRTY_DAYS_MS
			})
		}

		for (const filterFn of Object.values(enabledFilters)) {
			result = result.filter(filterFn)
		}

		if (sort) {
			const { sortBy, direction } = sort

			result.sort((a, b) => {
				if (sortBy === 'title') {
					const titleA = a.title.toLowerCase()
					const titleB = b.title.toLowerCase()
					return direction === 'asc'
						? titleA.localeCompare(titleB)
						: titleB.localeCompare(titleA)
				} else {
					const aTime = new Date(a[sortBy]).getTime()
					const bTime = new Date(b[sortBy]).getTime()
					return direction === 'asc' ? aTime - bTime : bTime - aTime
				}
			})
		}

		return result
	}, [tasks, enabledFilters, sort, onlyRecent])
}
