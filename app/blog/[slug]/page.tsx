import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

export const dynamic = 'force-static'

export async function generateMetadata({ params: { slug } }): Promise<Metadata | undefined> {
	const ogImage = ''

	return {
		title: 'Test title',
		description: 'Test Description',
		openGraph: {
			title: 'Test test',
			description: 'Test test',
			type: 'article',
			publishedTime: 'Test test',
			url: `https://yousofalgburi.com/blog/${slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Test test',
			description: 'Test test',
			images: [ogImage],
		},
	}
}

function formatDate(date: string) {
	const currentDate = new Date()
	const targetDate = new Date(date)

	const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
	const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
	const daysAgo = currentDate.getDate() - targetDate.getDate()

	let formattedDate = ''

	if (yearsAgo > 0) {
		formattedDate = `${yearsAgo}y ago`
	} else if (monthsAgo > 0) {
		formattedDate = `${monthsAgo}mo ago`
	} else if (daysAgo > 0) {
		formattedDate = `${daysAgo}d ago`
	} else {
		formattedDate = 'Today'
	}

	const fullDate = targetDate.toLocaleString('en-us', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	})

	return `${fullDate} (${formattedDate})`
}

export default function Blog({ params }) {
	return (
		<section>
			<h1 className='font-semibold text-2xl tracking-tighter max-w-[650px]'>
				<Balancer>Title test</Balancer>
			</h1>

			<div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
				<p className='text-sm text-neutral-600 dark:text-neutral-400'>{formatDate('2023-12-5')}</p>
			</div>
		</section>
	)
}
