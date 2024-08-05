import React from "react";

 function Avartar (props) {
    return <>
    <img
            src= {props.img}
            alt="avatar_img"
            className="circle-img"
          />
    </>
 }
 function Info (props) {
    return <>
    <p className="info">{props.phone}</p>
    <p className="info">{props.email}</p>
    </>
 }
  export {Avartar, Info};
