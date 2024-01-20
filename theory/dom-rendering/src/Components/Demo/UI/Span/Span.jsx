import React from "react";
const Span = (props) => {
    console.log("span content exec");
  return (
   <span>
        {props.children[0]}
   </span>
  )
}
export default React.memo(Span)