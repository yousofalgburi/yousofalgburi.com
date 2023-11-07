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

			<Link href='/blog/clean-code-summary' target='_blank' className='flex flex-col items-center rounded-lg shadow md:flex-row transition-all hover:bg-[#1f1d1d]'>
				<img className='w-full rounded-lg object-fit md:h-auto md:w-48' src='/proj1.jpg' alt='' />

				<div className='flex flex-col justify-between p-4 leading-normal'>
					<h1 className='text-xl text-neutral-900 dark:text-neutral-100 tracking-tight'>Clean Code (Book): A Summary</h1>
					<p className='prose prose-neutral dark:prose-invert'>Read my summary of the book Clean Code.</p>
				</div>
			</Link>
		</section>
	)
}
