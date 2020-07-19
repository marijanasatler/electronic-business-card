import React from 'react';
import {Link, HashRouter } from 'react-router-dom';
import './header.scss';



const Header=()=>(
  
    <div className='header' >
         <img className='avatar' src={require('../../images/profileimage.jpg')} alt='avatar'   />
     
      <HashRouter basename='/'>
      <div className='butn'>
         <Link   to="/">
         <button className='btt' >SRB</button>
         </Link>
         <Link  to='/en' > 
          <button className='btt'>EN</button>
         </Link>
        </div>
         </HashRouter>
    
    </div>

)

export default Header;