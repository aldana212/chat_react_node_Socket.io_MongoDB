import { Routes, Route } from "react-router-dom";
import { Register } from './pages/Register';
import { Chats } from './pages/chats';
import { Login } from "./pages/login";
import { Avatars } from "./pages/Avatars";
import { PruebaAvatar } from "./pages/pruebaAvatar";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";

function App() {

  return (
    // <div className="App bg-violet-200">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Chat' element={<Chat />}/>
      <Route path='/Chats' element={<Chats />}/>
      <Route path='/setAvatar' element={<Avatars />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/prueba' element={<PruebaAvatar />}/>
    </Routes>
    // </div>
  );
}

export default App;
