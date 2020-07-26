import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header-components/header';
import HomePageEnglish from './pages/homepage-english';
import HomePage from './pages/homepage';
import LogoContainer from './components/logo-container-components/logo-container';


class App extends React.Component{
  render(){
  return (

    <div className="App">
    <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/en' component={HomePageEnglish}/>
        </Switch>
      

       <LogoContainer/>
    
       
    </div>


  );
 }
}

export default App;
