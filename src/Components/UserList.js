import React from "react";
import { ReactDOM } from "react";
import "./UserList.css";

const UserList = (props) => {
  console.log(props.items);
  return (
    <div className="card">
      <h2>Users List</h2>
      <ul>
        {props.items.map((val) => {
          <li key={val.id}> {val.Name} </li>;
        })}
        ;
      </ul>
    </div>
  );
};

export default UserList;
