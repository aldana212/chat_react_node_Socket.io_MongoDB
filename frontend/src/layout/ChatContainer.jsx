import React from 'react'
import { ChatInput } from './ChatInput'
import { Logout } from './Logout'
import { Message } from './Message'


export const ChatContainer = ({ currentChat }) => {

    const handleSendMsg = async(msg) =>{

    }

    return (
        <>
            {
                currentChat &&
                <div className='pb-4 col-span-3'>
                    <div className='flex justify-between items-center py-8 px-0 md:px-8'>
                        <div className='flex items-center gap-[1rem]'>
                            <div className=''>
                                <img src={currentChat.avatarImage} alt="" className='h-[3rem]' />
                            </div>
                            <div className='text-white'>
                                <h3>{currentChat.username}</h3>
                            </div>
                        </div>
                        <Logout />
                    </div>
                    <Message />
                    <ChatInput handleSendMsg={handleSendMsg} />
                </div>
            }
        </>
    )
}
