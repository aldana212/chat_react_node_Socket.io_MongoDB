import io from "socket.io-client";
import { useState, useEffect } from "react";

// iniciamos y le indicamos donde esta el servi de sockeirt
// este objeto socket va a permitir enviar o escuchar datos desde el cliente al servidor
const socket = io('http://localhost:4000')

export const Chats = () => {
  
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    // emite un evento para el back con dos parametros nombre y valor 
    socket.emit('message', message)
    const newMessage = {
      body: message,
      from: "Me"
    }
    // copiamos todos los mensajes que tenga y añade el nuevo
    setMessages([newMessage, ...messages])
    // setea el estado a vacio
    setMessage('')
  }

  // cuando cargue la aplicacion este pendiente a mi evento useeEffect
  useEffect(() => {
    // recibe el mensaje del backen
    const resiveMessage = message => {
      //copia todo lo de messages y añade el mensaje que recibimos del backen 
      setMessages([message, ...messages])
    }

    // cuando escuches el evento message  ejecuatme...
    socket.on('message', resiveMessage)

    return () => {
      // debes desuscribirlo al momento de crear un nuevo componente
      // osea envia al backen, recibe del backen y crea componente
      socket.off('message', resiveMessage)
    }
  }, [messages])

  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center ">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
      <h1 className='text-2xl font-bold my-2'>Chat React</h1>
        <input type="text" onChange={e => setMessage(e.target.value)}
          value={message} className="border-2 border-zinc-500 p-2 text-black w-full" />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li key={index} className={`my-2 p-2 table text-sm rounded-md ${
              message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"
              } `}>
              <p>{message.from} : {message.body}</p>
            </li>
          ))}
        </ul>
      </form>


    </div>
  );
}