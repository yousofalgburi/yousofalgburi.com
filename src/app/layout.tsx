import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
	title: 'Yousof Algburi',
	description: 'Software Engineer',
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html lang='en' className={inter.className}>
			<body>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
			<Analytics />
		</html>
	)
}
