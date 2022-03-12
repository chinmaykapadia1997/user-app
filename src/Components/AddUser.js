import React, { useRef, useState } from "react";
import { ReactDOM } from "react";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import "./AddUser.css";

const AddUser = (props) => {
  const nameRef = useRef();
  const numberRef = useRef();

 // const [enteredName, setEnteredName] = useState("");
 // const [enteredNumber, setEnteredNumber] = useState("");
  const [error, setError] = useState();
  //const [valid, isValid] = useState(true);


  const addUserHandler = (event) => {
    event.preventDefault();
    //console.log(nameRef.current.value);
    const enterName = nameRef.current.value;
    const enterNumber = numberRef.current.value;

    if (enterName.trim().length === 0 || enterNumber.trim().length === 0) {
      setError({title: "Error", message: "please enter valid input"});
      return;
    }
    console.log(enterNumber.length);
    if(enterNumber.length < 10){
      setError({title: "Error", message: "Enter valid number"});
      return;
    }
    props.onAddUser(enterName, enterNumber);
    //console.log(enteredName, enteredNumber);
    nameRef.current.value='';
    numberRef.current.value='';
  //  setEnteredName("");
  //  setEnteredNumber("");
  };

  // const nameChangeHandler = (event) => {
  //   // if (enteredName.trim().length > 0) {
  //   //   //setError(null);
  //   //   //isValid(true);
  //   //   return;
  //   // }
  //   setEnteredName(event.target.value);
  // };

  // const numberChangeHandler = (event) => {
  //   // if (enteredNumber.trim().length > 0) {
  //   //   //setError(null);
  //   //   //isValid(true);
  //   //   return;
  //   // }
  //   // if(enteredNumber.trim().length < 10){
  //   //   return;
  //   // }
  //   setEnteredNumber(event.target.value);
  // };

  const errorHandler =()=>{
    setError(null);
  }
  return (
    <Wrapper> 
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
     
      <div className="card">
        <form onSubmit={addUserHandler}>
          <div className="input-name">
            <label>Name:-</label>
            <input
              type="text"
              className="Name"
              ref={nameRef}
            ></input>
          </div>
          <div className="input-number">
            <label>Number:-</label>
            <input
              type="number"
              className="Number"
              ref={numberRef}
            ></input>
          </div>
          <Button type="submit">Add User</Button>
          {/* <button type="submit" onClick={props.onClick}>Submit</button> */}
        </form>
      </div>
    </Wrapper>
  );
};

export default AddUser;
