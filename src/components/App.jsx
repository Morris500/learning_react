import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === false ? (
        <Form button="Register" />
      ) : (
        <Form button="Login" />
      )}
    </div>
  );
}

export { App, userIsRegistered };
