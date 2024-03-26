function ArrowIcon() {
	return (
		<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
				fill='currentColor'
			/>
		</svg>
	)
}

function BlogLink({ slug, name }) {
	return (
		<div className='group'>
			<a
				href={`/blog/${slug}`}
				className='border border-neutral-200 dark:border-zinc-700 bg-neutral-50 dark:bg-zinc-900 rounded flex items-center justify-between px-3 py-4 w-full'
			>
				<div className='flex flex-col'>
					<p className='font-medium text-neutral-900 dark:text-neutral-100'>{name}</p>
				</div>
				<div className='text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12'>
					<ArrowIcon />
				</div>
			</a>
		</div>
	)
}

export default function Page() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tighter'>Hello, I'm Yousof.</h1>

			<p className='prose prose-neutral dark:prose-invert'>
				A full stack developer and creative. I currently work as a full stack developer at Call Box where I
				build exciting projects for the web. I'm also a freelancer and consultant, helping businesses with great
				software. I also build and sell apps from scratch, currently building GamesLink.
			</p>

			<div className='prose prose-neutral dark:prose-invert'>
				<p>
					I create content on YouTube, Twitter, and my blog. I also read books often and write about them on
					my blog.
				</p>
			</div>

			<div className='my-8 flex flex-col space-y-4 w-full'>
				<BlogLink name='Clean Code: A Comprehensive Book Summary' slug='clean-code-review' />
				<BlogLink name='How to Effectively Use LeetCode' slug='how-to-effectively-use-leetcode' />
				<BlogLink name='TypeScript Magic' slug='typescript-magic' />
			</div>

			<ul className='flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300'>
				<li>
					<a
						className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all'
						rel='noopener noreferrer'
						target='_blank'
						href='https://twitter.com/yousof_dev'
					>
						<ArrowIcon />
						<p className='h-7 ml-2'>Follow me</p>
					</a>
				</li>

				{/* <li>
					<a
						className='flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all'
						rel='noopener noreferrer'
						target='_blank'
						href='substack.com'
					>
						<ArrowIcon />
						<p className='h-7 ml-2'>get email updates</p>
					</a>
				</li> */}
			</ul>
		</section>
	)
}
