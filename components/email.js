import React from 'react'
import { useState } from 'react';

function Email() {

//event handler function to set input value to email state
	const handleEmail = (e) => {
		const {type, value} = e.target;
		if(type == "email") {
			setEmail(value);
		}
	}
//State for email
	const [email, setEmail] = useState(null);
	
//Component Start
  return (
	<div className='flex justify-center w-full items-center -mt-12'>
<div className="mb-3 mx-auto xl:w-1/4 md:w-1/2 -mt-11">
			<input type="email" placeholder="example@email.com" className="p-3 rounded-l-md sm:w-2/3 font-['Manrope'] border-[1px] !outline-none border-zinc-200" />
			<button type="submit" className="p-3 bg-[#00ADC2] text-white font-semibold rounded-r-md sm:w-1/3 font-['Manrope'] border-zinc-200 border-t-[0.3px] border-b-[1px] border-r-[1px]">Notify Me</button>
		</div>
		</div>
	
  )
}

export default Email