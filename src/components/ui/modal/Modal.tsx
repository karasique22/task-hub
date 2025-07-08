'use client'

import { Dialog, DialogContent } from '@/components/ui/dialog/dialog'
import { DialogTitle } from '@radix-ui/react-dialog'
import { useRouter } from 'next/navigation'

interface Props {
	children: React.ReactNode
	dialogTitle: string
	className?: string
}

export default function Modal({ children, dialogTitle, className }: Props) {
	const router = useRouter()
	return (
		<Dialog
			defaultOpen
			open
			onOpenChange={() => router.back()}
		>
			<DialogContent className={className}>
				<DialogTitle>{dialogTitle}</DialogTitle>
				{children}
			</DialogContent>
		</Dialog>
	)
}
