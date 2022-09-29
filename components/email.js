import React from 'react'

function Email() {
  return (
	<div className='flex justify-center w-full items-center -mt-11'>
<div className="mb-3 mx-auto xl:w-1/4 md:w-1/2 -mt-11">
			<input type="text" placeholder="example@email.com" className="p-3 rounded-l-md sm:w-2/3 font-['Manrope'] border-[1px] border-zinc-200 onClick:border-0" />
			<button type="button" className="p-3 bg-[#00ADC2] text-white font-semibold rounded-r-md sm:w-1/3 font-['Manrope'] border-zinc-200 border-t-[0.3px] border-b-[1px] border-r-[1px]">Notify Me</button>
		</div>
		</div>
	
  )
}

export default Email