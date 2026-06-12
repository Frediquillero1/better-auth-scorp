'use client'
import * as React from 'react'
import { HugeiconsIcon, MoonIcon, SunIcon } from '@hugeicons/core-free-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={
					<Button variant='outline' size='icon'>
						<HugeiconsIcon
							icon={SunIcon}
							strokeWidth={2}
							className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
						/>
						<HugeiconsIcon
							icon={MoonIcon}
							strokeWidth={2}
							className='absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:scale-100 dark:rotate-0'
						/>
						<span className='sr-only'>Toggle theme</span>
					</Button>
				}
			/>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')}>
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')}>
					Dark
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
