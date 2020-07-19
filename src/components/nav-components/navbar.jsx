import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';


const Navbar =()=>(
<div className='navbar'>
    <div className='butn'> 
    <Link to='/' className='but'>O meni</Link>
    <Link to='/kontakt'  className='but'>Kontakt </Link>
 
  </div>
</div>
);

export default Navbar;