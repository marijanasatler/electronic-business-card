import React from 'react';
import {Link } from 'react-router-dom';
import './header.scss';



const Header=()=>(
  
    <div className='header' >
         <img className='avatar' src={require('../../images/profileimage.jpg')} alt='avatar'   />
     
     
      <div className='butn'>
         <Link   to='/'>
         <button className='btt' >SRB</button>
         </Link>
         <Link  to='/en'> 
          <button className='btt'>EN</button>
         </Link>
        </div>
   
    
    </div>

)

export default Header;