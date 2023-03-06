import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { toastOptions } from "../utils/AlertToast";
import { setRegisterRoute } from "../utils/ApiRouters";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {
    RiMailLine,
    RiLockLine,
    RiUserShared2Line,
    RiEyeOffLine,
    RiEyeLine
} from 'react-icons/ri'


export const Register = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(values);
        await axios.post(setRegisterRoute , values)
            .then(({data}) => {
                console.log(data.data);
                toast.success(data.msg, toastOptions)
                localStorage.setItem('chat-app-user', JSON.stringify(data.data))
                navigate('/')
            }).catch(err => {
                console.log(err.response.data);
                toast.error(err.response.data.msg, toastOptions)
            })
    }


    useEffect(() =>{
      if(localStorage.getItem('chat-app-user')){
        navigate('/')
      }
    },[])

    return (
        <div className='bg-slate-900 flex items-center justify-center h-screen'>
            <div className='shadow-xl bg-white  p-8 rounded-lg shadow-gray-400/50 w-96'>
                <div className='mb-10'>
                    <h1 className='text-3xl uppercase font-bold text-center'>
                        Register
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='relative'>
                        <RiUserShared2Line className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-700' />
                        <input
                            type="text"
                            placeholder="username"
                            className='w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                            name="username"
                            onChange={handleInput}
                            value={values.username}
                        />
                    </div>
                    <div className='relative'>
                        <RiMailLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-700' />
                        <input
                            type="email"
                            placeholder="Email"
                            className='w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                            name="email"
                            onChange={handleInput}
                            value={values.email}
                        />
                    </div>
                    <div className='relative'>
                        <RiLockLine className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-700' />
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            className='w-full border border-gray-200 outline-none py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300'
                            name="password"
                            onChange={handleInput}
                            value={values.password}
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
                    <button type="submit" className='mt-6 bg-violet-600 text-white w-full py-2 px-6 rounded-lg'>Register</button>
                    <span className='text-center'>
                        <Link to="/login">
                            Already have
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
}
