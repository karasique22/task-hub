import { z } from 'zod'

export const SubtaskCreateSchema = z.object({
	title: z.string().min(1, 'Введите название'),
	deadline: z.date().optional()
})

export type SubtaskCreateInputs = z.infer<typeof SubtaskCreateSchema>
