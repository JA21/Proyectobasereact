import React, { Component } from 'react';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


// importando imgenes 

import image from '../../Components/images/imag5.jpg';



//importando views

import footer from '../Footer/footers';




//importando iconos antd

import {
  HeartOutlined,
  SketchOutlined,
  DesktopOutlined,
  GlobalOutlined
}
  from '@ant-design/icons';

//Utilizando button, topografia antd
import { Button, Typography, Carousel } from 'antd';



//Constantes utilizadas para antd
const { Title } = Typography;

export default class home extends Component {

  render() {

    return (

      <div className="General">
        <div className="imagebackground">
          <div className="Header">

            <div className="Header__titlebos">
              <p className="p2"> Joyas</p>
            </div>


          
              <ul className="HeaderNavList" >
                <li>
                  <Link to={`/Home`} className="styleohome">Home</Link>
                </li>
                <li>
                  <Link to={`/Login`} className="styleohome">Login</Link>
                </li>
                <li>
                  <Link to="/" className="styleohome">Portafolio</Link>
                </li>
                <li>
                  <Link to="/" className="styleohome">Contact</Link>
                </li>
              </ul>
            

          </div>
          <div className="BodyUp">

            <div className="BodyTitle"><Title>YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES</Title> </div>
            <div className="BodyText"><p>Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p></div>
            <div className="BodyButton"><Button type="Default" className="ButtonFind">Button</Button></div>
          </div>
        </div>

        <div className="Bodycont">
          <div className="Bodycontitle"><Title>We've got what you need!</Title></div>
          <div className="BodycontText"><p >Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p></div>
          <div className="Bodycontbutton"><Button type="Default" className="buttoncont">GET STARTED</Button></div>
        </div>



        <div>
          <div className="BodycontItem">
            <div className="BodycontItemText"><Title level={3}>At Your Service</Title></div>
            <div className="BodycontIcons">
              <div className="BodySpaceIcons"><SketchOutlined className="ColorSetIcom" />
                <Title level={3}>Sturdy Themes</Title>
                <Title level={4}>Our themes are updated regularly to keep them bug free!</Title></div>

              <div> <DesktopOutlined className="ColorSetIcom" />
                <Title level={3}>Up to Date</Title>
                <Title level={4}>All dependencies are kept current to keep things fresh.</Title> </div>

              <div ><GlobalOutlined className="ColorSetIcom" />
                <Title level={3}>Ready to Publish</Title>
                <Title level={4}>You can use this design as is, or you can make changes!</Title>
              </div>

              <div> <HeartOutlined className="ColorSetIcom" />
                <Title level={3}>Made with Love</Title>
                <Title level={4}>Is it really open source if it's not made with love?</Title>
              </div>

            </div>
          </div>
        </div>

        {/* <div className="BodyCarousel"> */}
        <Carousel autoplay>
          <div className="BodyCarouselimage">
            <img src="https://wallpaperaccess.com/full/770073.jpg" alt="°1" />
            <p>Image1</p>
          </div>

          <div className="BodyCarouselimage">
            <img src="https://i.ytimg.com/vi/4ZhH-o-jzMM/maxresdefault.jpg" alt="°2" />
            <p>Image2</p>
          </div >

          <div className="BodyCarouselimage">
            <img src="http://www.suncityvillas.com/size/1024x768/server13-cdn/2016/05/09/anime-girl-gaming-wallpaper-anime-girl-with-headphones-a0569b11bb66c42c.jpg" alt="°3" />
            <p>Image3</p>
          </div>

          <div className="BodyCarouselimage">
            <img src={image} alt="°4" />
            <p>Image4</p>
          </div>
        </Carousel>
        {/* </div> */}

        <div>
          <Router>
            <Route path="/" exact component={footer} />
          </Router>
        </div>

      </div>
    );
  }
}