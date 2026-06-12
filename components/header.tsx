import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import { ModeSwitcher } from './mode-switcher'

export default function Header() {
	return (
		<header className='absolute top-0 p-4 w-full flex items-center jutify-between'>
			<div className='flex items-center gap-5'>
				<Link href='/'>
					<div className='flex items-center'>
						<Image
							className='lg:h-12 lg:w-auto dark:hidden'
							src='/scorpion.svg'
							alt='Scorpion logo'
							width={100}
							height={100}
							priority
						/>
						<Image
							className='hidden lg:h-12 lg:w-auto dark:block'
							src='/scorpion-dark.svg'
							alt='Scorpion logo'
							width={100}
							height={100}
							priority
						/>
					</div>
				</Link>
				{/* <ModeToggle /> */}
				<ModeSwitcher />
			</div>
		</header>
	)
}
