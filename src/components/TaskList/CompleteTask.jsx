import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[400px] bg-red-400 rounded-lg p-5'>
    <div className='flex justify-between items-center'>
       <h2 className='bg-red-500 px-2 py-1 text-sm rounded'>{data.category}</h2>
       <h3 className='text-base'>{data.taskdate}</h3>
    </div>
    <h2 className='text-2xl font-semibold mt-6'> {data.taskTitle}</h2>

     <p className='text-sm mt-2'>{data.taskDescription}</p>
<div className='mt-4'>
    <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>completed</button>
</div>
   </div>
  )
}

export default CompleteTask
