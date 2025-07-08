import TaskEditShell from '@/components/task-edit/TaskEditShell'
import Modal from '@/components/ui/modal/Modal'

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    return (
		<Modal dialogTitle='Редактирование задачи'>
			<TaskEditShell
				taskId={params.id}
				hideBack
			/>
		</Modal>
	)
}
