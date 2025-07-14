import type { LucideIcon } from 'lucide-react'
import { z } from 'zod'

export const TaskEditSchema = z.object({
	title: z.string().min(1, 'Введите название').optional(),
	icon: z
		.custom<LucideIcon>(val => typeof val === 'function', {
			message: 'Выберите иконку'
		})
		.optional(),
	endDate: z
		.date()
		.refine(d => d > new Date(), 'Дата должна быть в будущем')
		.optional(),
	deleted: z.boolean().optional()
})

export type TaskEditInputs = z.infer<typeof TaskEditSchema>
