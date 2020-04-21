import React,{Component} from 'react';

//Importando iconos
import {
    PlaySquareTwoTone,
    WhatsAppOutlined,
    MessageOutlined
  }
    from '@ant-design/icons';

    

export default class footer extends Component{
    render(){
        return(

            <div className="Footer">

                
        <div className="Footer__texto" > 
            Copyright © 2020 - Start Bootstrap JAAO

        </div>

        <div className="Footer__Iconos">
        <div className="Footer__Iconos--Youtobe">    
        <PlaySquareTwoTone />
        <p>Youtobe</p>
        </div>
        <div className="Footer__Iconos--Whatsapp">    
        <WhatsAppOutlined />
        <p>Whatsapp</p>
        </div>
        <div className="Footer__Iconos--Messenger">    
        <MessageOutlined />
        <p>Messenger</p>
        </div>
        </div>
        
        </div>
        );
    }
} 