import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { RxDotFilled } from 'react-icons/rx';

export const PruebaAvatar = () => {
  return (
    <div class="flex py-6 px-20 border-t">
      <div class="w-4/5">
        <input type="text" class="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full" placeholder="Escribe tu mensaje..." />
      </div>
      <div class="w-1/5 flex justify-end">
        <svg class="w-6 mr-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
        </svg>
        <svg class="w-6 mr-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <a href="#" class="bg-blue-500 text-white rounded px-4 py-2">Enviar</a>
      </div>
    </div>
  );
}