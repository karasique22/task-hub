import type { LucideIcon } from 'lucide-react'

import type { IProfile } from './profile.types'

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	icon: LucideIcon
	endDate: Date
	users: IProfile[]
	subTasks: ISubTask[]
	comments: string[]
	attachments: string[]
	links: string[]
}
