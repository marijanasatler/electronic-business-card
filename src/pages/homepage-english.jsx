import React from 'react';
import IntroductionEn from '../components/introduction-coomponents/introduction-en';
import ContactEn from '../components//contact-components/contact-en';
import TextBarEn from '../components/textbar-components/textbar-en';
import './homepage.scss';


class HomePageEnglish extends React.Component{
    state={
        visible:true
    }
    
        render(){
        return (
    
            <div>
                <div className='navbar'>
        <div className='butn'>
                <button className='but' onClick={()=>{ this.setState({visible:true});} }>
            About me
        </button><button className='but' onClick={()=>{ this.setState({visible:false});} } >Contact</button>
        </div></div>
                <TextBarEn/>
    {  this.state.visible ? <IntroductionEn/> : <ContactEn/>}
    
    
            </div>
    
    );
    }}

export default HomePageEnglish;