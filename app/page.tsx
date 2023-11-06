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

			<h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Experience</h1>

			<ol className='relative border-l border-gray-200 dark:prose-invert'>
				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:prose-invert'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>May 2022 - Present</time>
					<h3 className='font-semibold text-lg tracking-tighter'>Junior developer</h3>
					<p className='prose prose-neutral dark:prose-invert'>
						Develop responsive, mobile-friendly web applications using HTML, CSS, JavaScript (Vue.js) for dynamic components and complex features (state management,
						routing, and API integration). As well as complex APIs and backend features using Node.js, SQL (SSMS), MongoDB, and ColdFusion (writing and modifying
						queries, adjusting server side code).
					</p>
				</li>

				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:prose-invert'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>May 2023 - Present</time>
					<h3 className='font-semibold text-lg tracking-tighter'>Freelance full-stack developer</h3>
					<p className='prose prose-neutral dark:prose-invert'>
						Build custom software for individuals/companies. Collect requirments and implement frontend/backend using a variety of technologies.
					</p>
				</li>
			</ol>

			<h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Education</h1>

			<ol className='relative border-l border-gray-200 dark:prose-invert'>
				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:prose-invert'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>May 2020 - May 2024</time>
					<h3 className='font-semibold text-lg tracking-tighter'>Virginia Tech - College of Engineering</h3>
					<p className='prose prose-neutral dark:prose-invert'>B.S. in Computer Science</p>
				</li>

				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:prose-invert'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>December 2023 - Expected</time>
					<h3 className='font-semibold text-lg tracking-tighter'>AWS Developer Certificate</h3>
				</li>

				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:prose-invert'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>May 2022</time>
					<h3 className='font-semibold text-lg tracking-tighter'>React - The Complete Guide - Maximilian Schwarzmüller</h3>
				</li>

				<li className='mb-10 ml-4'>
					<div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:prose-invert'></div>
					<time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>December 2021</time>
					<h3 className='font-semibold text-lg tracking-tighter'>The Web Developer Bootcamp - Colt Steele</h3>
				</li>
			</ol>
		</section>
	)
}
