import TaskEditShell from '@/components/task-edit/TaskEditShell'

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    return <TaskEditShell taskId={params.id} />
}
