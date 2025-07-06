import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { ReactElement } from 'react'

interface Props {
	variant: 'primary' | 'secondary'
	buttonImage: ReactElement
	link?: string
}

export default function TaskButton({ variant, buttonImage, link }: Props) {
	return (
		<Link
			className={cn(
				'relative flex size-8 items-center justify-center rounded-full',
				variant === 'primary' && 'bg-primary',
				variant === 'secondary' && 'border-primary border-2'
			)}
			href={link || '#'}
		>
			<div
				className={cn(
					variant === 'primary' && 'text-white',
					variant === 'secondary' && 'text-primary'
				)}
			>
				{buttonImage}
			</div>
		</Link>
	)
}
