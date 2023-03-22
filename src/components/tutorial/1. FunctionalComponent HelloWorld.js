import React from "react";

//Stateless Functional Component (SFC)
//Javascript function that returns JSX(Html) to render on the screen
//Alternative to Statefull Class Component

/*
function HelloWorld() {
  return <h1>Hello World</h1>;
}
*/
const FunctionalHelloWorld = () => <h1>HelloWorld</h1>  //ES6 Arrow Function
export default FunctionalHelloWorld;

/*
Alternativ:
export const HelloWorld = () => <h1>HelloWorld</h1>  //ES6 Arrow Function
Oben ist default export => import name in App.js ist egal                                     ==> import x from './components/HelloWorld';
Hier ist kein default export => import name in App.js muss HelloWorld sein sonst fehler       ==> import { HelloWorld } from './components/HelloWorld';
*/