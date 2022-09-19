import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
<header className="p-4 bg-[#141416] border-b-2 border-slate-800	">
	<div className="container flex justify-between h-16 mx-auto">
			<Link href='/'><h1 className='flex items-center p-2 text-blue-600 text-4xl font-bold'>E1</h1></Link>
		<ul className="items-stretch space-x-3 md:flex">
			<li className="flex">
			<Link href='/about'><a rel="noopener noreferrer" className="flex items-center px-4 -mb-1 text-blue-600 font-['DM_Sans']">About</a></Link>
			</li>
			<li className="flex">
				<Link href='/positions'><a rel="noopener noreferrer" className="flex items-center px-4 -mb-1 text-blue-600 font-['DM_Sans']">Positions</a></Link>
			</li>
		</ul>
		
	</div>
</header>

  )
}

export default Navbar
