import React from 'react'
import './Home.css'
import Student from'../../Images/student.jpg'
import Education from '../Education/Education'
import Conect from '../Conect/Conect'
import About from '../About/About'

const Home = () => {
  return (
    <>
        <img src={Student} alt='student' className='student'></img>
        <div className='info'>
          <h1>مرحبا بكم في <span className='text'>أكادمية المنتصر
              </span>
          </h1>
          <h3>تحتوي علي جميع المستلزمات لمادة <span>الدراسات الأجتماعية</span> للمراحل الدراسية (كتاب مدرسي , مذكرات , نماذج أمتحانات)</h3>
        </div>
        <Education/>  
        <Conect/>
        <About/>
    </>
  )
}

export default Home