import React, { useState, useEffect } from 'react'
import { Await, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loader from '../assets/loader.gif'
import { SetAvatarsRoute } from "../utils/ApiRouters";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { CardsAvatars } from '../layout/CardsAvatars';


export const Avatars = () => {
    const navigate = useNavigate()
    const num = Math.floor(Math.random() * 900) + 100;
    const [name, setName] = useState(num);
    const [avatarUrl, setAvatarUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    const handleAvatar = () => {
        const num = Math.floor(Math.random() * 900) + 100;
        setName(num)
    }

    const handleSubmitAvatar = () => {
        if (avatarUrl === undefined) {
            alert("errro")
        } else {
            const user = JSON.parse(localStorage.getItem('chat-app-user'))
            axios.post(`${SetAvatarsRoute}/${user._id}`, {
                Image: avatarUrl
            }).then(({ data }) => {
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem('chat-app-user', JSON.stringify(user))
                navigate('/')
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    useEffect(() => {
        if (!localStorage.getItem('chat-app-user'))
          navigate("/login");
      }, []);

    useEffect(() => {
        async function fetchData() {
            await axios.get(`https://api.multiavatar.com/${name}.png`)
                .then(response => {
                    setAvatarUrl(response.config.url);
                    setIsLoading(false)
                })
                .catch(error => {
                    console.log(error);
                });
        }
        fetchData();
    }, [name])

    return (
        <>
            {
                isLoading ?
                    <div className='bg-slate-900 w-[100vw] h-[100vh] flex items-center justify-center'>
                        <img src={loader} alt="" />
                    </div>

                    :
                    <div className=' bg-slate-900 w-[100vw] h-[100vh] flex items-center justify-center flex-col'>
                        <div className="text-center py-4  text-xl font-bold">Generate Avatar</div>
                        <div id='content' className='carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide'>
                            {
                                isLoading ?
                                    <div>
                                        <img src={loader} alt="" />
                                    </div>
                                    :
                                    <CardsAvatars
                                        name={name}
                                        setName={setName}
                                        avatarUrl={avatarUrl}
                                        setAvatarUrl={setAvatarUrl}
                                        handleAvatar={handleAvatar}
                                        handleInputChange={handleInputChange}
                                        handleSubmitAvatar={handleSubmitAvatar}
                                    />

                            }

                        </div>

                    </div>
            }
        </>
    );

    // return (
    //     <>
    //         {/* <div className='flex items-center justify-center h-screen'> */}
    //         <div className='flex flex-col items-center justify-center h-screen space-x-4 space-y-8 bg-white'>
    //             <div className='text-3xl font-bold text-center'>
    //                 <h1>pink an avatar as your profile picteres</h1>
    //             </div>

    //             <div
    //                 className="absolute left-20 top-0 h-full w-16 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition duration-300 z-10"
    //                 onClick={handlePrevAvatar}
    //             >
    //                 <IoIosArrowBack size={24} color="#000" />
    //             </div>

    //             <div className='overflow-hidden w-96 shadow-lg flex justify-center items-center '>
    //                 {
    //                     avatars.map((avatar, index) => (
    //                         <div key={index} className={
    //                             `w-32 h-32 rounded-full absolute scale-y-50`}
    //                         >
    //                             <img src={avatar}
    //                                 alt={index}
    //                                 key={index}
    //                                 className={`h-32 w-32 absolute transform transition duration-300 ${index === currentAvatarIndex
    //                                         ? 'translate-x-0 opacity-100'
    //                                         : 'translate-x-full opacity-0 -z-10'
    //                                     }`}
    //                             />
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //             <div
    //                 className="absolute right-0 top-0 h-full w-16 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition duration-300 z-10"
    //                 onClick={handleNextAvatar}
    //             >
    //                 <IoIosArrowForward size={24} color="#000" />
    //             </div>
    //             <button onClick={setProfilePicture}
    //                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    //             >
    //                 Enviar
    //             </button>

    //         </div>

    //         {/* </div> */}
    //     </>
    // )
}