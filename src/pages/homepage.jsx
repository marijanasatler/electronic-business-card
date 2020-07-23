import React from 'react';
import Introduction from '../components/introduction-coomponents/introduction';
import Contact from '../components//contact-components/contact';
import TextBar from '../components/textbar-components/textbar';
import './homepage.scss';


class HomePage extends React.Component{
state={
    visible:true
}

    render(){
    return (

        <div>
            <div className='navbar'>
    <div className='butn'>
            <button className='but' onClick={()=>{ this.setState({visible:true});} }>
        O meni
    </button><button className='but' onClick={()=>{ this.setState({visible:false});} } >Kontakt</button>
    </div></div>
            <TextBar/>
{  this.state.visible ? <Introduction/> : <Contact/>}


        </div>

);
}}

export default HomePage;