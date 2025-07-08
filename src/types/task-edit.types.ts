import type { ITask } from '@/types/task.types'

export type ITaskEdit = Pick<ITask, 'title' | 'icon' | 'endDate'> & {
	deleted?: boolean
}
