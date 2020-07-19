import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from '../components/nav-components/navbar';
import Introduction from '../components/introduction-coomponents/introduction';
import Contact from '../components//contact-components/contact';
import TextBar from '../components/textbar-components/textbar';


const HomePage =()=>(
    <Router>
    <div>
    <Navbar/>
    <TextBar/>
         <Route exact path='/' component={Introduction} />
        <Route exact path='/kontakt' component={Contact} />
       
    </div></Router>
);

export default HomePage;