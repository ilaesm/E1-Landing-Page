import React from 'react'

function Email() {
  return (
	<div className='flex justify-center w-full items-center'>
<div className="mb-3 mx-auto xl:w-1/4 md:w-1/2 top-1/4">
			<input type="text" placeholder="example@email.com" className="p-3 rounded-l-md sm:w-2/3 font-['DM_Sans']" />
			<button type="button" className="p-3 bg-[#00ADC2] text-white font-semibold rounded-r-md sm:w-1/3  font-['DM_Sans']">Notify Me</button>
		</div>
		</div>
  )
}

export default Email