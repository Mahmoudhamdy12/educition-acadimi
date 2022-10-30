import React, { useState,useEffect } from 'react'
import {Link } from "react-router-dom";
import './Nav.css'
import { FiAlignJustify, FiXCircle} from 'react-icons/fi';

const Nav = () => {

  const [icon, setIcon] = useState(true)

  const showLinks = () => {
    if(window.innerWidth >= 931){
      setIcon(false)
    }else{
      setIcon(true)
    }
  }
  useEffect(()=>{
    showLinks();
  },[])
window.addEventListener('resize', showLinks)

const changeIcon = ()=>{
  setIcon(!icon)
  showLinks()
}
  return (
    <nav className='nav'>
      <div className='container'>
      <div className='logo'>
        <li><Link to='/' onClick={changeIcon} >أكادمية المنتصر</Link></li>
        </div>
      {icon ? <FiAlignJustify className='option' onClick={()=> setIcon(!icon) } /> : <FiXCircle className='option' onClick={()=>setIcon(!icon) }/>}
        <header  className={icon ? 'links active' : 'links'}>
        <ul>
          <li><Link to='/about' onClick={changeIcon}>من نحن</Link></li>
          <li><Link to='/conect' onClick={changeIcon}>تواصل معنا</Link></li>
          <li><Link to='/education' onClick={changeIcon}>المراحل الدراسية</Link></li>
          <li><Link to='/' onClick={changeIcon}>الرئيسية</Link></li>
        </ul>
      </header>
      </div>
    </nav>
  )
}

export default Nav
