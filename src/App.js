import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import home from './pages/home';
import About from './pages/About';
import Login from './pages/Login';
import ShowItemSelectd from './pages/ShowItemSelected';
import cake from './pages/cake';
import Category from './pages/CategoryCake';
import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
    <Switch>
      <Route exact path ="/" component={home}/>
      <Route  path ="/about" component={About}/>
      <Route  path ="/cake" component={cake}/>
      <Route  path ="/login" component={Login}/>
      <Route  path ="/category" component={Category}/>
      <Route  path ="/viewitem" component={ShowItemSelectd}/>
    </Switch>
    </div>
  </Router>
  );
}

export default App;
