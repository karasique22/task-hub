interface Props {
	title: string
}

export default function Page({ title }: Props) {
	return (
		<div className='mb-3 font-medium text-neutral-300 dark:text-neutral-600'>
			{title}
		</div>
	)
}
