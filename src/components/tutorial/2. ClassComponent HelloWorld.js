import React, { Component } from 'react';

//Class Components (rce) can also maintain a private internal state.

//Unterschiede 
//Functional Components so viel wie möglich verwenden
//Functional vorteile:
//  Kein this keyword
//  man muss sich um kein "state" kümmern => kann aufwendig sein
//Class Vorteile:
//  private data - state
//  Komplexere UI Logik
//  Bietet lifecycle hooks

class ClassHelloWorld extends Component {
    render () {
        return <h2>Hello World</h2>
    }
}

export default ClassHelloWorld;