import React from "react";
import "./UserList.css";

const UserList = (props) => {
  console.log(props.items);
  return (
    <div className="card">
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <td>NAME</td>
            <td>NUMBER</td>
            <td>ACTIONS</td>
          </tr>
        </thead>
        <tbody>
          {props.items.map((val) => (
            <tr>
              <td>{val.Name}</td>
              <td>{val.Number}</td>
              <td>EDIT</td>
              <td>DELETE</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul>
        {/* {props.items.map((val) => (
          <div className="card">
            <li>
              <div >
                {val.Name} {val.Number}
              </div>
            </li>
          </div>
        ))} */}
      </ul>
    </div>
  );
};

export default UserList;
