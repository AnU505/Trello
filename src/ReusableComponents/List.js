import React from "react";

export default function List(props) {
  console.log(props.data.list); 
  return (
    <ul>
     {
        props.data.list !== undefined ? props.data.list.map((e,k) => {
            return (
                <li key={k}>{e}</li>
            )
         }) : ''
     }
    </ul>
  );
}
