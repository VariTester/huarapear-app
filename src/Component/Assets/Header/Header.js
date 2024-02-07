import React from 'react';
import "./Header.css";

import { BiSearchAlt, BiUser,  } from 'react-icons/bi';
import { BsHeartFill, BsCart2, } from "react-icons/bs";

import logo from "../huarapearimagenes/waapearlogoo.png"
import callIcon from "../huarapearimagenes/gaaa.png"

function Header() {
  return (
    <div className='header-container'>
        
        <div className='logo-search-cont'>
            <img src={logo} alt='' />
            <div className='search-cont'>
             <BiSearchAlt className='icon'/>   
                <input type='text' placeholder='Buscar Productos'/>
            </div>
        </div>

        <div className='contact-social-cont'>
            <div className='contact'>
                <img src={callIcon} alt=''/>
                <p>LLámanos <br/> <span> +51 992329593</span></p>
            </div>

            <div className='social-icon-cont'>
                <div className='headerIcon'>
                <BiUser className='headerIcon-size'/> 
                </div >

                <div className='headerIcon'>
                <BsHeartFill className='headerIcon-size'/>
                </div>

                <div className='headerIcon'>
                <BsCart2 className='headerIcon-size'/>
                </div>

            </div>
        </div>


    </div>
  );
};

export default Header;