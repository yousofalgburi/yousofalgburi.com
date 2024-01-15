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
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundImage: 'url(https://yousofalgburi.com/og-bg.png)',
				}}
			>
				<div
					style={{
						textAlign: 'center',
						fontSize: 100,
						fontFamily: 'Arial, sans-serif',
						color: 'white',
						lineHeight: '110px',
						padding: '0 20px',
					}}
				>
					{postTitle}
				</div>
			</div>
		),
		{
			width: 1920,
			height: 1080,
		}
	)
}
