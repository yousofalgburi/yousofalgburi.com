import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Work',
	description: 'A summary of my work and contributions.',
}

export default function WorkPage() {
	return (
		<section>
			<h1 className='font-medium text-2xl mb-8 tracking-tighter'>My work</h1>
			<div className='prose prose-neutral dark:prose-invert'>
				<p>
					Incredibly ambitious and passionate about creating and building things. On a life long mission to
					never stop learning.
				</p>

				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />

				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Call Box</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Full Stack Developer, Nov 2023 — Present
				</p>
				<p>
					Since being promoted at Call Box to Full-Stack Developer, I've been a key player in developing
					responsive, mobile-friendly web applications using HTML, CSS, and JavaScript (Vue.js) and performant
					and highly scalable backends.
				</p>
				<ul>
					<li>
						My efforts in transforming the main index page from a bulky 4000-line file to a streamlined,
						modular MVC framework improved code readability and initial page load times by 50%.
					</li>

					<li>
						A rebuild of a major internal tool increasing performance by 70% and requiring ~15x less
						queries.
					</li>

					<li>
						Developed an API for internal event management with stellar performance and readability with an
						average 2-3 second response time.
					</li>

					<li>
						Managed a comprehensive refactoring of our internal CSS framework resulting in a consistent,
						drag and drop CSS framework that is light-weight, developer friendly and user experinece
						focused.
					</li>

					<li>
						A leader mindset, helping new hires onboard quicker with technical guidance improving their
						developer experience at the company.
					</li>

					<li>
						I work closely with product managers and stakeholders, aligning technical strategies with
						business goals, boosting project output and producing less error prone development pipelines.
					</li>
				</ul>

				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />

				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Call Box</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>Junior Developer, May 2022 — Nov 2023</p>
				<p>
					At the start of my career with Call Box as a Junior Developer, I played a key role in developing
					responsive, mobile-friendly web applications, using the same technologies. This period was marked by
					a similar increase in user engagement and the implementation of complex features like state
					management and routing.
				</p>

				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />

				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Self Employed / Freelancer</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>
					Full Stack Developer, May 2023 — Present
				</p>

				<p>
					Develop websites for clients using vanilla JavaScript/jQuery/Vue.js/React.js integrating into
					shopify’s API. Implemented custom solutions like product customization, image management and mobile
					friendly design. Examples: chromacards.com, myhousenumber.com.
				</p>
			</div>
		</section>
	)
}
