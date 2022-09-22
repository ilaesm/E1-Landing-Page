import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import about from './about'
import Navbar from '../components/navbar'
import Email from '../components/email'
import Ticker from '../components/ticker'
import Typewriter from 'typewriter-effect'


export default function Home() {
  return (
  <div>
  <Navbar />
<section className="dark:bg-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
    <div className="text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-500 to-cyan-300 font-bold text-7xl font-['DM_Sans'] grow pb-6">
  <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('Investing')
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString('Trading')
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString("Finance")
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString('Experience')
      .pauseFor(700)
      .deleteAll()
      typewriter.typeString('Coming soon')
      .stop()
      .start()    
  }}
/>
</div>
		{/* <p className="px-8 mt-8 mb-12 text-[#b5b5b5] font-['DM_Sans'] font-lg mt-9 ">The E1 Investing Competition is a global investing competition for highschool students</p> */}
		<p className="px-8 mt-8 mb-12 text-[#b5b5b5] font-['DM_Sans'] font-lg mt-9 ">Info Info Info Info Info Info Info Info Info Info </p>
	</div>
    <Head>
      <title>Home - E1 Investing Competition</title>
    </Head>
</section>
<Email />
<Ticker />
</div>
)
}
