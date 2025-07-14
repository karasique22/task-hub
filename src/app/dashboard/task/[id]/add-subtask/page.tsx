import AddSubtaskShell from '@/components/task-edit/AddSubtaskShell'

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params
	return <AddSubtaskShell taskId={params.id} />
}
