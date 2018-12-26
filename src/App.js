import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Cabecalho from './header'
import ListaOpcoes from './listOptions/listOptions'
import UsersTopFollowers from './ListTwitterData/UsersTopFollowers';
import TotalPostsOrderByHour from './ListTwitterData/TotalPostsOrderByHour';
import TotalPostsByTagAndCountry from './ListTwitterData/TotalPostsByTagAndCountry';

class App extends Component {

  
render() {
	
    return (
      <div className="App">
        <NavBar/>
        <Cabecalho/>
        <Route exact path='/' component={ListaOpcoes}/>
        <Route exact path='/list/UsersTopFollowers' component={UsersTopFollowers}/>
        <Route exact path='/list/TotalPostsOrderByHour' component={TotalPostsOrderByHour}/>
        <Route exact path='/list/TotalPostsByTagAndCountry' component={TotalPostsByTagAndCountry}/>
      </div>
    );
  }
}

export default App;