import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    
    console.log(enteredName, enteredNumber);
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
            onChange={nameChangeHandler}
          ></input>
        </div>
        <div>
          <label>Number:-</label>
          <input
            type="number"
            className="Number"
            onChange={numberChangeHandler}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
