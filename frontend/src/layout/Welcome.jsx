import React, {useEffect} from 'react'
import Robot from '../assets/robot.gif'

export const Welcome = ({ currentUser }) => {
   
    // useEffect(() =>{
    //     alert(currentUser);
    // },[])

  return (
    <div className='col-span-3 flex justify-center items-center flex-col text-white'>
        <img src={Robot} alt="" className='h-[20rem]' />
        <h1>
            Welcome <span className='bg-slate-600'>{currentUser.username}</span>
        </h1>
        <h3>Plase slect a chat to start message</h3>
    </div>
  )
}
