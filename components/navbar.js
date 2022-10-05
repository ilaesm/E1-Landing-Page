import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './e1logo.svg'

function Navbar() {
  return (
	  <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
	{/* <Image src="/e1logo.svg" height={30} width={30} /> */}
	<Link href='/'><h1 className='flex items-center p-2 text-black font-[Montserrat] text-[30px] font-bold tracking-widest cursor-pointer'>E1</h1></Link>
	<container className="flex items-center space-x-4">
		<ul className="items-stretch  space-x-3 flex">
			<li className="flex">
				<Link href="/about"><a className="flex items-center px-4 -mb-1 text-black">About</a></Link>
			</li>
			<li className="flex">
			<a  rel="noopener noreferrer" href="https://c1l6nq47gju.typeform.com/to/e1XOGIxS" target="_blank" className="flex items-center px-4 -mb-1 text-black">Join us</a>
			</li>
		</ul>
		</container>
		
	</div>
</header>

  )
}

export default Navbar
