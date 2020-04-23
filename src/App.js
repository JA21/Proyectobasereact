import React from 'react';


//import Home21 from "./Views/home/home";
import Login from './Views/Login/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (

    <div >
      <Router>
        <Route path="/" exact component={Login} />
      </Router>

    </div>
  );
}

export default App;
