import React from 'react'
import { ChevronRight } from 'lucide-react'

const WorkExperience = () => {
	return (
		<section className='mx-auto p-4'>
			<h1 className='text-3xl font-bold mb-6'>My work</h1>
			<p className='mb-8 text-lg'>
				Incredibly ambitious and passionate about creating and building things. On a life long mission to never stop learning.
			</p>

			<div className='space-y-8'>
				<div className=' rounded-lg'>
					<h2 className='text-2xl font-semibold mb-2'>Call Box</h2>
					<div className='flex items-center text-sm mb-4'>
						<span>Junior Developer</span>
						<ChevronRight className='w-4 h-4 mx-2' />
						<span>Software Engineer</span>
						<ChevronRight className='w-4 h-4 mx-2' />
						<span>Software Engineer / Tech Lead</span>
					</div>
					<p className='text-sm '>
						May 2022 — Present ({Math.floor((new Date().getTime() - new Date(2022, 5).getTime()) / (1000 * 60 * 60 * 24 * 30 * 12))}{' '}
						years,{' '}
						{Math.ceil(
							((new Date().getTime() - new Date(2022, 5).getTime()) % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30),
						)}{' '}
						months)
					</p>
					<ul className='list-disc pl-6 space-y-3'>
						<li>
							Architected and developed scalable, distributed, serverless microservices using AWS and dockerized Node.js (TypeScript)
							applications. Implemented automated deployment pipelines with infrastructure as code (IaC) and optimized microservice
							communication for improved performance and reduced latency.
						</li>
						<li>
							Engineered a distributed SIP system with a Node.js docker instance acting as the controller, built with OOP principles.
							Managed communication with instances for TTS and STT, leveraging Azure Voice AI and the Drachtio Node.js framework.
						</li>
						<li>
							Rebuilt an internal leads tool to MVC (Node.js, Vue.js) and optimized performance by implementing client-side
							sorting/searching/filtering and reworking massive queries to reduce server load by up to 20%, resulting in a 70% increase
							in initial load speed and significantly reducing queries peruse.
						</li>
						<li>
							Engineered a robust caching infrastructure serving multiple distributed systems, incorporating Step Functions,
							EventBridge, Lambdas, and API Gateways. The system efficiently caches, throttles, pages, and normalizes API calls,
							enhancing reliability and efficiency. Directed the orchestration, development, and deployment, achieving significant
							improvements in API call latency. This infrastructure was used to build an API that provides near real-time access to
							data, successfully mitigating the original lengthy delay from the data source, resulting in a reliable, fast, and vastly
							improved system.
						</li>
						<li>
							Transformed a critical account event management page by implementing progressive hydration and incremental data loading
							techniques. This overhaul resulted in a remarkable 50% reduction in initial load time, significantly boosting user
							satisfaction through a seamless and responsive interface.
						</li>
						<li>
							Led the transformation of the main product dashboard page, revolutionizing its architecture from a cumbersome single file
							to a highly modular and efficient MVC structure with a RESTful API and a Vue.js frontend. This revamp significantly
							enhanced code readability and reduced initial load speed by an impressive 60%, setting a new standard for performance
							optimization.
						</li>
						<li>
							Architected and developed a comprehensive overhaul of the company's internal CSS framework, implementing a hand-crafted,
							drag-and-drop CSS solution that prioritizes consistency, lightweight design, and developer productivity. This user-centric
							framework empowered the team to create visually stunning and intuitive interfaces with unparalleled efficiency.
						</li>
						<li>
							Pioneered the architecture design and implementation of a game-changing lead-level system, strategically ranking leads
							based on importance across hundreds of marketing pages. This innovative approach directly contributed to a substantial
							increase in business revenue, showcasing the ability to align technical solutions with critical business objectives.
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default WorkExperience
