import type { Metadata } from 'next'
import { RESUME_DATA } from '@/data/resume-data'

export const metadata: Metadata = {
	title: RESUME_DATA.name,
	description: RESUME_DATA.about,
}

export default function Page() {
	return (
		<main className='flex min-h-svh items-center justify-center p-4'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>{RESUME_DATA.name}</h1>
				<p className='mt-4 text-lg text-muted-foreground sm:text-xl'>{RESUME_DATA.about}</p>
			</div>
		</main>
	)
}
