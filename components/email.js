import React from 'react'

function Email() {
  return (
<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 bg-blue-600 text-white font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Notify Me</button>
		</div>
  )
}

export default Email