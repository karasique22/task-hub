export const BASE = '/dashboard' as const

export const Pages = {
	BASE,
	DASHBOARD: BASE,
	MESSAGES: `${BASE}/messages`,
	INSIGHT: `${BASE}/insight`,
	TEAM: `${BASE}/team`,
	SCHEDULE: `${BASE}/schedule`,
	REPORT: `${BASE}/report`,
	SETTINGS: `${BASE}/settings`,

	TASK_EDIT: `${BASE}/task/{id}/edit`,
	ADD_SUBTASK: `${BASE}/task/{id}/add-subtask`
} as const

export type PagePath = (typeof Pages)[keyof typeof Pages]
