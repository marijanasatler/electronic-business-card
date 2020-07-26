import React from 'react';
import './logo-container.scss';
import FooterComponent from '../footer-components/footer';


const LogoContainer =()=>(
<div>
    <div className='logo-icons' > 
    <div className='tooltip'>
    <img className='img-logo'  src={require('../../images/logo1.png')} alt='logo-img'  />
    <span className="tooltiptext">Microsoft Azura arhitect </span>
    </div>
    <div className='tooltip'>
    <img className='img-logo' src={require('../../images/logo6.png')} alt='logo-img'  />
    <span className="tooltiptext">Quality management</span>
    </div>
    <div className='tooltip'>
    <img className='img-logo' src={require('../../images/logo7.png')} alt='logo-img'  />
    <span className="tooltiptext">DVD Voždovac</span>
    </div>
    <div className='tooltip'>
    <img className='img-logo' src={require('../../images/logo9.png')} alt='logo-img'  />
    <span className="tooltiptext">Reiki USUI SHIKI RYOHO</span>
    </div>
    <div className='tooltip'>
    <img className='img-logo' src={require('../../images/logo5.png')} alt='logo-img'  />
    <span className="tooltiptext">DeFi -Decentralized Finance</span>
    </div>
    </div>
    <FooterComponent/>
    </div>
   
);

export default LogoContainer;