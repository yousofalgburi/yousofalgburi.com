import Image from 'next/image'

export default function Page() {
	return (
		<section>
			<h1 className='font-semibold text-2xl mb-8 tracking-tighter'>hey, I'm Yousof Algburi 👋</h1>
			<p className='prose prose-neutral dark:prose-invert'>
				A self-taught software engineer, then eventually enrolled to earn a B.S. in computer science. Passionate about full-stack engineering and creating things.
			</p>

			<div className='my-8'>
				<div className='relative h-[25rem] mb-4'>
					<Image alt='A picture of yousof algburi smiling' src='/me.jpg' fill sizes='(max-width: 768px) 213px, 33vw' priority className='rounded-lg object-cover' />
				</div>
			</div>
		</section>
	)
}
