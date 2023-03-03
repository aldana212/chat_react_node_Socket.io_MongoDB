import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { RxDotFilled } from 'react-icons/rx';

export const PruebaAvatar = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [avatars, setAvatars] = useState([])

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? avatars.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === avatars.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

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
    <div class="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      <div className='absolute inset-96 flex items-center justify-around p-4'>
        {/* Left Arrow */}
        <IoIosArrowBack onClick={prevSlide} size={30} className="p-1 rounded-full shadow  bg-white/80 text-gray-800 hover:bg-white" />
        {/* Right Arrow */}
        <IoIosArrowForward onClick={nextSlide} size={30} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" />
      </div>
      <div class="w-96 h-96 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl z-50">
          {avatars.map((avatar, index) => (
        <div className='h-96 w-52 flex items-center justify-center rounded-full scale-y-50'>
            <img src={avatar}
              alt={index} key={index}
              className={` h-full w-full object-cover rounded-xl ${currentIndex === index ?? 'translate-x-0 opacity-100'}  ${currentIndex < index
                ? 'translate-x-full hidden'
                : ''
                }`}
            />
        </div>
          ))}
        <div className="m-2 flex justify-center absolute bottom-0 right-0">
          <a role='button' href='#' class="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">Learn More</a>
        </div>
      </div>
    </div>
  );
}