import React from 'react'
import { Alert } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline"

const Message = ({ variant, children }) => {
  return( <div id='alert-1' className='flex p-4 mb-4 rounded-lg'> <Alert 
   icon={
    <InformationCircleIcon
      strokeWidth={2}
      className="h-6 w-6"
    />} variant={variant}>{children}</Alert>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button></div>)
}

Message.defaultProps = {
  variant: 'info',
}


export default Message