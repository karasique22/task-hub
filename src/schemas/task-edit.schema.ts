import type { ITask } from '@/types/task.types'
import { z } from 'zod'

export const TaskEditSchema = z.object({
	title: z.string().min(1, 'Введите название'),
	endDate: z.coerce.date(),
	users: z.array(z.string().uuid()).min(1),
	subTasks: z
		.array(
			z.object({
				id: z.string().uuid().optional(),
				title: z.string().min(1),
				isCompleted: z.boolean().optional()
			})
		)
		.max(50),
	comments: z.array(z.string()).optional(),
	attachments: z.array(z.string().url()).optional(),
	links: z.array(z.string().url()).optional()
})

export type TaskEditInputs = z.infer<typeof TaskEditSchema>
