import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { AiOutlineArrowLeft,AiOutlineFileText } from "react-icons/ai";
import './Stages.css'

const Stages = () => {
  const { stage,allSections} = useGlobalContext();

  const inputRef = useRef()

  const filterSections = (index) => {
    
    const ulChildren = Array.from(inputRef.current.children)
    const liHidden = ulChildren.filter((e)=> e.dataset.category !== index )
    const liNotHidden = ulChildren.filter((e)=> e.dataset.category === index)
    if( index === 'الكل'){
      ulChildren.map((e)=> e.classList.remove('hidden'))
    }else{
      liHidden.map((e)=> e.classList.add('hidden'))
      liNotHidden.map((e)=> e.classList.remove('hidden'))
    }
  }

  return (
    <div className='stages'>
      <div className='container'>
        {stage.map((item) => {
      const {education,className,section,id} = item;
      let sections = section
              return (
              <main className='card' key={id}>
                  <div className='educition'>
                    <Link className='left-btn' to='/education'><AiOutlineArrowLeft/>رجوع</Link>
                  <div className={ `stage ${className}`} >{education}</div>
                  </div>
                  <div className='section-btn'>
                    {allSections.map((a,index) => {
                      return (
                      <button key={index}  onClick={()=> filterSections(a)}>{a}</button>
                      )
                  })}
                  </div>
                  <div className='choice'>
                    <ul className='section' ref={inputRef} >
                    {sections.map((e,index)=> {
                      const {title,link,category} = e
                      return (
                        <li key={index} data-category={category} ><a href={link} target='blank' ><AiOutlineFileText/>{title}</a></li>
                        
                        )
                      })}
                      </ul>
                  </div>
                </main>
              )
            })}
      </div>
    </div>
  )
}

export default Stages