import type { ITaskEdit } from '@/types/task-edit.types'
import type { LucideIcon } from 'lucide-react'
import { z } from 'zod'

export const TaskEditSchema: z.ZodType<ITaskEdit> = z.object({
	title: z.string().min(1, 'Введите название'),
	icon: z.custom<LucideIcon>(val => typeof val === 'function', {
		message: 'Выберите иконку'
	}),
	endDate: z.coerce
		.date()
		.refine(d => d > new Date(), 'Дата должна быть в будущем'),
	deleted: z.boolean().optional()
})

export type TaskEditInputs = z.infer<typeof TaskEditSchema>
