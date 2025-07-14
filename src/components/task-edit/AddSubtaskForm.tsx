'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
	type SubtaskCreateInputs,
	SubtaskCreateSchema
} from '@/schemas/add-subtask-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function AddSubtaskForm({ taskId }: { taskId: string }) {
	const form = useForm<SubtaskCreateInputs>({
		resolver: zodResolver(SubtaskCreateSchema)
	})

	async function onSubmit(data: SubtaskCreateInputs) {
		await fetch(`/api/tasks/${taskId}/subtasks`, {
			method: 'POST',
			body: JSON.stringify(data)
		})
		// TODO: можно закрыть модалку или обновить родительский список
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='w-72 space-y-4'
			>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Название подзадачи</FormLabel>
							<FormControl>
								<Input
									autoFocus
									placeholder='Описание…'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='deadline'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Срок (необязательно)</FormLabel>
							<FormControl>
								<Calendar
									mode='single'
									selected={field.value}
									onSelect={field.onChange}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					disabled={form.formState.isSubmitting}
				>
					Добавить
				</Button>
			</form>
		</Form>
	)
}
