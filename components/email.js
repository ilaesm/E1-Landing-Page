import React from 'react'

function Email() {
  return (
<div className=" fle mx-auto w-2/6">
			<input type="text" placeholder="example@email.com" className="p-3 rounded-l-md sm:w-2/3 font-['DM_Sans']" />
			<button type="button" className="p-3 bg-blue-600 text-white font-semibold rounded-r-md sm:w-1/3 dark:bg-violet-400 dark:text-gray-900 font-['DM_Sans']">Notify Me</button>
		</div>
  )
}

export default Email