import React from "react";
import "./App.css";
import Home from './home';
import About from './about';

import { BrowserRouter, Route, Redirect, Link} from 'react-router-dom';

function App() {
  return ( <BrowserRouter>
    <div className="App">
      <h3>React Router App</h3>
      <nav>
        <Link to="/home">Home</Link>&nbsp;
        <Link to="/about">About</Link><br></br>
      </nav>
      <Redirect exact from="/" to="home" />
      <Route extact path="/home" component={Home} />
      <br></br>
      <Route extact path="/about" component={About} />
    </div>
    </BrowserRouter>
  );
}

export default App;
