import React, { useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/bamboo.webp'
import { useState } from 'react'
import { Cart , Search } from '../'
import { Context } from "../../utils/context";
import './navbar.css'

const Menu = () => (
  <>
    {/* <div className="eco__navbar-link">
    <p><Link to='shop'>Shop</Link></p>
    <ul className="dropdown" aria-label="submenu">
      <li><p><Link to="#">Laundry</Link></p></li>
      <li><p><Link to="#">Self Care</Link></p></li>
      <li><p><Link to="#">On The Go</Link></p></li>
      <li><p><Link to="#">Shop All</Link></p></li>
      <li><p><Link to="#">Sale</Link></p></li>
    </ul>
    </div> */}
    <p><Link to='shop'>Shop</Link></p>
    <p><Link to='order'>Custom Order</Link></p>
    <div className="eco__navbar-link">
    <p><Link to='about'>About Us</Link></p>
    <ul className="dropdown" aria-label="submenu">
      <li><p><Link to="about">Our Story</Link></p></li>
      <li><p><Link to="deforest">Deforestation</Link></p></li>
      <li><p><Link to="plastic">Anti-Plastic</Link></p></li>
      <li><p><Link to="zero-waste">Vision & Mission</Link></p></li>
      
      {/* <li><p><Link to="#">The Eco-Journal</Link></p></li>
      <li><p><Link to="#">FAQ</Link></p></li> */}
    </ul>
    </div>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    setToggleMenu(false);
  },[location])

  return (
    <>
    <div className="eco__navbar">
      <div className="eco__navbar-links_logo"> 
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>  
      </div>
      <div className="eco__navbar-links">
        <div className="eco__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='space'></div>
      {/* <div className='eco__navbar-sign'>
        <button type='button' value={"USD"}>
          <p>USD $</p>
        </button>
          <p><Link to='account'>Account</Link></p>
      </div> */}
      <div className='eco__navbar-icons'>
      <div className='eco__search' onClick={() => setShowSearch(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
        </div>
        <div className='space-socials'></div>
        <div className='eco__cart' onClick={() => setShowCart(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
        </div>
      </div>
      <div className='eco__navbar-menu'>
        {toggleMenu ? <RiCloseLine color='#000' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#000' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className='eco__navbar-menu_container scale-up-tr'>
              <div className='eco__navbar-menu_container-links'>
                <Menu />
                {/* <div className='eco__navbar-menu_container-links-sign'>
                  <button type='button' value={"USD"}>
                    <p>USD $</p>
                  </button>
                    <p><Link to='#account'>Account</Link></p>
                </div> */}
              </div>
            </div>
        )}
      </div>
    </div>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  )
}

export default Navbar