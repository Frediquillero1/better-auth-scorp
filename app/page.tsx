import Image from 'next/image'
export default function Home() {
  return (
		<div className='flex flex-col min-h-screen items-center justify-center bg-background p-4'>
			<Image
				className='lg:h-27 lg:w-auto dark:hidden'
				src='/scorpion.svg'
				alt='Scorpion logo'
				width={98}
				height={34}
				priority
			/>
			<Image
				className='hidden lg:h-27 lg:w-auto dark:block'
				src='/scorpion-dark.svg'
				alt='Scorpion logo'
				width={98}
				height={34}
				priority
			/>
			<h1 className='text-2xl font-semibold leading-10 tracking-tight capitalize'>
				Hello, Better-auth-scorp!
			</h1>
		</div>
	)
}
