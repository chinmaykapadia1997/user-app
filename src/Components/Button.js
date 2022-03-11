import { isVisible } from "@testing-library/user-event/dist/utils";
import React from "react";
import { ReactDOM } from "react";

const Button =(props) =>{
    return (
        <button className="" type={props.type || "submit"} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;