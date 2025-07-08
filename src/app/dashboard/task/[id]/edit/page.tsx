import TaskEditShell from '@/components/task-edit/TaskEditShell'

export default function Page({ params }: { params: { id: string } }) {
	return <TaskEditShell taskId={params.id} />
}
