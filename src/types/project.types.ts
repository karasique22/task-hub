import type { ITask } from './task.types'

export interface IProject {
	id: string
	name: string
	color: string
	tasks?: ITask[]
}
