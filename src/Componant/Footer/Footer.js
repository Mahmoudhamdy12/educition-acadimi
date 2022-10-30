import React from 'react'
import './Footer.css'
import { AiFillFacebook,AiFillPhone,AiFillYoutube,AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='icon'>
          <ul>
            <li><a className='facebook'><AiFillFacebook /></a></li>
            <li><a className='youtube'><AiFillYoutube /></a></li>
            <li><a className='whats'><AiOutlineWhatsApp /></a></li>
          </ul>
        <div className='phone'>
          <div>
            <AiFillPhone/>
            <span>+2 01210284098</span>
          </div>
          <div>
            <AiFillPhone/>
            <span>+2 01210284098</span>
          </div>
        </div>
        <div className='logo'>أكادمية المنتصر</div>
        </div>
      </div>
        <div className='developer'>Made By Mahmoud 2022</div>
    </footer>
  )
}

export default Footer