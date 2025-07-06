import type { ITask } from '@/types/task.types'
import {
	AppWindow,
	Briefcase,
	Brush,
	Cloud,
	LayoutDashboard,
	Megaphone,
	MonitorCheck,
	Rocket,
	Smartphone
} from 'lucide-react'

import { USERS } from './users.data'

export const TASKS: ITask[] = [
	{
		id: '1',
		projectId: '1',
		title: 'Создание интерфейса',
		createdAt: new Date('2025-06-12'),
		endDate: new Date('2025-07-30'),
		icon: Smartphone,
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
		projectId: '2',
		title: 'Верстка главной страницы',
		createdAt: new Date('2025-06-10'),
		endDate: new Date('2025-08-02'),
		icon: AppWindow,
		users: [USERS[3], USERS[4], USERS[5]],
		subTasks: [{ id: '1', title: 'Создание интерфейса', isCompleted: true }],
		comments: ['', '', '', '', ''],
		attachments: ['', '', ''],
		links: ['', '', '', '']
	},
	{
		id: '3',
		projectId: '3',
		title: 'Оценка отклика',
		createdAt: new Date('2025-05-28'),
		endDate: new Date('2025-07-02'),
		icon: Megaphone,
		users: [USERS[6], USERS[7], USERS[8]],
		subTasks: [
			{ id: '1', title: 'Создание концепции', isCompleted: true },
			{ id: '2', title: 'Адаптация под соцсети', isCompleted: true },
			{ id: '3', title: 'Запуск тизеров', isCompleted: true },
			{ id: '4', title: 'Оценка отклика', isCompleted: true },
			{ id: '5', title: 'Повторное тестирование', isCompleted: false }
		],
		comments: ['', '', '', ''],
		attachments: ['', '', '', '', '', '', ''],
		links: ['', '', '', '', '']
	},
	{
		id: '4',
		projectId: '4',
		title: 'Обновление UI-компонентов',
		createdAt: new Date('2025-06-17'),
		endDate: new Date('2025-08-01'),
		icon: Brush,
		users: [USERS[1], USERS[4]],
		subTasks: [
			{ id: '1', title: 'Переработка кнопок', isCompleted: true },
			{ id: '2', title: 'Обновление карточек', isCompleted: false },
			{ id: '3', title: 'Внедрение новой палитры', isCompleted: false }
		],
		comments: ['', ''],
		attachments: ['', '', '', ''],
		links: ['']
	},
	{
		id: '5',
		projectId: '5',
		title: 'Анализ конкурентов',
		createdAt: new Date('2025-06-20'),
		endDate: new Date('2025-07-22'),
		icon: Briefcase,
		users: [USERS[2], USERS[5], USERS[9]],
		subTasks: [
			{ id: '1', title: 'Сбор информации', isCompleted: true },
			{ id: '2', title: 'Сравнительный анализ', isCompleted: false }
		],
		comments: ['', '', ''],
		attachments: ['', '', ''],
		links: ['', '', '']
	},
	{
		id: '6',
		projectId: '4',
		title: 'Разработка панели управления',
		createdAt: new Date('2025-06-14'),
		endDate: new Date('2025-07-25'),
		icon: LayoutDashboard,
		users: [USERS[0], USERS[7]],
		subTasks: [
			{ id: '1', title: 'Создание схемы UI', isCompleted: false },
			{ id: '2', title: 'Интеграция с API', isCompleted: false }
		],
		comments: [''],
		attachments: [],
		links: ['', '']
	},
	{
		id: '7',
		projectId: '5',
		title: 'Создание лендинга бренда',
		createdAt: new Date('2025-06-11'),
		endDate: new Date('2025-08-10'),
		icon: Rocket,
		users: [USERS[1], USERS[6]],
		subTasks: [
			{ id: '1', title: 'Проектирование структуры', isCompleted: true },
			{ id: '2', title: 'Наполнение контентом', isCompleted: true },
			{ id: '3', title: 'UI-анимации', isCompleted: false }
		],
		comments: ['', '', ''],
		attachments: ['', '', '', ''],
		links: ['', '', '']
	},
	{
		id: '8',
		projectId: '4',
		title: 'Миграция в облако',
		createdAt: new Date('2025-06-05'),
		endDate: new Date('2025-07-31'),
		icon: Cloud,
		users: [USERS[8], USERS[3]],
		subTasks: [
			{ id: '1', title: 'Настройка AWS', isCompleted: false },
			{ id: '2', title: 'Перенос базы данных', isCompleted: false }
		],
		comments: [''],
		attachments: [''],
		links: ['']
	},
	{
		id: '9',
		projectId: '5',
		title: 'Проверка качества отображения',
		createdAt: new Date('2025-06-08'),
		endDate: new Date('2025-07-18'),
		icon: MonitorCheck,
		users: [USERS[4], USERS[5]],
		subTasks: [
			{ id: '1', title: 'Кроссбраузерное тестирование', isCompleted: true },
			{ id: '2', title: 'Тестирование на мобильных', isCompleted: false }
		],
		comments: [],
		attachments: ['', ''],
		links: ['', '']
	}
]
