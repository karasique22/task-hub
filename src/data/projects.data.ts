import type { IProject } from '@/types/project.types'

import { TASKS } from './tasks.data'

export const PROJECTS: IProject[] = [
	{
		id: '1',
		name: 'Приложение для мобильных устройств',
		color: 'bg-violet-600',
		tasks: [TASKS[0]]
	},
	{
		id: '2',
		name: 'Сайт для компании',
		color: 'bg-pink-300',
		tasks: [TASKS[1]]
	},
	{
		id: '3',
		name: 'Рекламная кампания',
		color: 'bg-yellow-400',
		tasks: [TASKS[2]]
	},
	{
		id: '4',
		name: 'Разработка интерфейса',
		color: 'bg-yellow-500'
	},
	{
		id: '5',
		name: 'Бренд-индексирование',
		color: 'bg-emerald-700'
	}
]
