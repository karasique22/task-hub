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
import useTask from '@/hooks/useTask'
import { type TaskEditInputs, TaskEditSchema } from '@/schemas/task-edit.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function TaskEditForm({ taskId }: { taskId: string }) {
	const task = useTask(taskId)

	const form = useForm<TaskEditInputs>({
		resolver: zodResolver(TaskEditSchema),
		defaultValues: task && {
			title: task.title,
			endDate: task.endDate,
			icon: task.icon
		}
	})

	async function onSubmit(data: TaskEditInputs) {
		console.log(data)
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='mt-3 flex flex-col gap-4'
			>
				<FormField
					control={form.control}
					name='title'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Название</FormLabel>
							<FormControl>
								<Input
									placeholder='Введите название'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='endDate'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Срок</FormLabel>
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

				<FormField
					control={form.control}
					name='icon'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Иконка</FormLabel>
							<FormControl>{/* <IconSelect {...field} /> */}</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					disabled={form.formState.isSubmitting}
				>
					Сохранить
				</Button>
			</form>
		</Form>
	)
}
