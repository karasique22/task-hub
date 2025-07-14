import { TASKS } from '@/data/tasks.data'

export default function useTask(taskId: string) {
	const task = TASKS.find(task => task.id === taskId)
	return task
}
