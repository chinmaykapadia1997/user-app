import React, { useState } from "react";
import { ReactDOM } from "react";
import AddUser from "./Components/AddUser";
import UserList from "./Components/UserList";
import "./App.css";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (username, usernumber) => {
    setUserList((prevUser) => {
      return [
        ...prevUser,
        { Name: username, Number: usernumber},
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList items={usersList}></UserList>
    </React.Fragment>
  );
}

export default App;
