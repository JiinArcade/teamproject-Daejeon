import './App.css';
import Index from './pages/index/Index'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Mainpage from './pages/Mainpage';
import GesifanJunche from './pages/MainPage4/BulletinBoardJunche';
import CctvBig from './pages/MainPage5/CctvBig';
import Join from './pages/LoginJoin/Join'
import Login from './pages/Login/Login'
import Register from './pages/LoginRegister/Register'



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}/>
      <Route path="/MainPage" element={<Mainpage />}/>
      <Route path="/GesifanJunche" element={<GesifanJunche />}/>
      <Route path="/CctvBig" element={<CctvBig />}/>
      <Route path="/Login" element={<Login />} />
      <Route path="/Join" element={<Join />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
</BrowserRouter>
  )
}

export default App;
