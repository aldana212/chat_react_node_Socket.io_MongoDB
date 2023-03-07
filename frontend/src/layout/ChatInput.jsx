import React, { useState, useEffect } from 'react'
import Picker from 'emoji-picker-react'
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

export const ChatInput = ({ handleSendMsg }) => {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState("")

    const handleShowPinckerHideShow = () =>{
        setShowEmojiPicker(!showEmojiPicker)
    }

    const handleEmojiClick = (event, emoji) =>{
        console.log(emoji);
        let message = msg;
        message += emoji.emoji;
        setMsg(message)

    }
    return (
        <div class="flex py-6 px-20 bg-slate-500">
            <div className='w-6 mr-4 flex items-center justify-center relative'>
            <BsEmojiSmileFill className='text-yellow-300 text-12 cursor-pointer' onClick={handleShowPinckerHideShow}/>
            {
                showEmojiPicker && 
                <div className='absolute -top-[450px]'>
                    <Picker onEmojiClick={handleEmojiClick}/>
                </div>
            }
            </div>
            <div class="w-[100vw]">
                <input type="text" class="rounded-sm px-4 py-2 focus:outline-none bg-gray-100 w-full" 
                placeholder="Escribe tu mensaje..."
                value={msg}
                onChange={(e) =>{setMsg(e.target.value)}} />
            </div>
            <div class="w-[30px] flex justify-end">
                <a href="#" class="bg-blue-500 text-white rounded px-4 py-2">Enviar</a>
            </div>
        </div>
    )
}
