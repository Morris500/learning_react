import React from "react";
import Input from "./input";
import { userIsRegistered } from "./App";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {userIsRegistered === false ? (
        <Input type="password" placeholder="Confirm" />
      ) : null}

      <button type="submit">{props.button}</button>
    </form>
  );
}

export default Form;
