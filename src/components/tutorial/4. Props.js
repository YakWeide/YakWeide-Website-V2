import React from "react";

//Props are the values that are passed to a component from its parent component.
// Variablen die in eine funktion übergeben werden

const HelloName = props => {
  return <h1>Hello {props.name}</h1>;
}

//<HelloName name="du Hund" />

export default HelloName;