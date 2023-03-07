import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { allUsersRute } from '../utils/ApiRouters'
import { Contacts } from "../layout/Contacts";
import { Welcome } from '../layout/Welcome';
import { ChatContainer } from '../layout/ChatContainer';

export const Chat = () => {
    const navigate = useNavigate()
    const [contacts, setContacts] = useState([])
    const [currentUser, setCurrentUser] = useState(undefined)
    const [currentChat, setCurrentChat] = useState(undefined)
    const [isloading, setIsloading] = useState(false)

    useEffect(() => {
        async function varificar() {
            if (!localStorage.getItem('chat-app-user')) {
                navigate("/login");
            } else {
                setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))
                setIsloading(true)
            }
        }
        varificar()
    }, []);

    useEffect(() => {
        async function getAllUser() {
            if (currentUser) {
                if (currentUser.isAvatarImageSet) {
                    console.log(currentUser);
                    const { data } = await axios.get(`${allUsersRute}/${currentUser._id}`)
                    setContacts(data.data);
                } else {
                    navigate('/setAvatar')
                }
            }
        }
        getAllUser()
    }, [currentUser])

    const handleChatChange = (chat) => {
        setCurrentChat(chat)
    }
    return (
        <div className='w-screen h-screen flex flex-col justify-center gap-4 items-center bg-slate-900'>
            <div className='h-5/6 w-10/12 bg-slate-600 grid grid-cols-4'>
                <Contacts contacts={contacts}
                    currentUser={currentUser}
                    changeChat={handleChatChange} />
                    {
                        isloading && currentChat === undefined ?
                        <Welcome currentUser={currentUser} />
                        : 
                        <ChatContainer currentChat={currentChat}/>
                    }

            </div>

        </div>
    )
}
