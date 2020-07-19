import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarEn from '../components/nav-components/navbar-en';
import IntroductionEn from '../components/introduction-coomponents/introduction-en';
import ContactEn from '../components//contact-components/contact-en';
import TextBarEn from '../components/textbar-components/textbar-en';


const HomePageEnglish =()=>(
   < Router>
    <div>
    <NavbarEn/>
    <TextBarEn/>
         <Route exact path='/en' component={IntroductionEn} />
        <Route exact path='/contact' component={ContactEn} />
  
    </div>
    </Router>
);

export default HomePageEnglish;