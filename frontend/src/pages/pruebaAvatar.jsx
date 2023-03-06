import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { RxDotFilled } from 'react-icons/rx';

export const PruebaAvatar = () => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const data = "https://api.multiavatar.com/nlnnl.png";

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarGeneration = () => {
    alert("hoola")
    axios.get(`https://api.multiavatar.com/${name}.png`)
      .then(response => {
        console.log(response.config.url);
        setAvatarUrl(response.config.url);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="mb-4">

        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleAvatarGeneration}
        >
          Generate Avatar
        </button>
      </div>
      {avatarUrl && (
        <div className="flex items-center">
          <img className="w-12 h-12 mr-4" src={avatarUrl} alt={name} />
          <span className="text-gray-700">{name}'s Avatar</span>
        </div>
      )}
    </div>
  );
}