import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import {
    RiMailLine,
    RiLockLine,
    RiUserShared2Line,
    RiEyeOffLine,
    RiEyeLine
} from 'react-icons/ri'

export const Login = () => {
    
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        console.log("jajajajaj");
        setShowPassword(!showPassword)
    }


    useEffect(() => {
        if (localStorage.getItem('chat-app-user')) {
            navigate('/')
        }
    }, [])

    return (
        <div className='bg-slate-900 flex items-center justify-center h-screen'>
            <div className='shadow-xl bg-white  p-8 rounded-lg shadow-gray-400/50 place-content-center w-96'>
                <div className='mb-10'>
                    <h1 className='text-3xl uppercase font-bold text-center'>
                        Iniciar seccion
                    </h1>
                </div>
                <form action="" className='flex flex-col gap-4'>
                    <div className='relative'>
                        <RiMailLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-700' />
                        <input
                            type="email"
                            placeholder="Email"
                            className='w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-300'
                            name="username"
                            onChange=""
                        />
                    </div>
                    <div className='relative'>
                        <RiLockLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-700' />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            className='w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-300'
                            name="username"
                            onChange=""
                        />
                        {showPassword ? (
                            <RiEyeOffLine
                                className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer' />
                        ) : (
                            <RiEyeLine
                                onClick={handleShowPassword}
                                className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:cursor-pointer' />
                        )}
                    </div>
                    <button type="submit" className='mt-6 bg-violet-600 text-white w-full py-2 px-6 rounded-lg'>Iniciar Sesion</button>
                    <span className='text-center'>
                        <Link to="/register">
                            Already have
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}
