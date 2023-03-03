import { Routes, Route } from "react-router-dom";
import { Register } from './pages/Register';
import { Chats } from './pages/chats';
import { Login } from "./pages/login";
import { SetAvatars } from "./pages/setAvatars";
import { PruebaAvatar } from "./pages/pruebaAvatar";

function App() {

  return (
    <div className="bg-zinc-900">
    <Routes>
      <Route path='/' element={<Chats />}/>
      <Route path='/setAvatar' element={<SetAvatars />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/prueba' element={<PruebaAvatar />}/>
    </Routes>
    </div>
  );
}

export default App;
