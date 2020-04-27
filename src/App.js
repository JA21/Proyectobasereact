import React from 'react';


// import Home from "./Views/home/home";
// import Login from './Views/Login/Login';
// import FormRegistro from './Views/FormRegistro/FormRegistro';

import Rute from './Rooutes/Rutas';


//import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (

    <div >
        {/* <Router> */}
          <Rute/>
                {/* <Route path="/" exact component={Home}/>
                <Route path="/Login" component={Login}/>
                <Route path="/FormLogin" component={FormRegistro}/> */}
                {/* </Router> */}

    </div>
  );
}

export default App;
