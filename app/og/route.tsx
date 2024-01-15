import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl
	const postTitle = searchParams.get('title')

	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					backgroundColor: '#111010',
				}}
			>
				<div
					style={{
						fontFamily: 'Arial, sans-serif',
						color: 'white',
					}}
				>
					{postTitle}
				</div>
			</div>
		)
	)
}
