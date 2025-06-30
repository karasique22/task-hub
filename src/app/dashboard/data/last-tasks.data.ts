import type { ITask } from '@/types/task.types'
import { AppWindow, Megaphone, Smartphone } from 'lucide-react'

import { USERS } from './users.data'

export const TASKS: ITask[] = [
	{
		id: '1',
		title: 'Приложение для мобильных устройств',
		icon: Smartphone,
		endDate: new Date('2025-07-30'),
		users: [USERS[0], USERS[1], USERS[2]],
		subTasks: [
			{ id: '1', title: 'Создание интерфейса', isCompleted: true },
			{ id: '2', title: 'Добавление функциональности', isCompleted: true },
			{ id: '3', title: 'Тестирование', isCompleted: false },
			{ id: '4', title: 'Документация', isCompleted: false }
		],
		comments: ['', '', ''],
		attachments: ['', '', '', '', '', ''],
		links: ['', '']
	},
	{
		id: '2',
		title: 'Сайт для компании',
		icon: AppWindow,
		endDate: new Date('2025-08-02'),
		users: [USERS[3], USERS[4], USERS[5]],
		subTasks: [{ id: '1', title: 'Создание интерфейса', isCompleted: true }],
		comments: ['', '', ''],
		attachments: ['', '', '', '', '', ''],
		links: ['', '']
	},
	{
		id: '3',
		title: 'Рекламная кампания',
		icon: Megaphone,
		endDate: new Date('2025-07-02'),
		users: [USERS[6], USERS[7], USERS[8]],
		subTasks: [
			{ id: '1', title: 'Создание интерфейса', isCompleted: true },
			{ id: '2', title: 'Добавление функциональности', isCompleted: true },
			{ id: '3', title: 'Тестирование', isCompleted: true },
			{ id: '4', title: 'Документация', isCompleted: true },
			{ id: '5', title: 'Тестирование', isCompleted: false }
		],
		comments: ['', '', ''],
		attachments: ['', '', '', '', '', ''],
		links: ['', '']
	}
]
