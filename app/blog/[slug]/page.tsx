import { CustomMDX } from '@/components/mdx'
import { getBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'
import { unstable_noStore as noStore } from 'next/cache'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
	const post = getBlogPosts().find((post) => post.slug === params.slug)
	if (!post) {
		return
	}

	const { title, publishedAt: publishedTime, summary: description, image } = post.metadata
	const ogImage = image ? `https://yousofalgburi.com${image}` : `https://yousofalgburi.com/og?title=${title}`

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://yousofalgburi.com/blog/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

function formatDate(date: string) {
	noStore()
	const currentDate = new Date()
	const normalizedDate = date.includes('T') ? date : `${date}T00:00:00`
	const targetDate = new Date(normalizedDate)

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

export default function Page({ params }: { params: { slug: string } }) {
	const post = getBlogPosts().find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<section className='max-w-2xl mx-auto px-4 py-16'>
			<script type='application/ld+json' suppressHydrationWarning>
				{JSON.stringify({
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: post.metadata.title,
					datePublished: post.metadata.publishedAt,
					dateModified: post.metadata.publishedAt,
					description: post.metadata.summary,
					image: post.metadata.image
						? `https://yousofalgburi.com${post.metadata.image}`
						: `https://yousofalgburi.com/og?title=${post.metadata.title}`,
					url: `https://yousofalgburi.com/blog/${post.slug}`,
					author: {
						'@type': 'Person',
						name: 'Yousof Algburi',
					},
				})}
			</script>
			<h1 className='text-3xl font-bold mb-4'>{post.metadata.title}</h1>
			<div className='mb-8 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400'>
				<p>{formatDate(post.metadata.publishedAt)}</p>
			</div>
			<article className='prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-p:text-gray-800 dark:prose-p:text-gray-200 prose-img:rounded-xl'>
				<CustomMDX source={post.content} />
			</article>
		</section>
	)
}
