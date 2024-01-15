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
					Since joining Call Box as a remote Full-Stack Developer, I've been instrumental in developing
					responsive, mobile-friendly web applications using HTML, CSS, and JavaScript (Vue.js). My
					contributions have led to a positive increase in user engagement.
				</p>
				<ul>
					<li>
						My efforts in transforming the main index page from a bulky 4000-line file to a streamlined,
						modular MVC framework improved code readability and initial page load times by 50%.
					</li>
					<li>
						I initiated and guided the upgrade of API security measures, implementing user token protocols
						that increased API security vastly and removed the need for human intervention.
					</li>
					<li>
						Managed a comprehensive refactoring of our internal CSS framework resulting in a constant drag
						and drop CSS framework that is light weight, developer friendly and user experinece focused.
					</li>
					<li>
						I enhanced new hire onboarding and technical guidance, improving their ramp-up efficiency by
						covering a more comprehensive overview of my tech stack. I work closely with product managers
						and stakeholders, aligning technical strategies with business goals, which boosted project
						delivery efficiency drastically.
					</li>
				</ul>

				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />

				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Call Box</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>Junior Developer, May 2022 — Nov 2023</p>
				<p>
					At the onset of my career with Call Box as a Junior Developer, I played a key role in developing
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
					As a Freelance Full Stack Developer, I've crafted complex websites with intricate customization
					logic. These projects involved advanced image and product management, skillfully utilizing the
					Shopify API to augment e-commerce capabilities. My work focused on delivering high-quality, dynamic
					user experiences and streamlined product workflows, reflecting a deep understanding of both frontend
					and backend development in the e-commerce domain.
				</p>
			</div>
		</section>
	)
}
