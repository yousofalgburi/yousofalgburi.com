import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Check out projects I have been working on lately.',
}

export default function BlogPage() {
	return (
		<section>
			<h1 className='font-semibold text-2xl mb-8 tracking-tighter'>latest projects</h1>

			<Link
				href='https://github.com/yousofalgburi/GamesLink'
				target='_blank'
				className='flex flex-col items-center rounded-lg shadow md:flex-row transition-all hover:bg-[#1f1d1d]'
			>
				<img className='w-full rounded-lg object-fit md:h-auto md:w-48' src='/proj1.jpg' alt='' />

				<div className='flex flex-col justify-between p-4 leading-normal'>
					<h5 className='text-neutral-900 dark:text-neutral-100 tracking-tight'>GamseLink</h5>
					<p className='prose prose-neutral dark:prose-invert'>
						A social platform to help gamers find new games to play with friends. Serverless architecture with caching enabled. Built with React, Next.js, Prisma,
						PostgreSQL, Redis, and AWS S3.
					</p>
				</div>
			</Link>
		</section>
	)
}
