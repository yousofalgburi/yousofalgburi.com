import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
}

export default function BlogPage() {
	return (
		<section>
			<h1 className='font-semibold text-2xl mb-8 tracking-tighter'>read my blog</h1>

			<h2 className='font-semibold text-lg mb-8 tracking-tighter'>(under construction)</h2>

			{/* <Link key='test' className='flex flex-col space-y-1 mb-4' href={'/blog/test'}>
				<div className='w-full flex flex-col'>
					<p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>Test 1</p>
				</div>
                </Link> */}
		</section>
	)
}
