import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MiniMenu from './Components/MiniMenu/MiniMenu';
import { Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PLaceOrder from './Pages/PlaceOrder/PLaceOrder';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';



function App() {

  const [showLogin,setShowLogin] = useState(false)

  const [barsActive,setBarsActive] = useState(false);
  const handleToggleMenu = () =>{
    setBarsActive(!barsActive)
  }
  return (
    <>
     
    <div className="App">
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <Navbar handleToggleMenu={handleToggleMenu} barsActive={barsActive} setShowLogin={setShowLogin}/>
     {barsActive?<MiniMenu/>:<></>}
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PLaceOrder/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
