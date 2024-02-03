import logo from '../../../public/header/logo.png'
import img from '../../../public/header/basket.png'
import user from '../../../public/header/Union.svg'
import fav from '../../../public/header/izbran.png'
import { NavLink } from 'react-router-dom'
import './Header.css'
// import { useState } from 'react'
import React, { useState } from 'react';
import Basket from '../Basket/Basket'



export default function Header() {

    function modal() {
        let modalka = document.getElementById('modal');
        modalka.classList.toggle('hidden');
    }

    return (
        <>

            <header className="header">
                <NavLink to="/" className='logo'>
                    <img src={logo} alt="" />

                    <div className="logo-text">
                        <h5>REACT SNEAKERS</h5>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </NavLink>


                <div className="icons">
                    <div className="icon" onClick={modal}>
                        <img src={img} alt="" /><p>1250 ₽</p></div>
                    {/* <button onClick={openmodal}>123</button> */}
                    <NavLink to="/user"><img src={user} alt="" />
                    </NavLink>
                    <NavLink to="/favourite">
                        <img src={fav} alt="" />                    </NavLink>

                </div>
            </header >
            <Basket />
            <div className="line">          </div>

        </>
    )
}