import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SetAvatarsRoute } from "../utils/ApiRouters";

export const CardsAvatars = ({name, setName, avatarUrl, setAvatarUrl, handleAvatar, handleInputChange, handleSubmitAvatar}) => {

    return (
        <div class="card w-[800px] h-[450px] m-2 flex items-center justify-center bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl z-50">
        <div class="flex items-center justify-center flex-col h-screen">
          <div className='h-48 w-48 flex items-center rounded-full'>
            <img src={avatarUrl} className='object-cover' alt="" />
          </div>
          <div className="mt-4">
            <div className='flex'>
            <input
              className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleInputChange}
            />
             <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleAvatar}
            >
              Generate Avatar
            </button>
            </div>
          </div>
          <div className="mb-4 p-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmitAvatar}
            >
              Avatar
            </button>
          </div>
        </div>
      </div>
    )
}
