import TaskEditShell from '@/components/task-edit/TaskEditShell'
import Modal from '@/components/ui/modal/Modal'

export default function Page({ params }: { params: { id: string } }) {
	return (
		<Modal dialogTitle='Редактирование задачи'>
			<TaskEditShell
				taskId={params.id}
				hideBack
			/>
		</Modal>
	)
}
