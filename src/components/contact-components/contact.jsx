import React from 'react';
import './contact.scss';
import {Link} from 'react-router-dom';





const Contact=()=>(
    <div className='margine'>
        <div className='continfo'>
      <div className='cinfo'>
          Ukoliko zelite da me kontaktirate  
          mozete mi poslati email na 
          <h1 ><a className='email-info' href="mailto:filip89x@gmail.com">
            filip89x@gmail.com </a></h1>
    </div>
      <div className='cinfo'>
          ili mi pisati na viber
  <h2>
     +381 65/35-80-043
  </h2>
     </div>
    <div className='cinfo'>
    <div> 
      Ako ste zainteresovani za moj CV možete ga preuzeti <br/><h3>
      <Link className='download-info' to="/boskovicfilip-cv.pdf" target="_blank" download>Preuzmi ovde</Link></h3>
      </div>
    </div>
    </div>
   
    </div>
);
export default Contact;