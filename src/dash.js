import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Login from './Login';
import Profile from './pages/Profile';

function dash() {
    return (
        <>
        <Router>
          <Route exact path="/" component={Login} />
          <Navbar />
          <Switch>
            <Route path='/dash/profile' component={Profile} />
            <Route path='/dash/home' exact component={Home} />
            <Route path='/reports' component={Reports} />
            <Route path='/products' component={Products} />
          </Switch>
        </Router>
      </>
    );
}

export default dash
