'use client'

import { Search } from 'lucide-react'

import { Input } from '../input/input'

interface Props {
	placeholder?: string
	onChange?: (value: string) => void
	value?: string
}

export default function SearchField({
	placeholder = 'Поиск...',
	onChange,
	value
}: Props) {
	return (
		<div className='bg-input flex w-full max-w-sm items-center rounded-full px-4 py-2 shadow-sm'>
			<Search
				size={28}
				strokeWidth={1.5}
				className='text-muted-foreground mr-2'
			/>
			<Input
				className='border-none text-base shadow-none placeholder:text-base'
				placeholder={placeholder}
				onChange={e => onChange?.(e.target.value)}
				value={value}
			/>
		</div>
	)
}
