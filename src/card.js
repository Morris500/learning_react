 import React from "react";
 import {Avartar, Info} from "./avartar";

function Card(props) {
    
    return(
        <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
       <Avartar img={props.img} />
            
        </div>
        <div className="bottom" >
          <Info phone ={props.phone} />
          <Info email ={props.email} />
        </div>
      </div> 
    );
}

export { Card};