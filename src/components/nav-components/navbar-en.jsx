import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';


const NavbarEn =()=>(
<div className='navbar'>
    <div className='butn'> 
    <Link to='/en' className='but'>About me</Link>
    <Link to='/contact'  className='but'>Contact </Link>
 </div>
 
</div>
);

export default NavbarEn;