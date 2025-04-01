import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumber  data={props.data}/>
      <TaskList  data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
