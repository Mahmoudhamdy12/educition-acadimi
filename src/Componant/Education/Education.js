import React from 'react'
import './Education.css'
import Data from '../../Data'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
const Education = () => {
  const { filterStages} = useGlobalContext();
  
  return (  
    <div className='education'>
        <div className='container' >
            <h2>:المراحل الدراسية</h2>
            <section>
            {Data.map((item) => {
              const {education,className,id} = item;
              return (
                <main className='card' key={id}>
                  <div  className={className} >
                    <Link to='/Stages' onClick={() => filterStages(id)} >
                      {education}</Link></div>
                </main>
              )
            })}
            </section>
        </div>
    </div>
  )
}

export default Education