import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiPowerOff } from "react-icons/bi";


export const Logout = () => {
    const navigate = useNavigate()

    const handleClick =() =>{
        localStorage.clear()
        navigate('/login')
    }
  return (
    <button onClick={handleClick} className='flex justify-center items-center p-2 rounded-lg bg-slate-500 border-none cursor-pointer'>
        <BiPowerOff className='text-white'/>
    </button>
  )
}
