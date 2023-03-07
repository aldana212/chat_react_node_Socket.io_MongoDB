import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.svg";

export const Contacts = ({ contacts, currentUser, changeChat }) => {
  console.log(contacts);
  const [currentUsername, setCurrentUsername] = useState(undefined)
  const [currentUserImage, setCurrentUserImage] = useState(undefined)
  const [currentSelected, setCurrentSelected] = useState(undefined)
  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage)
      setCurrentUsername(currentUser.username)
      setCurrentUsername(currentUser.username)
      console.log(contacts.avatarImage);
    }
  }, [currentUser])
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact)
   }
  return (
    <>
      {currentUserImage && currentUserImage && (
        <div className='grid col-span-1 w-72 bg-slate-200 overflow-hidden md:gap-[0.5rem]'>
          <div className='flex items-center gap-[1rem] justify-center'>
            <img src={logo} alt="" className='h-[2rem]' />
            <h3 className='bg-white uppercase'>snappy</h3>
          </div>
          <div className='flex flex-col items-center overflow-auto gap-2'>
            {
              contacts.map((contact, index) => {
                return (
                  <div className={`min-h-[5rem] cursor-pointer w-[90%] rounded-lg p-0.5 flex gap-[1rem] items-center transition duration-500 ease-in-out ${index === currentSelected ? 'bg-slate-700 text-white' : 'bg-white'}`}
                   key={index}
                   onClick={() => changeCurrentChat(index, contact)}
                   >
                    <div className=''>
                      <img src={contact.avatarImage} alt="" className='h-[3rem]' />
                    </div>
                    <div className=''>
                      <h3 className=''>{contact.username}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className=' bg-slate-700 min-h-[5rem] flex justify-center items-center gap-3'>
            <div className='avatar'>
              <img src={currentUserImage} alt=""  className='h-[4rem]'/>
            </div>
            <div className='text-white'>
              <h3>{currentUsername}</h3>
            </div>
          </div>
        </div>
      )
      }
    </>
  )
}
