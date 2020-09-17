import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Okay!!!</h1>
          </Route>

          <Route path="/"> /* make sure to have the default route at the bottom */ 
            <Header />
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
