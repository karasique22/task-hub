import { ChevronDown } from 'lucide-react'

interface Props {
	name: string
	email: string
}

export default function SidebarProfile({ name, email }: Props) {
	return (
		<div className='flex items-center justify-between rounded-full px-2 py-1'>
			<div className='bg-primary h-8 w-8 rounded-full' />
			<div>
				<div className='font-medium'>{name}</div>
				<div className='text-xs opacity-60'>{email}</div>
			</div>
			<div className='ml-1'>
				<ChevronDown
					size={16}
					className='ml-1 opacity-70'
				/>
			</div>
		</div>
	)
}
