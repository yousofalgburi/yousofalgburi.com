import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Work',
	description: 'A summary of my work and contributions.'
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
				<ul>
					<li>
						Architect and develop highly scalable, distributed, serverless cloud-native software utilizing
						AWS Lambda, CDK, API Gateway, and dockerized Node.js (TypeScript) applications. Also, convert
						legacy infrastructure to the cloud increasing reliability and performance significantly.
					</li>
					<li>
						Led the work on a cutting-edge distributed SIP system leveraging real-time Text-to-Speech (TTS)
						and Speech-to-Text (STT) capabilities powered by Azure Voice AI, built on the robust Drachtio
						Node.js framework, and a smart AI agent powered by OpenAI API and state machines with prompt
						engineering.
					</li>
					<li>
						Rebuilt an internal leads tool to MVC (ColdFusion, Vue.js) and optimized performance by
						implementing client-side sorting/searching/filtering and reworking massive queries to reduce
						server load by up to 20%, resulting in a 70% increase in initial load speed and significantly
						reducing queries peruse.
					</li>
					<li>
						Engineered a feature-rich, high-performance API for event management, seamlessly integrating
						multiple interrelated endpoints. This API serves as the backbone for hundreds of marketing
						pages, consistently delivering lightning-fast responses with an impressive average response time
						of sub 1 second, ensuring optimal performance and reliability.
					</li>
					<li>
						Transformed a critical account event management page by implementing progressive hydration and
						incremental data loading techniques. This overhaul resulted in a remarkable 50% reduction in
						initial load time, significantly boosting user satisfaction and engagement through a seamless
						and responsive interface.
					</li>
				</ul>

				<hr className='my-6 border-neutral-100 dark:border-neutral-800' />

				<h2 className='font-medium text-xl mb-1 tracking-tighter'>Call Box</h2>
				<p className='text-neutral-600 dark:text-neutral-400 text-sm'>Junior Developer, May 2022 — Nov 2023</p>
				<ul>
					<li>
						Developed highly performant and interactive web applications in a fast-paced environment,
						showcasing expertise in a diverse tech stack including HTML, CSS, JavaScript (Node.js, Vue.js,
						jQuery), ColdFusion, MSSQL, and MongoDB, delivering seamless user experiences across multiple
						projects.
					</li>
					<li>
						Led the transformation of the main product dashboard page, revolutionizing its architecture from
						a cumbersome single file to a highly modular and efficient MVC structure with a RESTful
						ColdFusion API and a Vue.js frontend. This revamp significantly enhanced code readability and
						reduced initial load speed by an impressive 60%, setting a new standard for performance
						optimization.
					</li>
					<li>
						Architected and developed a comprehensive overhaul of the company's internal CSS framework,
						implementing a hand-crafted, drag-and-drop CSS solution that prioritizes consistency,
						lightweight design, and developer productivity. This user-centric framework empowered the team
						to create visually stunning and intuitive interfaces with unparalleled efficiency.
					</li>
					<li>
						Pioneered the architecture design and implementation of a game-changing lead-level system,
						strategically ranking leads based on importance across hundreds of marketing pages. This
						innovative approach directly contributed to a substantial increase in business revenue,
						showcasing the ability to align technical solutions with critical business objectives.
					</li>
				</ul>
			</div>
		</section>
	)
}
