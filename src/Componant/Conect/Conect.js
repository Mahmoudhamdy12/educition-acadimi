import React from 'react';
import './Conect.css';
import Photo from '../../Images/compare.jpg';

function Conect() {

  return(
    <div className="conect" >
    <div className='container'>
      <h1>للتواصل برجاء أرسال رسالتك</h1>
        <form >
          <label>
            <input name="name" type="text" required />
            <p>الاسم</p>
          </label>
          <label>
            <input name="name" type="email"  required/>
            <p>الايميل</p>
          </label>
          <label>
            <textarea rows={10} cols={30} required ></textarea>
            <p>رسالتك</p>
          </label>
        <button type="submit">أرسال</button>
      </form>
      </div>
    </div>
  )
}

export default Conect