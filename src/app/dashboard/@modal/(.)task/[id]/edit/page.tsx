import Modal from '@/components/ui/modal/Modal'

import TaskEditForm from './TaskEditForm'

export default async function TaskEditPage(props: {
	params: Promise<{ id: string }>
}) {
	const params = await props.params
	return (
		<Modal dialogTitle='Редактирование задачи'>
			<TaskEditForm taskId={params.id} />
		</Modal>
	)
}
