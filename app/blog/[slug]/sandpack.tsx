'use client'

import { getSandpackCssText } from '@codesandbox/sandpack-react'
import { useServerInsertedHTML } from 'next/navigation'
import React from 'react'

export function SandpackCSS() {
	useServerInsertedHTML(() => {
		const cssText = getSandpackCssText()
		const styleElement = document.createElement('style')
		styleElement.textContent = cssText
		styleElement.id = 'sandpack'
		document.head.appendChild(styleElement)
		return <></>
	})
	return null
}
