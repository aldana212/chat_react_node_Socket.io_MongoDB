import { Routes, Route } from "react-router-dom";
import { Register } from './pages/Register';
import { Chats } from './pages/chats';
import { Login } from "./pages/login";

function App() {

  return (
    <div className="bg-zinc-900">
    <Routes>
      <Route path='/' element={<Chats />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;
