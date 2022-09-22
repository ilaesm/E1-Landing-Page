import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
<header className="p-4 bg-[#141416] border-b-2 border-[#00ADC2] border-opacity-30">
	<div className="container flex justify-between h-16 mx-auto">
			<Link href='/'><h1 className='flex items-center p-2 text-[#439BBD] font-[Montserrat] text-4xl font-bold tracking-widest cursor-pointer'>E1</h1></Link>
		<ul className="items-stretch space-x-3 md:flex">
			<li className="flex">
			<Link href='/about'><a rel="noopener noreferrer" className="flex items-center px-6 mx-auto -mb-1 text-[#00ADC2] font-['DM_Sans']">About</a></Link>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" className="flex items-center px-7 mx-auto -mb-1 text-[#00ADC2] font-['DM_Sans']" href='https://c1l6nq47gju.typeform.com/to/e1XOGIxS' target="_blank">Positions</a>
			</li>
		</ul>
		
	</div>
</header>

  )
}

export default Navbar
