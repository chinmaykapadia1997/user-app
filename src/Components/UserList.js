import React from "react";
import { ReactDOM } from "react";
import "./UserList.css";

const UserList = (props) => {
  console.log(props.items);

  const deleteUserHandler=()=>{
    console.log(props.items.id);
    props.onDeleteUser(props.items.id);
  }
  return (
    <div className="card">
      <h2>Users List</h2>
      <ul>
        {props.items.map((val) => (
          <li key={val.id} onClick={deleteUserHandler}> {val.Name} </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
