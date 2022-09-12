import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import about from './about'
import Navbar from '../components/navbar'
import Email from '../components/email'
import Ticker from '../components/ticker'


export default function Home() {
  return (
  <div>
  <Navbar />
<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">
			<span className="text-slate-900	 text-7xl">Coming Soon</span>
		</h1>
		<p className="px-8 mt-8 mb-12">The E1 Investing Competition is a global investing and trading competition for highschool students</p>

	</div>
    <Head>
      <title>Home - E1 Investing Competition</title>
    </Head>
</section>
<Email />
{/* <Ticker /> */}
</div>
)
}
