import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './e1logo.svg'

function Navbar() {
  return (
	  <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
	<Link href='/'><h1 className='flex items-center p-2 text-black font-[Montserrat] text-[30px] font-bold tracking-widest cursor-pointer'>E1</h1></Link>		
 	</div>
</header>

  )
}

export default Navbar
