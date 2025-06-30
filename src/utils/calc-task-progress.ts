import type { ITask } from '@/types/task.types'

export function calcTaskProgress(task: ITask): number {
	const total = task.subTasks.length
	const completed = task.subTasks.filter(s => s.isCompleted).length
	return total === 0 ? 0 : (completed / total) * 100
}
