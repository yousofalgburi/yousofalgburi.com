import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { SandpackCSS } from './blog/[slug]/sandpack'
import { Navbar } from './components/nav'
import './global.css'
import { PreloadResources } from './preload'

export const metadata: Metadata = {
	metadataBase: new URL('https://yousofalgburi.com'),
	title: {
		default: 'Yousof Algburi',
		template: '%s | Yousof Algburi',
	},
	description: 'Developer and a creative.',
	openGraph: {
		title: 'Yousof Algburi',
		description: 'Developer and a creative.',
		url: 'https://yousofalgburi.com',
		siteName: 'Yousof Algburi',
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Yousof Algburi',
		card: 'summary_large_image',
	},
	verification: {
		google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
		yandex: '14d2e73487fa6c71',
	},
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={cx(
				'text-black bg-white dark:text-white dark:bg-[#111010]',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<head>
				<SandpackCSS />
			</head>
			<body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
				<main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
					<Navbar />
					{children}
					<Analytics />
					<SpeedInsights />
					<PreloadResources />
				</main>
			</body>
		</html>
	)
}
