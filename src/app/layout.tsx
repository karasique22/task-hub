import { SITE_NAME } from '@/constants/seo'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import Providers from './Providers'
import './globals.css'

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	icons: {
		icon: '/images/favicon.svg',
		shortcut: '/images/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s - ${SITE_NAME}`
	},
	description: 'Task Hub web app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			suppressHydrationWarning
		>
			<body className={`${manrope.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
