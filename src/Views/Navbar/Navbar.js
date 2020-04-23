import React,{Component} from 'react';

import  { BrowserRouter as Router, Link } from 'react-router-dom';


//importando home
//import home from '../home/home';


export default class Navbar extends Component{
    render(){
        return(
            <div className="Header">

            <div className="Header__titlebos">
              <p>Bostrap</p>
            </div>


            <Router>
              <ul className="HeaderNavList" >
                <li>
                  <Link to="/" className="styleohome">Home</Link>
                </li>
                <li>
                  <Link to="/" className="styleohome">Services</Link>
                </li>
                <li>
                  <Link to="/" className="styleohome">Portafolio</Link>
                </li>
                <li>
                  <Link to="/" className="styleohome">Contact</Link>
                </li>
              </ul>
            </Router>


          </div>
        );
    }
}