import React from "react";
import { contacts } from "./contacts";
import {Card} from "./card";

function createcard(props){
  return <Card 
  key = {props.id}
  name= {props.name}
  img = {props.imgURL}
  phone = {props.phone}
  email = {props.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createcard)}
    
      {/* < Card     
      name= {contacts[0].name}
      img ={contacts[0].imgURL}
      phone = {contacts[0].phone}
      email = {contacts[0].email }
      />
       <Card 
      name= {contacts[1].name}
      img ={contacts[1].imgURL}
      phone = {contacts[1].phone}
      email = {contacts[1].email }
      />
       <Card 
      name= {contacts[2].name}
      img ={contacts[2].imgURL}
      phone = {contacts[2].phone}
      email = {contacts[2].email }
      /> */}
    </div>
  );
}

export { App};
