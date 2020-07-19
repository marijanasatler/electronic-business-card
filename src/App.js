import React from 'react';
import './App.css';
import {Route, Switch,HashRouter} from 'react-router-dom';
import Header from './components/header-components/header';
import HomePageEnglish from './pages/homepage-english';
import HomePage from './pages/homepage';
import Footer from './components/footer-components/footer'
import LogoContainer from './components/logo-container-components/logo-container';


class App extends React.Component{
  render(){
  return (
    <HashRouter basename='/'>
    <div className="App">
    <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/en' component={HomePageEnglish}/>
        </Switch>
       <div className='footer-container'>

       <LogoContainer/>
        <Footer/>
       </div>
    </div>
    </HashRouter>
  );
 }
}

export default App;
