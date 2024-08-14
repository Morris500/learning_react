import React from "react";
import { contacts } from "./contacts";
import {Card} from "./card";

// function createcard(props){
//   return <Card 
//   key = {props.id}
//   name= {props.name}
//   img = {props.imgURL}
//   phone = {props.phone}
//   email = {props.email}
//   />
// }

// function App() {
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       {contacts.map(createcard)}
    
import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(time);

  function time() {
    return new Date().toLocaleTimeString();
  }
  
  function gettime() {
    setcount(time);
  }
  setInterval(gettime, 1000);
  
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={gettime}>Get Time</button>
    </div>
  );
}

export default App;

    </div>
  );
}

export { App};
