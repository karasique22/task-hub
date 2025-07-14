import AddSubtaskShell from '@/components/task-edit/AddSubtaskShell'
import Modal from '@/components/ui/modal/Modal'

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    return (
		<Modal dialogTitle='Новая подзадача'>
			<AddSubtaskShell
				taskId={params.id}
				hideBack
			/>
		</Modal>
	)
}
