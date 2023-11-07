import Balancer from 'react-wrap-balancer'
export const dynamic = 'force-static'

export async function generateMetadata() {
	const ogImage = '/clean-code.jpg'

	return {
		title: 'Clean Code Summary',
		description: 'A summary of the book Clean Code',
		openGraph: {
			title: 'Clean Code book',
			description: 'Clean Code book summary',
			type: 'article',
			publishedTime: '11/07/2023',
			url: `https://yousofalgburi.com/blog/clean-code-summary`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Clean Code',
			description: 'A summary of the book Clean Code',
			images: [ogImage],
		},
	}
}

export default function Blog({ params }) {
	return (
		<section>
			<h1 className='font-semibold text-2xl tracking-tighter max-w-[650px]'>
				<Balancer>Clean Code (book): A Summary</Balancer>
			</h1>

			<div className='flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]'>
				<p className='text-sm text-neutral-600 dark:text-neutral-400'>11/07/2023</p>
			</div>
		</section>
	)
}
