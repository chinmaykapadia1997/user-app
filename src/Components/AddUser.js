import React, { useState } from "react";
import { ReactDOM } from "react";
import Button from "./Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onAddUser(enteredName, enteredNumber);
    console.log(enteredName, enteredNumber);
    setEnteredName("");
    setEnteredNumber("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  return (
    <div className="card">
      <form onSubmit={addUserHandler}>
        <div>
          <label>Name:-</label>
          <input
            type="text"
            className="Name"
            value={enteredName}
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Number:-</label>
          <input
            type="number"
            className="Number"
            value={enteredNumber}
            onChange={numberChangeHandler}
          ></input>
        </div>
        <Button type="submit">Add User</Button>
        {/* <button type="submit" onClick={props.onClick}>Submit</button> */}
      </form>
    </div>
  );
};

export default AddUser;
