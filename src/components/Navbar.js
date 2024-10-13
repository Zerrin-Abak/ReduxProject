import React from 'react'
import { BsFillBasket3Fill } from "react-icons/bs";
import {useSelector} from "react-redux";

function Navbar() {
    const {quantity} = useSelector((store) => store.card);
  return (
    <nav>
        <div className='nav-main-container'>
            <h3>Kurs Uygulaması</h3>
            <div className='quantity-container'>
                <div className='items-div'>
                    <p>{quantity}</p>
                </div>
                <BsFillBasket3Fill className='items-icon'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar