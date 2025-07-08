import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { ArrowDownAZ, ArrowDownZA, ArrowUpAZ, ArrowUpZA } from 'lucide-react'

type SortType = 'createdAt' | 'endDate' | 'title'
type Direction = 'asc' | 'desc'

interface Props {
	sortBy: SortType
	setSortBy: React.Dispatch<React.SetStateAction<SortType>>
	direction: Direction
	setDirection: React.Dispatch<React.SetStateAction<Direction>>
}

export default function SortTasks({
	sortBy,
	setSortBy,
	direction,
	setDirection
}: Props) {
	return (
		<div className='relative'>
			<Select
				value={sortBy}
				onValueChange={value => setSortBy(value as SortType)}
			>
				<SelectTrigger
					className='border-muted-foreground/30 text-foreground bg-card flex w-[180px] items-center gap-2 rounded-full border-2 pr-4 pl-10'
					aria-label='Выберите сортировку'
				>
					<SelectValue placeholder='Сортировка' />
				</SelectTrigger>
				<SelectContent className='bg-card rounded-xl'>
					<SelectItem value='createdAt'>По дате создания</SelectItem>
					<SelectItem value='endDate'>По дедлайну</SelectItem>
					<SelectItem value='title'>По названию</SelectItem>
				</SelectContent>
			</Select>

			<button
				className='text-muted-foreground hover:text-foreground after:bg-border absolute top-1/2 left-3 h-full -translate-y-1/2 transition after:absolute after:top-1/2 after:right-[-6px] after:h-4 after:w-px after:-translate-y-1/2'
				type='button'
				onClick={() => setDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))}
				aria-label='Сменить направление сортировки'
			>
				{getSortIcon(direction)}
			</button>
		</div>
	)
}

function getSortIcon(dir: Direction) {
	return dir === 'asc' ? <ArrowUpAZ size={16} /> : <ArrowDownAZ size={16} />
}
