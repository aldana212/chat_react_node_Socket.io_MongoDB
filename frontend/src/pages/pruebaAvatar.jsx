import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';


export const PruebaAvatar = () => {
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  const avatars = [
    { id: 1, src: "https://api.multiavatar.com/888468.png?apikey=cJZewVqa0CKfW9" },
    { id: 2, src: "https://api.multiavatar.com/371440.png?apikey=cJZewVqa0CKfW9" },
    { id: 4, src: "https://api.multiavatar.com/832132.png?apikey=cJZewVqa0CKfW9" },
    { id: 4, src: "https://api.multiavatar.com/3123.png?apikey=cJZewVqa0CKfW9" },
    { id: 4, src: "https://api.multiavatar.com/534534.png?apikey=cJZewVqa0CKfW9" },
    { id: 4, src: "https://api.multiavatar.com/3123.png?apikey=cJZewVqa0CKfW9" },
    { id: 4, src: "https://api.multiavatar.com/832.png?apikey=cJZewVqa0CKfW9" },
    { id: 4, src: "https://api.multiavatar.com/13123.png?apikey=cJZewVqa0CKfW9" },
  ];
  

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


  return (
    <div className="relative flex justify-center items-center h-screen">
      <div
        className="absolute left-0 top-0 h-full w-16 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition duration-300 z-10"
        onClick={handlePrevAvatar}
      >
        <IoIosArrowBack size={24} color="#000" />
      </div>

      <div className="overflow-hidden w-96 h-16 rounded-xl shadow-lg flex justify-center items-center">
        {avatars.map((avatar, index) => (
          <img
            key={avatar.id}
            src={avatar.src}
            alt="Avatar"
            className={`h-32 w-32 absolute transform transition duration-300 ${
              index === currentAvatarIndex
                ? 'translate-x-0 opacity-100'
                : index > currentAvatarIndex + 1
                ? 'translate-x-full opacity-0'
                : 'translate-x-full opacity-0 -z-10'
            }`}
          />
        ))}
      </div>

      <div
        className="absolute right-0 top-0 h-full w-16 flex justify-center items-center cursor-pointer hover:bg-gray-200 transition duration-300 z-10"
        onClick={handleNextAvatar}
      >
        <IoIosArrowForward size={24} color="#000" />
      </div>
    </div>
  );
}
