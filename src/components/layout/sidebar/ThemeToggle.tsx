'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
	const { setTheme, theme, resolvedTheme } = useTheme()

	const isDark = theme === 'dark' || resolvedTheme === 'dark'

	return (
		<button
			onClick={() => setTheme(isDark ? 'light' : 'dark')}
			className='bg-muted mx-auto mt-10 flex h-8 w-8 items-center justify-center rounded-full'
			aria-label='Сменить тему'
		>
			{isDark ? (
				<Sun size={20} />
			) : (
				<Moon
					size={20}
					strokeWidth={1.5}
				/>
			)}
		</button>
	)
}
