import React, { useState } from 'react'
import { Link } from "react-router-dom";
import loader from '../assets/loader.gif'
import ideas from '../assets/utils.jpg'


export const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <div className="bg-slate-900  h-screen">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        {/* <svg
                            viewBox="0 0 1024 1024"
                            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg> */}
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                                Boost your productivity.
                                <br />
                                Start using our app today.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-900">
                                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <Link
                                    to="/login"
                                    className="rounded-md bg-violet-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Get started
                                </Link>
                                <Link to='/register' className="text-sm font-semibold leading-6 text-violet-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-60 lg:mt-20">
                            <img
                                className="hidden md:block absolute top-0 left-0 w-[34rem] h-[20rem] max-w-none rounded-md"
                                src={ideas}
                                alt="App screenshot"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
