import React from "react";

function Button(props){
    return (
        <React.Fragment>
        <button onClick={props.btnEventHandler} disabled={props.customDisableParnetAttribute}>
            {props.children}
        </button>
        { props.children === '-' ? '':'Delete'}
        </React.Fragment>
    );
}
export default Button;