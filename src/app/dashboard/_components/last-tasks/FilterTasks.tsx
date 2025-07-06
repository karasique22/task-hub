import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select/select'
import { ListFilter } from 'lucide-react'

type FilterType = 'all' | 'done' | 'in-work' | 'not-started'

interface Props {
	filter: FilterType
	setFilter: React.Dispatch<React.SetStateAction<FilterType>>
}

export default function FilterTasks({ filter, setFilter }: Props) {
	return (
		<Select
			value={filter}
			onValueChange={value => setFilter(value as FilterType)}
		>
			<SelectTrigger
				className='border-muted-foreground/30 text-foreground bg-card w-[160px] rounded-full border-2 sm:ml-auto'
				aria-label='Выберите фильтрацию'
			>
				<ListFilter className='mr-2 size-4' />
				<SelectValue />
			</SelectTrigger>

			<SelectContent className='bg-card rounded-xl opacity-100'>
				<SelectItem value='all'>Все</SelectItem>
				<SelectItem value='done'>Готово</SelectItem>
				<SelectItem value='in-work'>В работе</SelectItem>
				<SelectItem value='not-started'>Не начато</SelectItem>
			</SelectContent>
		</Select>
	)
}
