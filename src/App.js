import React from 'react';

import Home21 from "./Views/home/home";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
    <Route path="/"exact component={Home21}/>
    </Router>
</div>

);
}

export default App;
