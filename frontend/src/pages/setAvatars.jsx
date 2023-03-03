import React, { useState, useEffect } from 'react'
import { json, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SetAvatarsRoute } from "../utils/ApiRouters";
import { Buffer } from "buffer";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export const SetAvatars = () => {
    const api = `https://api.multiavatar.com/4645646`
    const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);
    const navigate = useNavigate()
    const [avatars, setAvatars] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState(undefined)

    const handlePrevAvatar = () => {
        setCurrentAvatarIndex(
            currentAvatarIndex === 0 ? avatars.length - 1 : currentAvatarIndex - 1
        );
    };

    const handleNextAvatar = () => {
        setCurrentAvatarIndex(
            currentAvatarIndex === avatars.length - 1 ? 0 : currentAvatarIndex + 1
        );
    };

    const setProfilePicture = async () => {
        alert("holaa") 
        console.log(currentAvatarIndex);
    }

    useEffect(() => {
        async function fetchAvatars() {
            // Verificar si el avatar ya está almacenado en caché
            const cachedAvatar = localStorage.getItem(`avatar`);
            const avatarUrls = [];

            if (cachedAvatar) {
                console.log(cachedAvatar);
                setAvatars(JSON.parse(cachedAvatar));
            } else {
                for (let i = 0; i < 29; i++) {
                    const num = Math.floor(Math.random() * 1000000);
                    await axios.get(`https://api.multiavatar.com/${num}.png?apikey=cJZewVqa0CKfW9`)
                        .then(({ config }) => {
                            const data = config.url
                            console.log(data);
                            // Almacenar el avatar en caché
                            avatarUrls.push(data)
                            localStorage.setItem(`avatar`, JSON.stringify(avatarUrls));
                            setAvatars([...avatars, avatarUrls]);
                        }).catch(e => console.log(e))
                }
                console.log(avatars);
            }
        }
        fetchAvatars();
    }, []);

    return (
        <>
            {/* <div className='flex items-center justify-center h-screen'> */}
            <div className='flex flex-col items-center justify-center h-screen space-x-4 space-y-8 bg-white'>
                <div className='text-3xl font-bold text-center'>
                    <h1>pink an avatar as your profile picteres</h1>
                </div>

                <div
                    className="absolute left-20 top-0 h-full w-16 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition duration-300 z-10"
                    onClick={handlePrevAvatar}
                >
                    <IoIosArrowBack size={24} color="#000" />
                </div>

                <div className='overflow-hidden w-96 shadow-lg flex justify-center items-center '>
                    {
                        avatars.map((avatar, index) => (
                            <div key={index} className={
                                `w-32 h-32 rounded-full absolute scale-y-50`}
                            >
                                <img src={avatar}
                                    alt={index}
                                    key={index}
                                    className={`h-32 w-32 absolute transform transition duration-300 ${
                                        index === currentAvatarIndex
                                        ? 'translate-x-0 opacity-100'
                                        : 'translate-x-full opacity-0 -z-10'
                                    }`}
                                />
                            </div>
                        ))
                    }
                </div>
                <div
                    className="absolute right-0 top-0 h-full w-16 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition duration-300 z-10"
                    onClick={handleNextAvatar}
                >
                    <IoIosArrowForward size={24} color="#000" />
                </div>
                <button onClick={setProfilePicture}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Enviar
                </button>

            </div>

            {/* </div> */}
        </>
    )
}