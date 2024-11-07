import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCartShopping,faUser,faBars,faUtensils, faClose } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'


const Navbar = ({handleToggleMenu, barsActive, setShowLogin}) => {

  const {getTotalCartItems} = useContext(StoreContext)

  return (
    <div className='header' id='header'>
      <Link style={{textDecoration:'none'}} to='/'><a className='logo' href="/"><FontAwesomeIcon className='logoi' color='#ffb700' icon={faUtensils} />Food point</a></Link>
      <form action="" className="search-form">
        <input type="search" id='search-Box' placeholder='Search Here...'/>
        <label htmlFor="search-Box"><FontAwesomeIcon icon={faSearch}/></label>
      </form>

      <div className="icons">
        <div id='search-btn' className="search-btn"><FontAwesomeIcon icon={faSearch} /></div>
        <Link to='cart'><div className="cart-btn"><FontAwesomeIcon icon={faCartShopping} /></div></Link>
        <div className="user-btn" onClick={()=>setShowLogin(true)}><FontAwesomeIcon  icon={faUser} /></div>
        <div className="menu-btn" onClick={()=>handleToggleMenu()}><FontAwesomeIcon icon={barsActive ? faClose : faBars}/></div>
        <span className='cart-count'>{getTotalCartItems()}</span>
      </div>

    </div>
  )
}

export default Navbar
