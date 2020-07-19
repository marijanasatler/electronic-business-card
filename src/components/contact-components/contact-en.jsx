import React from 'react';
import './contact.scss';
import {Link} from 'react-router-dom';





const ContactEn=()=>(
    <div className='margine'>
        <div className='continfo'>
      <div className='cinfo'>
      If you want to contact me you can send me email at 
      <h1><a className='email-info' href="mailto:filip89x@gmail.com">
            filip89x@gmail.com </a></h1>
    </div>
      <div className='cinfo'>
      or send me a message on viber at
       
         <h2>  +381 65/35-80-043 </h2> 
     </div>
     <div className='cinfo'>
    <div> 
      If you interested for my CV you can download it  <br/>
     <h3><Link className='download-info'  to="/filipboskovic-cv.pdf" target="_blank" download>Download here</Link></h3> 
      </div>
    </div>
    </div>
    </div>
);
export default ContactEn;