import React from "react";

//Javascript XML (Jsx) => Javascript Erweiterung
//XML like code für elemente und komponenten
//haben tag name, attribute, children
//React kann ohne JSX benutzt werden aber JSX macht es einfacher

//mit JSX:
const Hello = () => {
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}


//ohne JSX:
const Hello1 = () => {
    return React.createElement('div', null, 
        React.createElement('h1', null, 'Hello World'));
}

//null = optionales element zum beispiel: id: "hello" oder className: "hello"




export default Hello;